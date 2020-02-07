import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FirebaseDatabaseService } from '../shared/services/firebase.service';
import { Observable } from 'rxjs';

export interface ProductInterface {
  key?: string,
  name: string,
  img: string,
  text: string,
}

export interface PokemonsComponentInferface {
  product: ProductInterface,
  products: Observable<any>,
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  @ViewChild('mutateModal', { static: false }) mutateModal: ModalDirective;
  @ViewChild('viewModal', { static: false }) viewModal: ModalDirective;
  default = {
    formEdit: false,
    product: { img: null, name: null, text: null, }, 
    options: [
      'blastoise',
      'bulbassauro',
      'squirtle',
      'caterpie'
    ],
  };
  
  data: PokemonsComponentInferface = {
    products: null,
    product: this.default.product,

  };
  contatos: Observable<any>;

  constructor(private db: FirebaseDatabaseService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.data.products = this.db.list('products');
  }

  openModal(item) {
    this.data.product = item;
    this.viewModal.show()
  }

  openCreateModal() {
    this.data.product = this.default.product;
    this.default.formEdit = false;
    this.mutateModal.show();
  }

  openEditModal() {
    this.default.formEdit = true;
    this.viewModal.hide()
    this.mutateModal.show();
  }

  deleteProduct() {
    const { product } = this.data;
    this.db.delete('products', product)
    this.data.product = this.default.product;
    this.viewModal.hide()
  }

  submit() {
    const { formEdit } = this.default;
    const { product } = this.data;
    (formEdit) ? this.db.edit('products', product) : this.db.insert('products', product);
    this.mutateModal.hide()
  }
}
