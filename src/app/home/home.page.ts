import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, RouterLink, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  sizeCheck: number = 6;
  name!: string;
  items: any[] = [
    {
      id: 1,
      name: 'Tomato',
      description: 'Get fresh tomato'
    },
    {
      id: 2,
      name: 'Potato',
      description: 'Big potatos'
    }
  ];

  // private router = inject(Router);

  // navigate(id: string) {
  //   this.router.navigate(['items', id]);
  // }

  constructor() { }

  view(item: any) {
    console.log('view item', item);
  }

  ngOnInit() {
  }

}
