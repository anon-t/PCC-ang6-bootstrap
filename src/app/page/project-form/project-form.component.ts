import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/model/project';
import { ProjectService } from '../../shared/service/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { UploadService } from '../../shared/upload/upload.service';
import { environment } from '../../../environments/environment';
import { ProjectUpdate } from '../../shared/model/project-update';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project: ProjectUpdate = <ProjectUpdate>{
    status: 'Y'
  };

  flieList: Array<File>;

  mode = 'add';

  constructor(
    private projectSevice: ProjectService,
    private router: Router,
    private uploadService: UploadService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe( (params) => {
      if (params.id === '0') {
        this.mode = 'add';
      } else {
        this.mode = 'edit';
        this.loadProjById(params.code);
      }
    });
  }

  ngOnInit() {
  }

  onSelectFile(files) {
    this.flieList = <Array<File>> files.target.files;
    this.project.projImage = this.flieList[0].name;
  }

  onSubmit(f) {
    if (f.valid) {
      if (this.project.projImage !== this.project.projImageOri) {
        this.uploadService.makeFileRequest(`${environment.apiUrl}/api/v1/upload/project/${this.project.projCode}`,
          this.flieList).subscribe(result => {
            this.save();
        });
      } else {
        this.save();
      }
    } else {
      console.log('require');
    }
  }

  save() {
    if (this.mode === 'add') {
      this.projectSevice.addProj(this.project).subscribe(result => {
        if (result.status) {
          this.router.navigate(['admin', 'project-list']);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      this.projectSevice.updateProj(this.project).subscribe(result => {
        if (result.status) {
          this.router.navigate(['admin', 'project-list']);
        }
      });
    }
  }

  onValueChange(e) {
    this.project.projStartDate = e.target.value;
    // this.project.projStartDate = formatDate(e, 'dd/MM/yyyy', 'en-US');
  }

  loadProjById(id) {
    this.projectSevice.loadProjById(id).subscribe(result => {
      this.project = result;
    });
  }

}
