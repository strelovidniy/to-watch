import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('loadingWrapper')['style']['opacity'] = '0'
      setTimeout(() => {
        document.getElementById('loadingWrapper')['style']['display'] = 'none'
      }, 1000)
    }, 2000)
  }
}
