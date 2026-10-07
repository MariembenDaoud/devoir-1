import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ProduitService, Produit } from '../produit.service';

@Component({
  selector: 'app-produits',
  imports: [DatePipe],
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class Produits {

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.getProduits();
  }
}