import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-board',
  templateUrl: './on-board.component.html',
  styleUrls: ['./on-board.component.scss']
})
export class OnBoardComponent implements OnInit {
  carouselContent: string[] = [
    'Buy and sell crypto without middlme man exchange',
    'Find merchants accepting crypto as payment method'
  ];
  constructor() {}

  ngOnInit(): void {}
}
