import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonFooter,
  IonButton
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { Grocery } from '../services/grocery/grocery';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    IonFooter,
    IonButton,
    RouterLink,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  sizeCheck: number = 6;
  name!: string;
  items: any[] = [];
  image!: string | undefined;

  // private router = inject(Router);

  // navigate(id: string) {
  //   this.router.navigate(['items', id]);
  // }

  private groceryService = inject(Grocery);
  constructor() {}

  view(item: any) {
    console.log('view item', item);
  }

  ngOnInit() {
    this.items = this.groceryService.getItems();
  }

  async uploadImage() {
    try {
      // const permission = await Camera.checkPermissions();
      const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Uri
    });
    this.image = image.webPath;
    console.log(image);
    } catch (e) {
      console.log(e);      
    }
  }

}
