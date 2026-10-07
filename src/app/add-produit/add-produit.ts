import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService, Produit } from '../produit.service';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produits.html',
  styleUrl: './add-produit.css'
})
export class AddProduit {

  newProduit: Produit = {
    idProduit: '',
    nomProduit: '',
    prixProduit: 0,
    dateCreation: ''
  };

  message: string = '';

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) {}

  addProduit(): void {

    this.produitService.ajouterProduit(this.newProduit);

    this.message = 'Produit ajouté avec succès !';

    this.router.navigate(['/produits']);
  }
}