import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataResponse } from './resoponse.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  highlightDates = [];
  allData: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const body = {
      ZCW3KFa87hpAKsfG: '9cdSoZlrhFtLPyLY',
      file_requested: 'events',
      id_event: '168',
    };
    this.http
      .post<DataResponse>('http://localhost:3000/relay.php', body)
      .subscribe((data) => {
        console.log(data);
        this.allData = data;
        this.highlightDates = data.dates.map((d) => new Date(d.date));
      });
  }

  selectedDate: any;
  isHighlightDate(date: any) {
    const highlightDate = this.highlightDates.find(
      (d) =>
        d.getDate() === date.day &&
        d.getMonth() === date.month &&
        d.getFullYear() === date.year
    );

    return highlightDate != null;
  }
  times: any[]= [];
  tarifs = [];
  onSelectDate() {
    // check if the date is in the highlightDates
    const isHighlightDate = this.highlightDates.find(
      (d) =>
        d.getDate() === this.selectedDate.getDate() &&
        d.getMonth() === this.selectedDate.getMonth() &&
        d.getFullYear() === this.selectedDate.getFullYear()
    );
    // console.log(highlightDate ? 'Date is highlighted' : 'Date is not highlighted');

    const isHighlited = isHighlightDate ? true : false;
    if (isHighlited) {
      const index = this.highlightDates.indexOf(isHighlightDate);
      this.times = [];
      this.times.push(this.allData.dates[index].heure.substring(0, 5));
      this.tarifs = this.allData.dates[index].tarifs;
    }
    else{
      this.times = [];
      this.tarifs = [];
    }
  }
}
