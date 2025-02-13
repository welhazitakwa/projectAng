import { Component } from '@angular/core';
import { Residence } from '../../Core/Model/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R3.jpg',
      status: 'En Construction',
    },
  ];

  selectedResidenceId: number | null = null;
  favoriteResidences: number[] = [];
  searchItem = '';
  showAdd(R: Residence) {
    if (R.address == 'inconnu') {
      alert('inconnu');
    } else {
      // this.showA = true
      this.selectedResidenceId =
        this.selectedResidenceId === R.id ? null : R.id;
    }
  }

  addFavorite(R: Residence) {
    const index = this.favoriteResidences.indexOf(R.id);
    if (index === -1) {
      // Si l'ID n'est pas présent, on ajoute le like
      this.favoriteResidences.push(R.id);
    } else {
      // Si l'ID est déjà présent, on retire le like
      this.favoriteResidences.splice(index, 1);
    }
  }

  isFavorite(R: Residence): boolean {
    return this.favoriteResidences.includes(R.id);
  }
}
