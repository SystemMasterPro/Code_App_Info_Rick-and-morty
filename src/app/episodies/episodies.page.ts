import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodies',
  templateUrl: './episodies.page.html',
  styleUrls: ['./episodies.page.scss'],
})
export class EpisodiesPage implements OnInit {

  episodies = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/episode')
      .subscribe(res => { 
        this.episodies = res.results
        // console.log(this.locations = res.results);
      })
  }

}
