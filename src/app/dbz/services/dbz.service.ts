import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public characterEdited:Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };


    const charactersSaved: Character[] =  this.characters.filter( sav => sav.id === character.id );
    if(charactersSaved.length === 0 ){
      this.characters.push(newCharacter);
    }


  }

  // onDeleteCharacter( index:number ) {
  // this.characters.splice(index,1);
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  editCharacter( character: Character ):void {

    let chEdit = null;

    this.characters.forEach(ch => {
      if(ch.id === character.id)  this.characterEdited =  ch;
    });


  }


}
