import { Router, Routes } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo:'',
    autoria:'',
    modelo:''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  salvarPensamento(){
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })

  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
