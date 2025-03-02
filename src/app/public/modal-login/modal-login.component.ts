import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../services/jwt.service';
import { Jwt } from '../../core/models/jwt';
import { JwtDecoded } from '../../core/models/jwt-decoded';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  frmBuilder:FormBuilder=inject(FormBuilder);
  authService:AuthService=inject(AuthService);
  jwtService:JwtService=inject(JwtService);
  router:Router=inject(Router);

  frmLogin!:FormGroup
  token!:Jwt;
  erreur!:string;
  /**
   *
   */
  constructor() {

    this.frmLogin=this.frmBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    });
  }

  onSubmit() {
    return this.authService.login(this.frmLogin.value).subscribe(res =>
      {
        this.token = res;
        const decodedToken: JwtDecoded = this.jwtService.DecodeToken(this.token.result) as unknown as JwtDecoded;
        console.log(decodedToken.role);
        switch(decodedToken.role){
          case "Admin":
          case "Secretaire":
            this.router.navigate(['/dashboard']);
            break;
          case "Patient":
            break;
          default:
            this.erreur=res.error
            this.router.navigate(['/login']);
        }
      })
    }
}
