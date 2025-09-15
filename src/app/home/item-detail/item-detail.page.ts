import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Grocery } from 'src/app/services/grocery/grocery';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class ItemDetailPage implements OnInit {

  item: any;
  private route = inject(ActivatedRoute);
  private groceryService = inject(Grocery);

  
  constructor() { }

  ngOnInit() {
    this.getParamData();
  }

  getParamData() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    const items = this.groceryService.getItems();
    this.item = items.find(item => item.id == id);
    console.log(this.item);
  }

}
