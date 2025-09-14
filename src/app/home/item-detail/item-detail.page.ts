import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class ItemDetailPage implements OnInit {

  item: any;
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


  private route = inject(ActivatedRoute);
  

  constructor() { }

  ngOnInit() {
    this.getParamData();
  }

  getParamData() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.item = this.items.find(item => item.id == id);
    console.log(this.item);
  }

}
