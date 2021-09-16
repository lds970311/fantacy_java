import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public num: number
  public myTitle: string = "this is my title!"
  public content: string = `<span>this is a span</span>`
  public list: Array<number> = [1, 2, 3, 4, 5]

  constructor() {
    this.num = 10;

  }

  ngOnInit(): void {
    console.log("123")
  }

}
