import { Component } from '@angular/core';
import { CredenciaisDTO } from 'app/models/credenciais.dto';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  creds: CredenciaisDTO = {
    email: "centroedu@gmail.com",
    senha: "senha1"
  };

  constructor(
    private router: Router,
    public menu: MenuController,
    public auth: AuthService,
       ) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
    console.clear();
    console.log(localStorage.getItem('localUser'));



  }


  ionViewDidLeave() {
    this.menu.swipeEnable(true);
    this.menu.enable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('alunos');
      },
        error => { });

  }
  /*ngOnInit(): void {
    this.auth.refreshToken()
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.router.navigateByUrl('alunos');
    },
    error => {});
  }*/


  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('alunosinstituicao');
      },
        error => { });

  }

  signup() {
    this.router.navigateByUrl('signup');

  }


}





