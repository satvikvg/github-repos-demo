import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Repository } from '../interfaces/repo-Interfaces';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryItemComponent implements OnInit {
  @Input() repo?: Repository;
  @Output() repoClick: EventEmitter<Repository> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
