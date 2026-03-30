import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

interface Act {
  date: string;
  exercise: string;
  water: string;
  sleep: string;
}

@Component({
  selector: 'app-activity',
  imports: [MatFormFieldModule, FormsModule, MatCardModule],
  templateUrl: './activity.html',
  styleUrl: './activity.css',
})
export class Activity {

  public activity = { date: 'march 30', exercise: 'yoga', water: '3 ltr', sleep: '8 hrs' };

  save() {

  }
}
