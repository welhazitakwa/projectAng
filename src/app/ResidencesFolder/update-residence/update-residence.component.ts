import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/Core/Model/residence';
import { ResidenceService } from 'src/app/Core/Services/residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css'],
})
export class UpdateResidenceComponent {
  constructor(private actR: ActivatedRoute, private resS: ResidenceService, private Rout: Router) {}
  id!: number;
  residence!: Residence;
  updateForm! : FormGroup ; 
  ngOnInit() {
   
    this.id = Number (this.actR.snapshot.paramMap.get('id')) ;
    this.resS.getResidenceById(this.id).subscribe(
     (donne)=>this.residence = donne);
      this.updateForm.patchValue(this.residence);
     this.updateForm = new FormGroup({
       id: new FormControl(this.residence.id),
       name: new FormControl(this.residence.name),
       address: new FormControl(this.residence.address),
       image: new FormControl(this.residence.image),
       status: new FormControl(this.residence.status)
     });
    }

updateRes(){
     this.resS.updateResidence(this.residence).subscribe(() => {
       console.log('Résidence mise à jour avec succès');
       this.Rout.navigate(['/residences']); // Redirection après mise à jour
     });

}


}
