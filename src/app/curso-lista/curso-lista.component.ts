import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {

  cursos!: Curso[]

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {

    this.cursoService.list().subscribe(

      dados => this.cursos = dados

    )
  }

}
