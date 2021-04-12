import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioInterface } from 'src/app/interface/usuario-interface';
import { AuthFirebaseService } from '../../servicios/auth-firebase.service';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //usuario: UsuarioInterface;
  registro = false;
  //nombre:string;

  constructor(private authFirebase: AuthFirebaseService,
              private route: Router, 
              private db: AngularFirestore) { 
    //console.log(authFirebase.afAuth.user);
    //this.nombre = '';
    //authFirebase.login();
  }

  ngOnInit(): void {
  }

  /*login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authFirebase.login(email,password);
  }*/
  

  Ingresar(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email);
    console.log(password);

    let usuario = new Usuario(email,password);

    this.authFirebase.signIn(usuario).then(res => {
      console.log('Login exitoso', res);
      this.authFirebase.isloggedIn = true;

      this.db.collection('log').add({
          email: usuario.email,
          //fechaacceso: firebase.firestore.FieldValue.serverTimestamp(),
          dato: 'login usuarios'
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        //this.miservicio.usuario = this.usuario;
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Login error: ', error);
      this.route.navigate(['error']);
    });

  }

  Registrar(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.nombre;
    console.log(email);
    console.log(password);

    //let usuario = new Usuario(email,password);
    let usuario: UsuarioInterface;
    usuario = {email: email,pass: password, nombre: name}
    console.log(usuario);
    this.authFirebase.register(usuario).then(res => {
      console.log('Registro exitoso', res);
      this.authFirebase.isloggedIn = true;
      this.db.collection('usuarios').add({
          email: usuario.email,
          nombre: usuario.nombre
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        //this.miservicio.usuario = this.usuario;
        this.route.navigate(['login']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Registro error: ', error);
      this.route.navigate(['error']);
    });
  }

}
