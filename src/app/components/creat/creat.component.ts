import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss'],
  providers: [ProjectService, UploadService]
})
export class CreatComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService : ProjectService,
    private _uploadService: UploadService
  ) { 
    this.title = "Crear proyecto";
    this.project = new Project('', '','','','',2022,'');
    this.status = "";
    this.filesToUpload = [];

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          // subir imagen
          this._uploadService.makeFileRequest(Global.url+"upload/"+response.project._id, [], this.filesToUpload, 'image')
          .then((result:any)=>{
            console.log(result);
            this.status = 'success';
            form.reset();
          });

        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
