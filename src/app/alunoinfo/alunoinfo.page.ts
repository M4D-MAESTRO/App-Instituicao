import { Component, OnInit } from '@angular/core';
import { Aprendiz_InstituicaoDTO } from 'app/models/aprendiz_instituicao.dto';
import { InstituicaoService } from 'services/domain/instituicao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunoinfo',
  templateUrl: './alunoinfo.page.html',
  styleUrls: ['./alunoinfo.page.scss'],
})
export class AlunoinfoPage implements OnInit {
  private items: Aprendiz_InstituicaoDTO;

  constructor(
    public instituicaoService: InstituicaoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get("nome"));

    let nome = this.route.snapshot.paramMap.get("nome");
    let dataInicio = this.route.snapshot.paramMap.get("dataInicio");
    let dataTermino = this.route.snapshot.paramMap.get("dataTermino");
    let percentualFalta = this.route.snapshot.paramMap.get("percentualFalta");

    this.items =
      {
        nome: nome.substring(0, nome.indexOf('-')),
        dataInicio: dataInicio,
        dataTermino: dataTermino,
        percentualFalta: percentualFalta
      }

    /*
      this.loadImageUrls();
   */

    /*loadImageUrls() {
      for (var i=0; i<this.items.length; i++) {
        let item = this.items[i];
        this.instituicaoService.getSmallImageFromBucket(item.id)
          .subscribe(response => {
            item.imageUrl = `${API_CONFIG.bucketBaseUrl}prod${item.id}-small.jpg`;
          },
          error => {});
      }
    } Aula 135, só liberar quando por as imagens no bucket*/

  };

  alterarFaltas(faltas: string) {
    let falta = parseInt(faltas);
    if (faltas == 'null') {
      falta = 1;
    } else {
      falta++;
    }
    this.items.percentualFalta = falta.toString();

  }
}
