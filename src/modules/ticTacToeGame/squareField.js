import dom from '../../dom.js';
import data from '../../data.js';
import { fieldCreator as fieldBuilder } from '../../components/fieldCreator.js'
import gameStatus from './gameStatus.js';

class SquareField {
    wasUsed = false;
    field;
    sign;
 
    constructor() {
       this.fieldCreator();
    }
 
    fieldCreator() {
       this.field = fieldBuilder();
       this.field.addEventListener('click', () => this.setSign());
       dom.squareContainer.append(this.field);
    }
 
    setSign() {
       if (!this.wasUsed && gameStatus.gameInProgress) {
          this.wasUsed = !this.wasUsed;
          this.sign = gameStatus.getSignAndSwitchPlayer();
          this.field.innerText = this.sign;
         gameStatus.numOfFieldsUsed++;
          data.game.checkWin();
       }
    }

    restart(){
      this.wasUsed = false;
      this.field.innerText = '';
      this.sign = '';
    }
 }

 export default SquareField;