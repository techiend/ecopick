import { Injectable } from '@angular/core';
import { Person } from '../../classes/profile/person';
import { persondata } from '../../classes/profile/persondata';
import { Child } from '../../classes/profile/child';
import { serverURL } from '../../constants/serverURL';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHttpMessageService } from '../process-http-message.service';
import { EdoCivil } from '../../classes/profile/edocivil';
import { Genero } from '../../classes/profile/genero';
import { Place } from '../../classes/profile/place';
import { telefono } from '../../classes/profile/telefono';
import { Disponibilidad } from '../../classes/profile/disponibilidad';
import { User } from '../../classes/profile/user';
import { Recovery } from '../../classes/auth/recovery';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  hijos: Child[] = null;
  edocivil: EdoCivil = {
    _id: 0,
    nombre: '',
  };
  genero: Genero = {
    _id: 0,
    nombre: '',
  };

  pais: Place = {
    _id: 0,
    nombre: '',
  };
  estado: Place = {
    _id: 0,
    nombre: '',
  };
  ciudad: Place = {
    _id: 0,
    nombre: '',
  };
  parroquia: Place = {
    _id: 0,
    nombre: '',
  };
  lugar: Place = {
    _id: 0,
    nombre: '',
  };

  telefono: telefono = {
    numero: 0,
  };



  horario_ini: Disponibilidad = {
    _id: 0,
    hora: null,
  };
  horario_fin: Disponibilidad = {
    _id: 0,
    hora: null,
  };

  personaData: persondata = {
    hijos: this.hijos,
    fkEdoCivil: this.edocivil,
    fkGenero: this.genero,
    id_pais: this.pais,
    id_estado: this.estado,
    id_ciudad: this.ciudad,
    id_parroquia: this.parroquia,
    fkLugar: this.lugar,
    codigo_pais: 0,
    telefono: this.telefono,
    id_horario_inicial: this.horario_ini,
    id_horario_final: this.horario_fin
  };

  user: Person = {
    email: '',
    password: '',
    fkPersona: this.personaData
  };

  pregunta: Recovery = {
    _id: 0
  };

  usuario: User = {
    email: '',
    contraseña: '',
    confirmar_contraseña: '',
    nombre: '',
    apellido: '',
    genero: '',
    fechaNacimiento: '01/01/1990',
    telefono: '',
    tipo: 0,
    numeroIdentificacion: '',
    respuestaSeguridad: '',
    fkLugar: this.lugar,
    fkPregunta: this.pregunta
  };

  constructor(private http: HttpClient,
    private processHTTPMessageService: ProcessHttpMessageService) {
  }

  cleanUsuario(): void{
    this.edocivil = {
      _id: 0,
      nombre: '',
    };
    this.genero = {
      _id: 0,
      nombre: '',
    };
  
    this.pais = {
      _id: 0,
      nombre: '',
    };
    this.estado = {
      _id: 0,
      nombre: '',
    };
    this.ciudad = {
      _id: 0,
      nombre: '',
    };
    this.parroquia = {
      _id: 0,
      nombre: '',
    };
    this.lugar = {
      _id: 0,
      nombre: '',
    };
  
    this.telefono = {
      numero: 0,
    };
  
  
  
    this.horario_ini = {
      _id: 0,
      hora: null,
    };
    this.horario_fin = {
      _id: 0,
      hora: null,
    };
  
    this.personaData = {
      hijos: this.hijos,
      fkEdoCivil: this.edocivil,
      fkGenero: this.genero,
      id_pais: this.pais,
      id_estado: this.estado,
      id_ciudad: this.ciudad,
      id_parroquia: this.parroquia,
      fkLugar: this.lugar,
      codigo_pais: 0,
      telefono: this.telefono,
      id_horario_inicial: this.horario_ini,
      id_horario_final: this.horario_fin
    };
  
    this.user = {
      email: '',
      password: '',
      fkPersona: this.personaData
    };
  
    this.pregunta = {
      _id: 0
    };

    this.usuario = {
      email: '',
      contraseña: '',
      confirmar_contraseña: '',
      nombre: '',
      apellido: '',
      genero: '',
      fechaNacimiento: '01/01/1990',
      telefono: '',
      tipo: 0,
      numeroIdentificacion: '',
      respuestaSeguridad: '',
      fkLugar: this.lugar,
      fkPregunta: this.pregunta
    };
  }

  postRegister(user: Person): Observable<Person>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // return this.http.post<Person>(baseURL + 'register', this.user, httpOptions)
    return this.http.post<Person>(serverURL + 'sesion/register', this.user, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError))
  }
  
  postRegistrarUsuario(usuario: User): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<User>(serverURL + 'sesion/register', usuario, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError))
  }

  postValidRegistro(usuario: User): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<User>(serverURL + 'sesion/validRegister', usuario, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError));
  }

  postValidRegister(): Observable<Person>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Person>(serverURL + 'sesion/validRegister', this.user, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError));
  }

}
