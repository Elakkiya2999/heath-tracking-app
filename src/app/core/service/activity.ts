import { Injectable } from '@angular/core';
import { activity } from '../../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class Activity {

  private STORAGE_KEY = 'activities';

  getActivities(): activity[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  addActivity(activity: activity) {
    const data = this.getActivities();
    data.push(activity);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
}
