import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FirebaseDatabaseService } from '../shared/services/firebase.service';
import { Observable } from 'rxjs';

export interface PokemonsComponentInferface {
  product: any,
  products: Observable<any>,
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  data: PokemonsComponentInferface = {
    products: null,
    product: null
  };
  contatos: Observable<any>;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private db: FirebaseDatabaseService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.data.products = this.db.list('products');
  }

  openModal(template: TemplateRef<any>, item) {
    console.log(item)
    this.data.product = item;
    this.modalRef = this.modalService.show(template);
  }
}
