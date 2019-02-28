import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1, customer:
        { id: 1, name: 'Main', state: 'CO', email: 'mail@mail.com' },
      total: 230, placed: new Date(2019, 2, 20), fulfilled: new Date(2019, 2, 21),
      status: 'Completed'
    },
    {
      id: 2, customer:
        { id: 1, name: 'Main', state: 'CO', email: 'mail@mail.com' },
      total: 230, placed: new Date(2019, 2, 20), fulfilled: new Date(2019, 2, 21),
      status: 'Completed'
    },
    {
      id: 3, customer:
        { id: 1, name: 'Main', state: 'CO', email: 'mail@mail.com' },
      total: 230, placed: new Date(2019, 2, 20), fulfilled: new Date(2019, 2, 21),
      status: 'Completed'
    },
    {
      id: 4, customer:
        { id: 1, name: 'Main', state: 'CO', email: 'mail@mail.com' },
      total: 230, placed: new Date(2019, 2, 20), fulfilled: new Date(2019, 2, 21),
      status: 'Completed'
    },
    {
      id: 5, customer:
        { id: 1, name: 'Main', state: 'CO', email: 'mail@mail.com' },
      total: 230, placed: new Date(2019, 2, 20), fulfilled: new Date(2019, 2, 21),
      status: 'Completed'
    },
    {
      id: 6, customer:
        { id: 1, name: 'Main', state: 'CO', email: 'mail@mail.com' },
      total: 230, placed: new Date(2019, 2, 20), fulfilled: new Date(2019, 2, 21),
      status: 'Completed'
    },


  ]

  ngOnInit() {
  }

}
