import { Veiculo } from './../Veiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "http://localhost:8080/veiculos"

  constructor(private snackBar: MatSnackBar,  private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      
    })
  }

  create(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(this.baseUrl, veiculo)
  }

  read(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseUrl)
  }

  readById(id: number): Observable<Veiculo>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Veiculo>(url);
  }
  update(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.baseUrl}/${veiculo.id}`
    return this.http.put<Veiculo>(url, veiculo);
  }

  delete(id: number): Observable<Veiculo>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Veiculo>(url);
  }


}
