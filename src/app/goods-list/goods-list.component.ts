import { Component, OnInit } from '@angular/core';
import {Goods} from '../model/Goods';
import {GoodsService} from '../model/goods.service'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css'],
  providers: [GoodsService],
})
export class GoodsListComponent implements OnInit {
  public items: Goods[];
  public errors: any;

  private goodsService: GoodsService;
  protected createGoods(data: any)
  {
    var obj = new Goods()
    this.goodsService.fill(obj, data);
    return obj;
  }

  public loadGoods() {
      this.items = [];
      this.goodsService.getGoodsList().subscribe(
        list => {
          for(var i=0, len = list.length; i < len; i++) {
            this.items.push(this.createGoods(list[i]));
          }
        },
        errors => {
          console.log(errors);
          this.errors = <any>errors 
        }
      );
  };

  public remove(item: Goods){
    if(!confirm("Удалить `" + item.name + "` ?")) {
      return;
    }

    event.preventDefault();

    this.goodsService.remove(item.goods_id).subscribe(
      result => {
        this.loadGoods();
      },
      errors => {
        console.log(errors);
        this.errors = <any>errors 
      }
    );
  }

  constructor(_goodsService: GoodsService) {
      this.goodsService = _goodsService;
      this.loadGoods();
  }

  ngOnInit() {
  }

}
