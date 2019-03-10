import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'

interface myData{
  obj:Array<Object>
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 records = []
 
  constructor(private RecordService: RecordsService) { }

  ngOnInit() {
      this.RecordService.getData().subscribe(data => {
      this.records = data
      
    
   })
    
  }

}
