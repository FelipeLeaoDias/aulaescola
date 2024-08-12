import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public title = 'Alunos';

  alunos = [
    { id: 1, nome: 'Giulia', sobrenome: 'Soares', telefone: 12341234 },
    { id: 2, nome: 'Pedro', sobrenome: 'Kent', telefone: 43214321 },
    { id: 3, nome: 'Joao', sobrenome: 'Rodrigo', telefone: 54325432 },
    { id: 4, nome: 'Victor', sobrenome: 'Dias', telefone: 87658765 },
    { id: 5, nome: 'Rosana', sobrenome: 'Leão', telefone: 56875687 },
    { id: 6, nome: 'Edilio', sobrenome: 'Pereira', telefone: 78900987 },
  ];

  constructor() {}

  ngOnInit() {}
}
