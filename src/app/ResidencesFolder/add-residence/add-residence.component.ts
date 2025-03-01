import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Residence } from 'src/app/Core/Model/residence';
import { ResidenceService } from 'src/app/Core/Services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {
  addForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    image: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(private resServ: ResidenceService, private Rout: Router) {}
  get name() {
    return this.addForm.get('name');
  }

  get address() {
    return this.addForm.get('address');
  }

  R!: Residence;
  SaveResidence(F: FormGroup) {
    
    this.R = { ...F.value };
    console.log(this.R);
    this.resServ.addResidence(this.R).subscribe(() => {
      console.log('Residence ajoutée avec succès');
      this.Rout.navigate(['/residences']);
    });
  }
}
