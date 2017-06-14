import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/Supplier';
import {SupplierService} from '../model/supplier.service'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  providers: [SupplierService],
  styleUrls: ['./suppliers.component.css']
})

export class SuppliersComponent implements OnInit {
  public items: Supplier[];
  public errors: any;

  private supplierService: SupplierService;

  protected createSupplier(data: any)
  {
    var obj = new Supplier()
    this.supplierService.fill(obj, data);
    return obj;
  }

  public loadSupplier() {
      this.items = [];
      this.supplierService.getSuppliers().subscribe(
        list => {
          for(var i=0, len = list.length; i < len; i++) {
            this.items.push(this.createSupplier(list[i]));
          }
        },
        errors => {
          console.log(errors);
          this.errors = <any>errors 
        }
      );
  };

  public remove(item: Supplier){
    if(!confirm("Удалить `" + item.name + "` ?")) {
      return;
    }

    event.preventDefault();

    this.supplierService.remove(item.suppliers_id).subscribe(
      result => {
        this.loadSupplier();
      },
      errors => {
        console.log(errors);
        this.errors = <any>errors 
      }
    );
  }

  constructor(_supplierService: SupplierService) {
      this.supplierService = _supplierService;
      this.loadSupplier();
  }

  ngOnInit() {
  }

}
