import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
 import { Details } from '../interface/this';
import { Observable } from 'rxjs';
// import { Partner } from '../interface/this';
import { Partner } from '../interface/detail';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router: Router ,  private fs: Firestore) {}
  //login
  login(email : string, password : string)
  {
     this.fireauth.signInWithEmailAndPassword(email,password).then( () =>
  {
localStorage.setItem('token','true')
this.router.navigate(['/user']) 
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

//add
add(details: Details) {
  details.id = doc(collection(this.fs, 'id')).id;
  return addDoc(collection(this.fs, 'doctorbook',), details);
}
//read
get(): Observable<Details[]> {
  let detailsRef = collection(this.fs, 'doctorbook');
  return collectionData(detailsRef, { idField: 'doc_id' }) as Observable<
    Details[]
  >;
}

//add partner
addp(detail: Partner) {
  detail.id1 = doc(collection(this.fs, 'id1')).id;
  return addDoc(collection(this.fs, 'collab',), detail);
}
//read
getp(): Observable<Partner[]> {
  let detailRef = collection(this.fs, 'collab');
  return collectionData(detailRef, { idField: 'doc_id' }) as Observable<
    Partner[]
  >;
}

// get a add details by id
// async getAddById(id: any): Promise<any> {
//   let docRef = doc(this.fs, 'Details', id);
//   try {
//     const docSDnap = await getDoc(docRef);

//     if (docSDnap.exists()) {
//       return docSDnap.data();
//     } else {
//       console.log('Document is  Missing');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// update(id: any, details: any) {
//   let docRef = doc(this.fs, 'carrers', id);
//   return updateDoc(docRef, details);
// }




delete(id:any){
  let docRef = doc(this.fs, 'doctorbook', id);
  return deleteDoc(docRef)

}

deletep(id1:any){
  let docRef = doc(this.fs, 'collab', id1);
  return deleteDoc(docRef)

}
adminlogin(email: string, password: string) {
  this.fireauth.signInWithEmailAndPassword(email, password).then(
    (res) => {
      localStorage.setItem('token', 'true');
       this.router.navigateByUrl('admin');
      //if (res.user?.emailVerified == true)
       //{
       // this.router.navigate(['/admin']);
      // } 
      // else
       //{
       // this.router.navigate(['loginadmin']);
      //  }
    },
    (err) => {
      alert('something went wrong');
      this.router.navigate(['/homepage']);
    }
  );
}

  //adminlogout
  logout()
  {
    this.fireauth.signOut().then( () =>{
      localStorage.removeItem('token');
      this.router.navigate(['/loginadmin']);

    },err =>{
      alert(err.message);
    })

}

}

 

