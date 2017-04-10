import {NgModule} from "@angular/core";
import {AngularFireModule} from 'angularfire2';
import {BlogComponent} from "./blog.component";

const firebaseConfig = {
  apiKey: 'AIzaSyApUr9qfk1kmVl05hwBMvVKvOGz7-Ntvxg',
  authDomain: 'mikeallisononline.firebaseapp.com',
  databaseURL: 'https://mikeallisononline.firebaseio.com',
  projectId: "mikeallisononline",
  storageBucket: 'mikeallisononline.appspot.com',
  messagingSenderId: '658845182262'
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule {

}
