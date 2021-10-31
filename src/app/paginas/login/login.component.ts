import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  usuario : any = "";
  perfilesGenerales : any = "";
  ingresoRapido : boolean = false;
  constructor(public as : AuthService, private formBuilder : FormBuilder, private fs : FirestoreService) {
    this.form = this.formBuilder.group({
      'mail' : ['',[Validators.required,Validators.email]],
      'password' : ['',[Validators.required,Validators.minLength(6)]],  
    });

    this.fs.traerPerfilesGenerales().subscribe(value =>{
      this.perfilesGenerales = value;
    });
   }

  ngOnInit(): void {
  }

  logearse()
  {
    this.usuario = {
      mail : this.form.get('mail')?.value,
      password : this.form.get('password')?.value 
    }
    this.as.login(this.usuario);
  }

  cargarPerfil(perfil : any)
  {
    this.form.get('mail')?.setValue(perfil.mail);
    this.form.get('password')?.setValue(perfil.password);
    console.log(perfil.imagenes);

  }

}
