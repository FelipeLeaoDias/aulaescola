import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public title = 'Alunos';
  public alunoSelected: Aluno | null = null;
  public textSimple: string;

  alunos = [
    { id: 1, nome: 'Giulia', sobrenome: 'Soares', telefone: 12341234 },
    { id: 2, nome: 'Pedro', sobrenome: 'Kent', telefone: 43214321 },
    { id: 3, nome: 'Joao', sobrenome: 'Rodrigo', telefone: 54325432 },
    { id: 4, nome: 'Victor', sobrenome: 'Dias', telefone: 87658765 },
    { id: 5, nome: 'Rosana', sobrenome: 'Leão', telefone: 56875687 },
    { id: 6, nome: 'Edilio', sobrenome: 'Pereira', telefone: 78900987 },
  ];

  constructor( private fb: FormBuilder, 
               private modalService: BsModalService) {
   this.criarForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone:  ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value)
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelected = null;
  }

}
