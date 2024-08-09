import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

    // $(document).ready(function() {
    //   alert('we call alert from JQuery');
    // });

  }



}
