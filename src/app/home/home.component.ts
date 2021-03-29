import { Component, OnInit } from '@angular/core';
import { RepositoryResponse } from './interfaces/repo-Interfaces';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Scroll Load Controls
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  scrollPage: number = 1;

  repositories?: RepositoryResponse;

  constructor(private _repoService: RepositoryService) {}

  ngOnInit(): void {
    this._repoService
      .getRepositories<RepositoryResponse>(1)
      .subscribe((response) => (this.repositories = response));
  }

  onScrollDown(event: any) {
    console.debug('scrolled down!!', event);

    // add another page items (30 items)
    this._repoService
      .getRepositories<RepositoryResponse>(++this.scrollPage)
      .subscribe((response) =>
        this.repositories?.items.push(...response.items)
      );
  }
}
