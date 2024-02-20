import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Testing';
  firestore = inject(Firestore);
  ngOnInit() {
    initFlowbite();
    getDocs(collection(this.firestore, 'testPath')).then(response => {
      console.log(response.docs);
    });
  }
}
