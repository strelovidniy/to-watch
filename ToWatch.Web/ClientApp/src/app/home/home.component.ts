import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public films: string[] = ['Expancionables', 'Big-Boom Theory', 'Tulsa king']
}
