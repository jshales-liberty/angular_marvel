import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarvelService } from '../marvel-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
characters;
searchTerm;
@Output() emitCharacters = new EventEmitter();
  constructor( private marvelService: MarvelService) { 
   

  }
  getCharactersByName(){
    this.marvelService.getRecordsbyName("characters", this.searchTerm)
    .subscribe(
      results => {
this.characters = results.data.results;
this.emitCharacters.emit(this.characters);
      }, error => {

      })
  
  }

  ngOnInit() {
    this.marvelService.getRecords("characters")
    .subscribe(
      results => {
this.characters = results.data.results;
this.emitCharacters.emit(this.characters);
      }, error => {

      })
  }

}
