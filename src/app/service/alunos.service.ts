import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { AlunoModel } from '../model/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  cadastroAluno(aluno: AlunoModel): Observable<any>{
    return this.http.post('http://localhost:3000/alunos', aluno)
  }

  listaAlunos(): Observable<any>{
    return this.http.get('http://localhost:3000/alunos')
  }

  atualizar(id: any, aluno: AlunoModel): Observable<any>{
    return this.http.put('http://localhost:3000/alunos/'.concat(id), aluno)
  }

  remover(id: any): Observable<any>{
    return this.http.delete('http://localhost:3000/alunos/'.concat(id))
  }
}
