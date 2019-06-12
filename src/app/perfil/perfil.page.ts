import { Component, OnInit } from '@angular/core';
import { AprendizFullDTO } from 'app/models/aprendizfull.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { AprendizCompleto } from 'services/domain/aprendizCompleto.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  dados:AprendizFullDTO;

  constructor(
    private router: Router, private route: ActivatedRoute,
    public completoService: AprendizCompleto) { }

  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem('localUser'));
    this.completoService.findByEmail(obj.email).subscribe(response => {
      console.log(response.cnpj)
      this.dados = {
        id: response.id,
        nome: response.nome,
        telefone: response.telefone,
        email: response.email,
        endereco: response.endereco,
        cnpj: response.cnpj,
        dataNascimento: response.dataNascimento,
        telefoneResp: response.telefoneResp
      };

      console.log("Teste1: ");
      console.log(this.dados);
    },
      error => {
        console.log(error);
      });
      
  }
    
  }
