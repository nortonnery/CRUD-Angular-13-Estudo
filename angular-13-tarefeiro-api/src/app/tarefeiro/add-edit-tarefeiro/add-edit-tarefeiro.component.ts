import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-add-edit-tarefeiro',
  templateUrl: './add-edit-tarefeiro.component.html',
  styleUrls: ['./add-edit-tarefeiro.component.css']
})
export class AddEditTarefeiroComponent implements OnInit {

  tarefaList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  tarefaTipoList$!:Observable<any[]>;


  constructor(private service:TarefeiroApiService){

  }

  @Input() tarefa:any;
  id:number = 0;
  status: string = "";
  comentario: string = "";
  tarefaTipoId!: number;

  ngOnInit(): void{
    this.id = this.tarefa.id;
    this.status = this.tarefa.status;
    this.comentario = this.tarefa.comentario;
    this.tarefaTipoId = this.tarefa.tarefaTipoId;
    this.statusList$ = this.service.getStatusList();
    this.tarefaList$ = this.service.getTarefaList();
    this.tarefaTipoList$ = this.service.getTarefaTiposList();

  }

  addTarefa(){
    var tarefa = {
      status : this.status,
      comentario: this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    this.service.addTarefa(tarefa).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSucess = document.getElementById('add-sucess-alert');
      if (showAddSucess){
        showAddSucess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSucess){
          showAddSucess.style.display="none";
        }
      },4000);
    }

    )

  }

  updateTarefa() {
    var tarefa = {
      id : this.id,
      status : this.status,
      comentario: this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    var id:number = this.id;
    this.service.updateTarefa(id,tarefa).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-sucess-alert');
      if (showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display="none";
        }
      },4000);
    }

    )
  }

}
