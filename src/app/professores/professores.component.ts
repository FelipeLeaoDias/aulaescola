import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores';

  professores = [
    { id: 1, nome: 'Claudinei', disciplina: 'Grafos' },
    { id: 2, nome: 'Ernesto', disciplina: 'Sistema Operacional' },
    { id: 3, nome: 'Maneca', disciplina: 'Sinais' },
    { id: 4, nome: 'Luzinalva', disciplina: 'Geometria Analitica' },
  ];

  constructor() {}

  ngOnInit() {}
}
