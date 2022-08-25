import { Veiculo } from './../Veiculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "http://localhost:8080/veiculos"

  constructor(private snackBar: MatSnackBar,  private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"]
      
    })
  }

  create(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(this.baseUrl, veiculo).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Os campo: Placa, Chassi e Marca são obrigatórios!', true)
    return EMPTY
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

 

  downlaodPdf(id: number){
    let headers = new HttpHeaders();
    headers = headers.set('accept', 'application/pdf')
    const url = `${this.baseUrl}/pdf/${id}`
    return this.http.get(url, {headers:headers, responseType:'blob'})
  }

}
