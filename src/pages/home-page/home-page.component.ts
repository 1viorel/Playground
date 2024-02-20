import { Component, OnInit } from '@angular/core';
import { collection, doc, Firestore, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(private fs: Firestore) {}
  number: number = 0;
  ngOnInit() {
    const testCollection = collection(this.fs, 'backend_number');
    const documentId = 'kEQJFfMWHJuGyAXaRRqF';
    const documentRef = doc(testCollection, documentId);
    getDoc(documentRef);
  }
}
