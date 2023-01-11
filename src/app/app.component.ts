import { Component } from '@angular/core';
import * as mongoose from 'mongoose';


@Component({
  selector: 'app-root',
  template: `
    <h1>¡MongoDB works!</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    mongoose.connect('mongodb://localhost:4545/mydatabase',{ useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error',console.error.bind(console, 'conection error: '));
    db.once('open', function(){
      console.log('Connected to mongoDB');
    });

  }
}
