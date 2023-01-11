import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit{

  formulario!: FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit():void{
    this.formulario = this.initForm();
    console.clear();

  }

  mostrardata:string[] = [];
  boleano = false;

  tomarDatos(){
    console.log(this.formulario.value);

    this.mostrardata.push(this.formulario.value);
    this.boleano = true;

    this.formulario.reset();
    this.formulario.invalid;
  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      checkAdult: [false, [Validators.required]],
      ciudad: ['', [Validators.required]],
      textTarea: ['', [Validators.required, Validators.maxLength(300),Validators.minLength(10)]]
    })

  }




}
