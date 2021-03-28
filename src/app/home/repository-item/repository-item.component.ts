import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
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

  constructor() {}

  ngOnInit(): void {}
}
