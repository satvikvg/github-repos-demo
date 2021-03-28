import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints, HttpMethod } from 'src/app/core';
import { HttpService } from 'src/app/core/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private _http: HttpService) {}

  getRepositories<T>(page: number): Observable<T> {
    return this._http.request<T>(
      `${EndPoints.SEARCH_REPOSITORIES}?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`,
      HttpMethod.GET
    );
  }
}
