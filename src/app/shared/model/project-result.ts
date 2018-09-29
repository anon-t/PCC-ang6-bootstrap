import { Project } from './project';
import { Pagination } from './pagination';

export interface ProjectResult {
  paging: Pagination;
  rows: Project[];
}
