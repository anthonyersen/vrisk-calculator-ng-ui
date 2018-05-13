import { Injectable } from "@angular/core";
import { INpvResult } from "../model/npvResult";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from "rxjs";
import { ICalculateNpvRequest } from '../model/npvRequest';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NpvCalculatorService {
  private _productUrl = './api/products/products.json';

  constructor(private _http: HttpClient) {

  }

  calculateNpv(body: ICalculateNpvRequest): Observable<INpvResult[]> {
    return this._http.post<INpvResult[]>('http://localhost:56430/api/npv/calculate', body)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.error);
  }
}
