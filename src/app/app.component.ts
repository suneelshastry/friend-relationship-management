import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { Store } from '@ngrx/store';
export interface Person {
  name?: string;
  friends?: string[];
  age?: number;
  weight?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Friend-management';

  chartData = {
    nodes: [
      {
        id: 1,
        name: 'Ajay'
      },
      {
        id: 2,
        name: 'Bharath'
      },
      {
        id: 3,
        name: 'Charan'
      },
      {
        id: 4,
        name: 'Divya'
      },
      {
        id: 5,
        name: 'Eshwar'
      },
      {
        id: 6,
        name: 'Falgun'
      },
      {
        id: 7,
        name: 'Gopal'
      },
      {
        id: 8,
        name: 'Himanshu'
      },
      {
        id: 9,
        name: 'Ithihas'
      },
      {
        id: 10,
        name: 'Jerome'
      },
    ],
    links: [
      {
        source: 1,
        target: 2
      },
      {
        source: 1,
        target: 5
      },
      {
        source: 1,
        target: 6
      },
      {
        source: 2,
        target: 3
      },
      {
        source: 2,
        target: 7
      },
      {
        source: 3,
        target: 4
      },
      {
        source: 8,
        target: 3
      },
      {
        source: 4,
        target: 5
      },
      {
        source: 4,
        target: 9
      },
      {
        source: 5,
        target: 1
      }
    ]
  };

  constructor(
    public dialog: MatDialog,
    public store: Store<any>,
  ) {
    setTimeout(() => {
      this.chartData = {
        nodes: [
          ...this.chartData.nodes,
          {
            id: 11,
            name: 'Hagar'
          }
        ],
        links: [
          ...this.chartData.links,
        ]
      };
    }, 3000);
  }

  open(): void {
    this.dialog.open(AddFriendComponent);
  }
}
