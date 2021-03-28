import { Injectable } from '@angular/core';
import {
  CustomErrorCodes,
  HttpStatusCode,
} from '../../constants/http-codes.enum';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  whichError(errorCode: number, errorMessage: string) {
    switch (errorCode) {
      case CustomErrorCodes.UN_KNOWN:
        console.error('Server is Down!');
        break;

      case HttpStatusCode.BAD_REQUEST:
        console.error('Invalid Credentials');
        break;

      default:
        console.error(errorMessage);
    }
  }
}
