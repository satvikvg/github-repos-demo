import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repository } from '../interfaces/repo-Interfaces';

@Component({
  templateUrl: './repository-dialog.component.html',
  styleUrls: ['./repository-dialog.component.scss'],
})
export class RepositoryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RepositoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Repository | any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
