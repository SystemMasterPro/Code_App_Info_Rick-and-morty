import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  user;
  dato;

  constructor(private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {

    // AGARRAMOS EL ID 
    this.user = this.route.snapshot.paramMap.get('id');
    
    // llAMAMOS NUESTRA API
    this.http.get(`https://rickandmortyapi.com/api/character/${this.user}`)
      .subscribe(res => { 
        this.dato = res
        // console.log(res);
      })
    
  }

}
