import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
//import { readSync } from 'node:fs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  isloggedIn = false;
  //usuario = new Usuario();
  //token: firebase.firestore;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  public async signIn(usuario: Usuario) {
    return this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.pass);
  }

  public async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['']);
  }

  public async register(usuario: Usuario) {
    return this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass);
  }
  /*login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword
  }*/


  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(

    );
  }

  /*public async signOut() { 
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }*/
  
  //public async register(usuario: Usuario) {
  //  return this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass);
  //}
}
