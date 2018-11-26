import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../shared_service/product.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: []
})
export class EditProductComponent implements OnInit {

  product: Product;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ProductService) { }

  ngOnInit() {

    const productId = localStorage.getItem('editProductId');

    if ( !productId ) {
      alert('Akcja niedozwolona');
      this.router.navigate(['list-product']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.service.getProduct(+productId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-product']);
        swal({
          position: 'top',
          type: 'success',
          title: `Produkt zmodyfikowany poprawnie`,
          showConfirmButton: false,
          timer: 2000
          
        });
       
      },
      error => {
        alert(error);
       
      });
  }

}