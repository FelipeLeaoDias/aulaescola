import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  public modalRef: BsModalRef;
  public title = 'Professores';
  public professorSelected: Professor | null = null;
  professores = [
    { id: 1, nome: 'Claudinei', disciplina: 'Grafos' },
    { id: 2, nome: 'Ernesto', disciplina: 'Sistema Operacional' },
    { id: 3, nome: 'Maneca', disciplina: 'Sinais' },
    { id: 4, nome: 'Luzinalva', disciplina: 'Geometria Analitica' },
  ];

  
  constructor(private modalService: BsModalService) {

  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  professorSelect(professor: Professor){
    this.professorSelected = professor;
  }

  voltar(){
    this.professorSelected = null;
  }


  ngOnInit() {

  }
}
