import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Assignment';
  firstOpernad : string;
  secondOpernad : string;
  strOperator : string = '';
  strResult : string = '';

  SayHello(evnet: Event){
   let btnElement = (event.target as Element)
   let elementId : string = btnElement.id;
   let btnTitle : string = btnElement.innerHTML;
   if((this.firstOpernad == undefined || this.secondOpernad == undefined) && (elementId != 'btnClear')){
     alert("Really ??");
   }else{
   switch(elementId)
   {
        case 'btnPlus':
            this.strOperator = btnTitle;
            this.strResult = (parseFloat(this.firstOpernad.toString()) + parseFloat(this.secondOpernad.toString())).toString();
        break;
        case 'btnMinus':
            this.strOperator = btnTitle;
            this.strResult = (parseFloat(this.firstOpernad.toString()) - parseFloat(this.secondOpernad.toString())).toString();
        break;
        case 'btnMulti':
            this.strOperator = btnTitle;
            this.strResult = (parseFloat(this.firstOpernad.toString()) * parseFloat(this.secondOpernad.toString())).toString();
        break;
        case 'btnDivide':
            this.strOperator = btnTitle;
            this.strResult = (parseFloat(this.firstOpernad.toString()) / parseFloat(this.secondOpernad.toString())).toString();
        break;   
        default:
            this.strOperator = "";
            this.strResult = "";
            this.firstOpernad = "";
            this.secondOpernad = "";
          break;                            
  }
}
  }
}
