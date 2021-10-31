import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor(private router : Router, public as : AuthService) { }

  ngOnInit(): void {
  }

  navegar(pagina : number)
  {
    switch(pagina)
    {
      case 1:
        this.router.navigateByUrl('login');
        break;

      case 2: 
        this.router.navigateByUrl('registro');
        break;
    }
  }
}
