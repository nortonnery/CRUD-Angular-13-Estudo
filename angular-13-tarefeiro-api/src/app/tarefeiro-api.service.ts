import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefeiroApiService {
  readonly tarefeiroApiUrl = "https://localhost:7228/api";

  constructor(private http:HttpClient) { }

  //Tarefa
  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroApiUrl + '/tarefas');
  }

  addTarefa(data:any){
  return this.http.post(this.tarefeiroApiUrl + '/tarefas',data);
  }

  updateTarefa(id:number|string,data:any){
  return this.http.put(this.tarefeiroApiUrl + `/Tarefas/${id}`,data);
  }

  deleteTarefa(id:number|string){
  return this.http.delete(this.tarefeiroApiUrl + `/Tarefas/${id}`);
  }

  //Tarefa Tipos
  getTarefaTiposList():Observable<any[]>{
  return this.http.get<any>(this.tarefeiroApiUrl + '/tarefaTipos');
  }

  addTarefaTipos(data:any){
  return this.http.post(this.tarefeiroApiUrl + '/tarefaTipos',data);
  }

  updateTarefaTipos(id:number|string,data:any){
  return this.http.put(this.tarefeiroApiUrl + '/tarefaTipos/${id}',data);
  }

  deleteTarefaTipos(id:number|string){
  return this.http.delete(this.tarefeiroApiUrl + '/tarefaTipos/${id}');
  }


  //Status
    getStatusList():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroApiUrl + '/status');
    }

    addStatus(data:any){
    return this.http.post(this.tarefeiroApiUrl + '/status',data);
    }

    updateStatus(id:number|string,data:any){
    return this.http.put(this.tarefeiroApiUrl + '/status/${id}',data);
    }

    deleteStatus(id:number|string){
    return this.http.delete(this.tarefeiroApiUrl + '/status/${id}');
    }

}
