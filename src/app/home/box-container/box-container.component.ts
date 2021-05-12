import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css']
})
export class BoxContainerComponent implements OnInit {

  constructor() { }

  boxesList=[];
  selectedInd=0;
  selectedbox=null;

  keyboradBlocked=false;

  ngOnInit() {
  }

  addBox(){
    let obj={};
    
    var letters = '0123456789ABCDEF';
    var color = '#';
    var name = 'b:';
    for (var k = 0; k < 6; k++) {
      color += letters[Math.floor(Math.random() * 16)];
      name += letters[Math.floor(Math.random() * 16)];
    }

    obj["color"]= color;
    obj["name"]=this.boxesList.length+1;
    obj["selected"]=false;
    obj["x"]=25+(50*this.boxesList.length);
    obj["y"]=35;

    this.boxesList.push(obj);
    console.log(this.boxesList);
  }

  selectBox(ind){
    this.selectedInd=ind;
    this.boxesList.forEach(element => {
      element["selected"]=false;
    });
    this.selectedbox=this.boxesList[ind];
    this.boxesList[ind]["selected"]=true;
  }
  moveSelected(event,ind){
    console.log(event);
    console.log(ind);
  }

  moveboxKeyboard(event){
    
    if(this.keyboradBlocked) return;
    
    // if(event.key !== 'w' || event.key !== 'a' ||event.key !== 's' || event.key !== 'd' || event.key !== 'Delete' ) return;
    
    console.log(event);
    console.log(this.selectedInd);

    if(event.key == 'a'){
      if(this.boxesList[this.selectedInd]['x'] >= 30){
      this.boxesList[this.selectedInd]['x']=this.boxesList[this.selectedInd]['x']-5;
      }
    }   
    
    if(event.key == 's'){
      if(this.boxesList[this.selectedInd]['y'] <= 435){
      this.boxesList[this.selectedInd]['y']=this.boxesList[this.selectedInd]['y']+5;
      }
    }    
    
    if(event.key == 'd'){
      if(this.boxesList[this.selectedInd]['x'] <= 1060){
        this.boxesList[this.selectedInd]['x']=this.boxesList[this.selectedInd]['x']+5;
      }
    }

    if(event.key == 'w'){
      if(this.boxesList[this.selectedInd]['y'] >= 40 ){
      this.boxesList[this.selectedInd]['y']=this.boxesList[this.selectedInd]['y']-5;
      }
    }
    
    if(event.key == 'Delete'){
      this.boxesList.splice(this.selectedInd,1);
    }
    console.log(this.boxesList[this.selectedInd]);
  }

  toggleKeyboardInput(event){
    console.log(event);
    this.keyboradBlocked=event.checked;
  }
}
