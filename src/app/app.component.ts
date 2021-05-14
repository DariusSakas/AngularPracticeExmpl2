import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'initial';
  constructor() {}
  onInput(event: any) {
    this.title = event.target.value;
  }
  backgroundToogle = false;
  toogle = false;

  arr = [1, 1, 2, 3, 5, 8, 13];
  objs = [
    {
      title: 'Post1',
      author: 'Kebab1',
      comments: [
        { name: 'Me', text: 'lorem' },
        { name: 'Me', text: 'lorem' },
        { name: 'Me', text: 'lorem' },
      ],
    },
    {
      title: 'Post2',
      author: 'Kebab2',
      comments: [
        { name: 'Me2', text: 'lorem2' },
        { name: 'Me2', text: 'lorem2' },
        { name: 'Me2', text: 'lorem2' },
      ],
    },
  ];
}
