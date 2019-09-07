export class Test{
  templatestring : string = '<div class="col-7" id="doithere" style="background-color:rgb(215, 215, 223) ; height : 800px ; margin-top:20px;overflow-y: auto;">'+
  '   <div class="row">'+
  '      <div class="col">'+
  '         <div id="whatif0">'+
  '            <h4> Section 1 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
  '                  <span  class="#variable_vide0#">________</span>'+
  '                   Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '   <div class="row">'+
  '      <div class="col">'+
  '         <div id="whatif1">'+
  '            <h4> Section 2 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
  '                  <span  class="#variable_vide1#">________</span>'+
  '                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '   <div class="row">'+
  '      <div class="col">'+
  '         <div id="whatif2>'+
  '            <h4> Section 3 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
  '                  <span  class="#variable_vide2#">________</span>'+
  '                   Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '</div>';

  teststring:string=
  '         <div  id="{{divarrayelement}}" >'+
  '            <h4> Section {{(i+1)}} </h4>'+
  '            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
  '                <span  class="#variable_vide{{i}}#" *ngIf="variablearray[i] === undefined || variablearray[i] === \'\'" [ngClass]="statusarray[i] ? \'selectedComponent\' : \'normalConent\'" (mouseenter)="highlightquestion(i)" (mouseleave)="nonhighlightquestion(i)">________</span>'+
  '                <span  class="#variable_vide{{i}}#" *ngIf="variablearray[i] != \'\'"  [ngClass]="statusarray[i] ? \'selectedComponent\' : \'normalConent\'" (click)="highlightquestion(i)" (mouseenter)="highlightquestion(i)" (mouseleave)="nonhighlightquestion(i)">{{variablearray[i]}}</span>'+
  '                Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni</p>'+
  '         </div>';

  arrayofspanstring:string[]=[];
  arrayofspanstring2:string[]=[];

    changehtmlstring(){
    console.log("here");
    for(let i=0 ;i<3 ;i++){
      this.arrayofspanstring2[i]='<span  class="#variable_vide'+i+'#" *ngIf="variablearray['+i+'] != \'\'"  [ngClass]="statusarray['+i+'] ? \'selectedComponent\' : \'normalConent\'" (click)="highlightquestion('+i+')" (mouseenter)="highlightquestion('+i+')" (mouseleave)="nonhighlightquestion('+i+')">{{variablearray['+i+']}}</span>';
      this.arrayofspanstring[i]='*ngIf="variablearray['+i+'] === undefined || variablearray['+i+'] === \'\'" [ngClass]="statusarray['+i+'] ? \'selectedComponent\' : \'normalConent\'" (mouseenter)="highlightquestion('+i+')" (mouseleave)="nonhighlightquestion('+i+')"';
      let searchstring = 'class="#variable_vide'+i+'#"';
      let searchstring2 = 'class="#variable_vide'+i+'#">________</span>';
      let searchingstringindex2 = this.templatestring.indexOf(searchstring2);
      let searchstringindex = this.templatestring.indexOf(searchstring);
      //40
      this.templatestring = this.templatestring.slice(0,searchingstringindex2+40) + this.arrayofspanstring2[i] + this.templatestring.slice(searchingstringindex2+40);
      this.templatestring = this.templatestring.slice(0,searchstringindex-1) + this.arrayofspanstring[i] + this.templatestring.slice(searchstringindex);
    }

    }


    templatestring1: string =
'<div class="container" >'+
'<div class="row">'+
'    <div class="col-4" style="background-color:rgb(182, 253, 253) ; height:600px ; margin-right:10px ; margin-top : 20px">'+
'      <div >'+
'          <div *ngFor="let variablearrayelement of divarray; let i = index">'+
'           <div> <label style="margin-right:5px">Go To {{i+1}}</label><input  [ngClass]="questionstatusarray[i] ? \'selectedComponent\' : \'normalConent\'" id="button{{(i)}}" [(ngModel)]="variablearray[i]" (focus)="scrollToThatElement(i)" style="margin-bottom:5px ; margin-left:5px" />'+
'           </div> '+
'          </div>'+
'      </div>'+
'    </div>'+
'    <div id="doithere" class="col-7" style="background-color:rgb(215, 215, 223) ; height : 800px ; margin-top:20px;overflow-y: auto;">'+
'      <div class="row" *ngFor="let divarrayelement of divarray ; let i = index">'+
'        <div class="col">'+
'          <div  id="{{divarrayelement}}" >'+
'            <h4> Section {{(i+1)}} </h4>'+
'            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
'                <span  class="variable_vide" *ngIf="variablearray[i] === undefined || variablearray[i] === \'\'" [ngClass]="statusarray[i] ? \'selectedComponent\' : \'normalConent\'" (mouseenter)="highlightquestion(i)" (mouseleave)="nonhighlightquestion(i)">________</span>'+
'                <span  class="variable_vide" *ngIf="variablearray[i] != \'\'"  [ngClass]="statusarray[i] ? \'selectedComponent\' : \'normalConent\'" (click)="highlightquestion(i)" (mouseenter)="highlightquestion(i)" (mouseleave)="nonhighlightquestion(i)">{{variablearray[i]}}</span>'+
'                Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni</p>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  </div>'+
'</div>';

}


