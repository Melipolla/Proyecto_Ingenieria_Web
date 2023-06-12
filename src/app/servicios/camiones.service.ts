import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camion } from '../interfaces/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionesService {
  private camionesUrl = '../../assets/camiones.json'; 
  constructor(private http: HttpClient) { }

  getCamiones(): Observable<Camion[]> {
    return this.http.get<Camion[]>(this.camionesUrl);
  }

  crearCamion(camion: Camion): Observable<Camion> {

    return this.http.post<Camion>(this.camionesUrl, camion);
  }
}
