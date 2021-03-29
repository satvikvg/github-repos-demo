import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Repository, RepositoryResponse } from './interfaces/repo-Interfaces';
import { RepositoryDialogComponent } from './repository-dialog/repository-dialog.component';
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

  constructor(
    private _repoService: RepositoryService,
    public dialog: MatDialog
  ) {}

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

  openDialog(repository: Repository): void {
    const dialogRef = this.dialog.open(RepositoryDialogComponent, {
      width: '60%',
      data: repository,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
