import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {

  cursos!: Curso[]

  cursos$!: Observable<Curso[]>

  error$ = new Subject<boolean>()

  bsModalRef?: BsModalRef;

  constructor(private cursoService: CursosService, private modalService: BsModalService) { }

  ngOnInit(): void {

   this.onRefresh()

  }

  onRefresh(): void{

    this.cursos$ = this.cursoService.list().pipe(
      catchError(error => {

        console.error(error)

        //this.error$.next(true)

        this.handleError()

        return empty()
      })
    )
  }

  handleError(): void{

    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar...';

  }

}
