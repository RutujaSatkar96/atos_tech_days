import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { WorkQuote } from '../shared/models/work-quote.model';


@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch Quote list
  getQuotes(id): Observable<WorkQuote> {
    return this.http.get<WorkQuote>(this.apiURL + '/getQuoteDetails?type='+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Quote
  getQuote(id,quoteNo): Observable<WorkQuote> {
    return this.http.get<WorkQuote>(this.apiURL + '/getQuoteDetails?type='+id+'&quoteNo=' + quoteNo)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create Quote
  createQuote(workQuote): Observable<WorkQuote> {
    return this.http.post<WorkQuote>(this.apiURL + '/customerInfo', JSON.stringify(workQuote), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update employee
  updateQuote(workQuote): Observable<WorkQuote> {
    return this.http.put<WorkQuote>(this.apiURL + '/updatecustomerInfo' +  JSON.stringify(workQuote), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Quote
  deleteQuote(quoteNo){
    return this.http.delete<WorkQuote>(this.apiURL + '/deletecustomerInfo/' + quoteNo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}