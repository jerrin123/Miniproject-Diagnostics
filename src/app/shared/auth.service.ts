import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router: Router) {}
  //login
  login(email : string, password : string)
  {
     this.fireauth.signInWithEmailAndPassword(email,password).then( () =>
  {
localStorage.setItem('token','true')
this.router.navigate(['/booking']) 
}, err => {
    alert('You Need to Create an Account')
    this.router.navigate(['/login'])
     })
  }

  //signup
  
  register(email : string, password : string)
  {
     this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
     alert('registration succesfully')
      this.router.navigate(['/login']) 
}, err => {
    alert('err.message')
    this.router.navigate(['/register'])
     })
  }
      

  //forgot password
  forgotpassword(email : string){
    this.fireauth.sendPasswordResetEmail(email).then(() =>{
      this.router.navigate(['verify']);
    }, err =>{
      alert('something wromg');
    })
  }

  //signout
signOut(){
  this.fireauth.signOut().then( () =>{
localStorage.removeItem('token');
this.router.navigate(['/'])
  }, err =>{
    alert(err.message);
    // this.router.navigate(['/'])
  })
}

}

 

