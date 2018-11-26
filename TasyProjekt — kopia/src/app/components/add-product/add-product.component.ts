import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../shared_service/product.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: []
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ProductService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.service.createProduct( this.addForm.value ) 
    .subscribe(data => {
        this.router.navigate(['list-product']);
        
        swal({
          position: 'top',
          type: 'success',
          title: `Product has been created!`,
          showConfirmButton: false,
          timer: 2000,
         
        });
        
      });
  }

}