import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(private fs: Firestore) {}

  ngOnInit() {
    const testCollection = collection(this.fs, 'test');
    addDoc(testCollection, { text: 'Fuck you ' });
  }
}
