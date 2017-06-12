import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {Supplier} from '../model/Supplier';
import {SupplierService} from '../model/supplier.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  providers: [SupplierService],
  styleUrls: ['./suppliers-edit.component.css']
})
export class SuppliersEditComponent implements OnInit {
  public title;
  public id;
  public obj: Supplier;
  public errors: any;

  protected loadObject()
  {
    this.supplierService.getSupplier(this.id).subscribe(
      data => {
        this.supplierService.fill(this.obj, data);
      },
      errors => this.errors = errors
    );
  }

  constructor( private activateRoute: ActivatedRoute, 
      public supplierService : SupplierService,
      public router: Router ) { 
    activateRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.obj = new Supplier();

      if(this.id) {
        this.loadObject();
      }
      
    });
  }

  public save(data)  {
    this.supplierService.updateOrCreate(this.obj).subscribe(
      data => {
        this.router.navigateByUrl('/suppliers');
      },
      errors => this.errors = errors
    );
  }

  ngOnInit() {
    this.title = this.id? 
      "Редактирование поставщика #" + this.id : 
      "Создание поставщика"
  }

}
