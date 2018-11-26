import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../shared_service/product.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  
})
export class ListProductComponent implements OnInit {
  product: Product[];
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data => (this.product = data));
  }
  deleteProduct(product: Product): void {
    swal({
      title: 'Jestes pewien?',
      text: `Czy na pewno chcesz usunąć produkt ${product.name} ${
        product.category
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Usuń!',
      cancelButtonText: 'Anuluj'
    }).then(result => {
      if (result.value) {
        this.service.deleteProduct(product.id).subscribe(data => {
          this.product = this.product.filter(c => c !== product);
        });

        swal('Produkt został usunięty', 'success');
      }
    });
  }

  editProduct(product: Product): void {
    localStorage.removeItem('editProductId');
    localStorage.setItem('editProductId', product.id.toString());
    this.router.navigate(['edit-product']);
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  }
  listUsers(): void {
    this.router.navigate(['list-users']);
  }
}
