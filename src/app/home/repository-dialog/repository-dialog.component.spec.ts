import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { CoreModule } from 'src/app/core';
import { RepositoryDialogComponent } from './repository-dialog.component';

const testData = {
  id: 127238017,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjcyMzgwMTc=',
  name: 'naverunion.github.io',
  full_name: 'naverunion/naverunion.github.io',
  private: false,
  owner: {
    login: 'naverunion',
    id: 38905155,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjM4OTA1MTU1',
    avatar_url: 'https://avatars.githubusercontent.com/u/38905155?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/naverunion',
    html_url: 'https://github.com/naverunion',
    followers_url: 'https://api.github.com/users/naverunion/followers',
    following_url:
      'https://api.github.com/users/naverunion/following{/other_user}',
    gists_url: 'https://api.github.com/users/naverunion/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/naverunion/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/naverunion/subscriptions',
    organizations_url: 'https://api.github.com/users/naverunion/orgs',
    repos_url: 'https://api.github.com/users/naverunion/repos',
    events_url: 'https://api.github.com/users/naverunion/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/naverunion/received_events',
    type: 'Organization',
    site_admin: false,
  },
  html_url: 'https://github.com/naverunion/naverunion.github.io',
  description:
    '사회의 신뢰를 받고 건강하게 성장하는 네이버를 만들어가는 노동조합',
  fork: false,
  url: 'https://api.github.com/repos/naverunion/naverunion.github.io',
  forks_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/forks',
  keys_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/collaborators{/collaborator}',
  teams_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/teams',
  hooks_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/hooks',
  issue_events_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/issues/events{/number}',
  events_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/events',
  assignees_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/branches{/branch}',
  tags_url: 'https://api.github.com/repos/naverunion/naverunion.github.io/tags',
  blobs_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/statuses/{sha}',
  languages_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/languages',
  stargazers_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/stargazers',
  contributors_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/contributors',
  subscribers_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/subscribers',
  subscription_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/subscription',
  commits_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/compare/{base}...{head}',
  merges_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/merges',
  archive_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/{archive_format}{/ref}',
  downloads_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/downloads',
  issues_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/labels{/name}',
  releases_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/naverunion/naverunion.github.io/deployments',
  created_at: '2018-03-29T04:47:52Z',
  updated_at: '2020-06-28T14:02:05Z',
  pushed_at: '2018-05-11T07:09:27Z',
  git_url: 'git://github.com/naverunion/naverunion.github.io.git',
  ssh_url: 'git@github.com:naverunion/naverunion.github.io.git',
  clone_url: 'https://github.com/naverunion/naverunion.github.io.git',
  svn_url: 'https://github.com/naverunion/naverunion.github.io',
  homepage: 'http://naverunion.com',
  size: 13892,
  stargazers_count: 126,
  watchers_count: 126,
  language: 'CSS',
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 6,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 11,
  license: {
    key: 'other',
    name: 'Other',
    spdx_id: 'NOASSERTION',
    url: null,
    node_id: 'MDc6TGljZW5zZTA=',
  },
  forks: 6,
  open_issues: 11,
  watchers: 126,
  default_branch: 'master',
  score: 1.0,
};

describe('RepositoryDialogComponent', () => {
  let component: RepositoryDialogComponent;
  let fixture: ComponentFixture<RepositoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: testData },
      ],
      imports: [CoreModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
