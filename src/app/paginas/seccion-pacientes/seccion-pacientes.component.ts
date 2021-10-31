import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { TurnoService } from 'src/app/servicios/turno.service';

@Component({
  selector: 'app-seccion-pacientes',
  templateUrl: './seccion-pacientes.component.html',
  styleUrls: ['./seccion-pacientes.component.scss']
})
export class SeccionPacientesComponent implements OnInit {

  pacientes : any = "";
  turnos : any = "";
  pacientesTurnos : any = [];
  pacientesFiltrados : any = [];
  mostrarPacientes : boolean = false;
  mostrarHC : boolean = false;
  pacienteSeleccionado : any = "";

  constructor(public as : AuthService, private fs : FirestoreService, private ts : TurnoService) 
  {
    this.fs.traerPacientes().subscribe(value =>{
      this.pacientes = value;
    });

    this.ts.traerTurnos().subscribe(value =>{
      this.turnos = value;
    });
  }

  ngOnInit(): void {
  }

  listarPacientes()
  {
    for(let turno of this.turnos) 
    {
      if(turno.estado == "Realizado" && turno.especialista.dni == this.as.logeado.dni)
      {
        this.pacientesTurnos.push(turno.paciente);
      }
    }

    for(let paciente of this.pacientes) 
    {
      for(let paciente2 of this.pacientesTurnos) 
      {
        if(paciente.dni == paciente2.dni)
        {
          this.pacientesFiltrados.push(paciente);
        }
      }  
    }

    this.mostrarPacientes = true;
  }

  mostrarHistoriaClinica(paciente : any)
  {
    this.pacienteSeleccionado = paciente;
    this.mostrarHC = !this.mostrarHC;
  }
}
