import { Component, OnInit } from '@angular/core';
import { IncomeExpensesService } from '../income-expenses.service';
import { Observable } from 'rxjs';
import { Income } from './income-model';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css']
})
export class IncomeExpensesComponent implements OnInit {
  incomes: Income[] = [];
  newIncome: Income = {
    description: '',
    amount: 0,
    date: '',
    typeIncome: false
  };

  constructor(private incomeExpensesService: IncomeExpensesService) { }

  ngOnInit(): void {
    this.getIncomes();
  }

  /*getIncomes(): void {
    this.incomeExpensesService.getIncomes().subscribe(
      (data) => {
        this.incomes = data;
      },
      (error) => {
        console.error('Error fetching incomes:', error);
      }
    );
  }*/
    
  getIncomes(): void {
    this.incomeExpensesService.getIncomes().subscribe(
      (data) => {
        this.incomes = data ? data : [];  // incomes array anche se non ci sono dati
      },
      (error) => {
        console.error('Error fetching incomes:', error);
        this.incomes = [];  // In caso di errore, imposta incomes a un array vuoto
      }
    );
  }
    

  /*addIncome(newIncome: any): void {
    this.incomeExpensesService.addIncome(newIncome).subscribe(
      (data) => {
        console.log('Income added:', data);
        this.getIncomes(); // Refresh the list of incomes after adding
      },
      (error) => {
        console.error('Error adding income:', error);
      }
    );
  }*/

  addIncome(newIncome: Income): void {
    console.log('Valore di isincome:', newIncome.typeIncome);
    this.incomeExpensesService.addIncome(newIncome).subscribe(
      (data) => {
        /*console.log('Income added:', data);
        this.incomes.push(data); // Aggiunge la nuova entrata alla lista
        this.resetForm(); // Resetta il modulo dopo l'invio
      },
      (error) => {
        console.error('Error adding income:', error);*/
        console.log('Response data:', data); // Verifica i dati che vengono restituiti dall'API
        this.incomes.push(data);
        this.resetForm();
      }
    );
  }

  calculateBalance(): number {
    return this.incomes.reduce((acc, income) => {
      return acc + (income.typeIncome ? income.amount : -income.amount);
    }, 0);
  }
  
  resetForm(): void {
    this.newIncome = {
      description: '',
      amount: 0,
      date: '',
      typeIncome: false
    };
  }
  
}

