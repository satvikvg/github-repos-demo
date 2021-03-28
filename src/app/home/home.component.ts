import { Component, OnInit } from '@angular/core';
import { RepositoryResponse } from './interfaces/repo-Interfaces';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  repositories?: RepositoryResponse;

  constructor(private _repoService: RepositoryService) {}

  ngOnInit(): void {
    this._repoService
      .getRepositories<RepositoryResponse>(1)
      .subscribe((response) => (this.repositories = response));
  }
}
