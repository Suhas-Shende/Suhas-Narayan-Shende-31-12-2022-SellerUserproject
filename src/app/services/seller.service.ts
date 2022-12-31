import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)
  invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signUp){
    this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
     
      if(result ){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['/'])
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  } 

  userLogin(data:login){
   this.http.get<signUp[]>(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result)
    if(result && result.body?.length){
      this.isLoginError.emit(false)
      localStorage.setItem('seller',JSON.stringify(result.body[0]))
      this.router.navigate(['/'])
    }else{
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
     
      this.router.navigate(['/'])
    }
  }
}
