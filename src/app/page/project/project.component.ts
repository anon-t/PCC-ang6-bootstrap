import { Component, OnInit } from '@angular/core';
import { ProjectSearch } from '../../shared/model/project-search';
import { ProjectResult } from '../../shared/model/project-result';
import { Pagination } from '../../shared/model/pagination';
import { Project } from '../../shared/model/project';
import { ProjectService } from '../../shared/service/project.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  imgUrl = environment.apiUrl + '/api/v1/upload/viewImg/project/';

  projSearch: ProjectSearch = <ProjectSearch>{
    projName: '',
    offset: 0,
    rowPerPage: 10
  };
  projResult: ProjectResult = <ProjectResult>{};
  pagination: Pagination = <Pagination>{};
  project: Project[];

  totalItems = 0;
  currentPage = 0;

  constructor(
    private projService: ProjectService
  ) { }

  ngOnInit() {
    this.onSearchProj();
  }

  onSearchProj() {
    this.projService.searchProj(this.projSearch).subscribe(
      result => {
      this.project = result.rows;
      this.pagination = result.paging;
      this.totalItems = result.paging.total_count;
      this.currentPage = result.paging.current_page;
    }, error => {

    });
  }

  onDelProj(code) {
    this.projService.delProj(code).subscribe(result => {
      if (result.status) {
        this.onSearchProj();
      }
    }, error => {

    });
  }

  onPageChange(page) {
    console.log(page);
    this.projSearch.offset = (page.page - 1) * page.itemsPerPage;
    this.onSearchProj();
  }

}
