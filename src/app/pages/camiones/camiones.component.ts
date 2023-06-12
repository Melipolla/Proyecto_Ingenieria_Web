import { Component, OnInit } from '@angular/core';
import { Camion } from 'src/app/interfaces/camion';
import { CamionesService } from 'src/app/servicios/camiones.service';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.scss']
})
export class CamionesComponent implements OnInit {
  Camiones: Camion[] = [];

  constructor(private camionesService: CamionesService) { }

  ngOnInit() {
    this.cargarCamiones();
  }

  cargarCamiones() {
    this.camionesService.getCamiones()
      .subscribe(Camiones => this.Camiones = Camiones);
  }

  crearCamion(nombre: string, conductor: string, patente: string, foto: string) {
    const nuevoCamion: Camion = { nombre, conductor, patente, foto };

    this.camionesService.crearCamion(nuevoCamion)
      .subscribe(camionCreado => {
        this.Camiones.push(camionCreado);
      });
  }
}