import { Injectable } from '@angular/core';

export interface Produit {
  idProduit: string;
  nomProduit: string;
  prixProduit: number;
  dateCreation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [
    {
      idProduit: '1',
      nomProduit: 'PC Asus',
      prixProduit: 2500,
      dateCreation: '2026-10-01'
    },
    {
      idProduit: '2',
      nomProduit: 'Imprimante Epson',
      prixProduit: 450,
      dateCreation: '2026-10-02'
    },
    {
      idProduit: '3',
      nomProduit: 'Tablette Samsung',
      prixProduit: 900,
      dateCreation: '2026-10-03'
    }
  ];

  getProduits(): Produit[] {
    return this.produits;
  }

  ajouterProduit(produit: Produit): void {
    this.produits.push(produit);
  }
}