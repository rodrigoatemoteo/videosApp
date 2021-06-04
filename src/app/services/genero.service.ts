import { IListaGenero } from './../models/IGenero.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=4f4269461bb15b2305981f5d467c93e2';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{

    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(

      map(retorno=>retorno),
      catchError(erro => this.exibirErro(erro))

    );

  }

  async exibirErro(erro){

    const toast = await this.toastController.create({

      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'

    });
    toast.present();
    return null;

  }

}
