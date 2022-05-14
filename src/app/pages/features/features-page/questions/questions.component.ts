import { Component, OnInit } from '@angular/core';
import { QUESTIONS_DATA } from './questions.data';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  collapsing = true;
  QUESTIONS_DATA = QUESTIONS_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
