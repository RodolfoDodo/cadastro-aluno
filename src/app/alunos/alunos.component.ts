import { Observable } from 'rxjs';
import { AlunoModel } from '../model/aluno.model';
import { AlunosService } from './../service/alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel();

  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.listaAlunos();
  }

  cadastrar() {
    this.alunosService.cadastroAluno(this.aluno).subscribe((aluno) => {
      this.aluno = new AlunoModel();
      this.listaAlunos();
    });
  }

  atualizar(id: string) {
    this.alunosService.atualizar(id, this.aluno).subscribe((aluno) => {
      this.aluno = new AlunoModel();
      this.listaAlunos();
    });
  }

  remover(id: string) {
    this.alunosService.remover(id).subscribe((aluno) => {
      this.listaAlunos()
    })
  }

  listaAlunos() {
    this.alunosService.listaAlunos().subscribe(
      (alunos) => {
        this.alunos = alunos;
      },
      (err) => {
        console.log('Erro ao chamar o endpoint', err);
      }
    );
  }
}
