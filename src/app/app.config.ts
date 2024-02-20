import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'fir-testing-38d63',
          appId: '1:348115430164:web:db985ad6cc304f332f3001',
          storageBucket: 'fir-testing-38d63.appspot.com',
          apiKey: 'AIzaSyAsGzLx_eIjJlkLX4hRUItLEJep83Zhwdo',
          authDomain: 'fir-testing-38d63.firebaseapp.com',
          messagingSenderId: '348115430164',
        })
      ),
      provideFirestore(() => getFirestore())
    ),
    importProvidersFrom(provideDatabase(() => getDatabase())),
  ],
};
