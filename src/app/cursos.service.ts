import { environment } from './../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Curso } from './curso-lista/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API =  `${environment.API}cursos`

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]>{

    return this.http.get<Curso[]>(this.API).pipe(

      tap(console.log)

    )

  }
}
