import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
// import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatToolbarModule],
  // BaseChartDirective
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard {
  public barChartData = [{ data: [20, 40, 35, 60], label: 'Excercise Minutes' }];
  public barChartLabels = ['Week1', 'Week2', 'Week3', 'Week4'];
}



