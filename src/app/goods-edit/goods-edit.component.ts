import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {Goods} from '../model/Goods';
import {GoodsService} from '../model/goods.service';

@Component({
  selector: 'app-goods-edit',
  templateUrl: './goods-edit.component.html',
  styleUrls: ['./goods-edit.component.css'],
  providers: [GoodsService],
})
export class GoodsEditComponent implements OnInit {

  public title;
  public id;
  public obj: Goods;
  public errors: any;

  protected loadObject()
  {
    this.supplierService.getGoods(this.id).subscribe(
      data => {
        this.supplierService.fill(this.obj, data);
      },
      errors => this.errors = errors
    );
  }

  constructor( private activateRoute: ActivatedRoute, 
      public supplierService : GoodsService,
      public router: Router ) { 
    activateRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.obj = new Goods();

      if(this.id) {
        this.loadObject();
      }
      
    });
  }

  public save(data)  {
    this.supplierService.updateOrCreate(this.obj).subscribe(
      data => {
        this.router.navigateByUrl('/goods');
      },
      errors => this.errors = errors
    );
  }

  ngOnInit() {
    this.title = this.id? 
      "Редактирование товар #" + this.id : 
      "Создание товар"
  }


}
