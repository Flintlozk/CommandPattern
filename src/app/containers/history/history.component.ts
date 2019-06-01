import { Component, OnInit,Input } from '@angular/core';
import { HistoryService } from '../../services/history.service'
import { Node } from '../../app.model'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() nodeList:Node[]

  constructor(public historyService:HistoryService) { }

  ngOnInit() {
  }

}
