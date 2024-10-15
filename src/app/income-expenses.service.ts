import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Income } from './income-expenses/income-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpensesService {
  private apiUrl = 'http://wildfly-app:8080/gestioneSpese/rs/incomes';

  constructor(private http: HttpClient) { }

  // Method to get all incomes
  getIncomes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Method to add a new income
  /*addIncome(income: any): Observable<any> {
    return this.http.post(this.apiUrl, income);
  }*/

  addIncome(income: Income): Observable<Income> {
    //return this.http.post<Income>(this.apiUrl, income);
    return this.http.post<Income>(this.apiUrl, income );
  }
  
}
