import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Test } from '../test';

@Component({
  selector: 'app-runtime-component',
  template: `
  <div #container >

  </div>
`,
  styleUrls: ['./runtime-component.component.css']
})
export class RuntimeComponentComponent implements OnInit {
  ngOnInit(): void {
    this.compileTemplate();
}


temp : string ='<div class="container">'+
'<div class="row">'+
'   <div class="col-4" style="background-color:rgb(182, 253, 253) ; height:600px ; margin-right:10px ; margin-top : 20px">'+
'      <div >'+
'          <div *ngFor="let variablearrayelement of divarray; let i = index">'+
'           <div> <label style="margin-right:5px">Question {{i+1}}</label><input  [ngClass]="questionstatusarray[i] ? \'selectedComponent\' : \'normalConent\'" id="button{{(i)}}" [(ngModel)]="variablearray[i]" (focus)="scrollToThatElement(i)" style="margin-bottom:5px ; margin-left:5px" />'+
'           </div> '+
'          </div>'+
'      </div>'+
'    </div>'+
' '+
' '+
' '+
'   <div class="col-7" id="doithere" style="background-color:rgb(215, 215, 223) ; height : 800px ; margin-top:20px;overflow-y: auto;">'+
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
  '         <div id="whatif2">'+
  '            <h4> Section 3 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
  '                  <span  class="#variable_vide2#">________</span>'+
  '                   Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '   <div class="row">'+
  '      <div class="col">'+
  '         <div id="whatif3">'+
  '            <h4> Section 4 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
  '                  <span  class="#variable_vide3#">________</span>'+
  '                   Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '   <div class="row">'+
  '      <div class="col">'+
  '         <div id="whatif4">'+
  '            <h4> Section 5 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
  '                  <span  class="#variable_vide4#">________</span>'+
  '                   Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '   <div class="row">'+
  '      <div class="col">'+
  '         <div id="whatif5">'+
  '            <h4> Section 6 </h4>'+
  '            <p>'+
  '               Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
  '                  <span  class="#variable_vide5#">________</span>'+
  '                   Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'+
  '            </p>'+
  '         </div>'+
  '      </div>'+
  '   </div>'+
  '</div>';


// *ngIf="variablearray[i] === undefined || variablearray[i] === \'\'" [ngClass]="statusarray[i] ? \'selectedComponent\' : \'normalConent\'" (mouseenter)="highlightquestion(i)" (mouseleave)="nonhighlightquestion(i)"

// <span  class="variable_vide" *ngIf="variablearray[i] != \'\'"  [ngClass]="statusarray[i] ? \'selectedComponent\' : \'normalConent\'" (click)="highlightquestion(i)" (mouseenter)="highlightquestion(i)" (mouseleave)="nonhighlightquestion(i)">{{variablearray[i]}}</span>

// (mouseenter)="highlightfield(i)" (mouseleave)="nonhighlightfield(i)"

@ViewChild('container', { read: ViewContainerRef,static:true }) container: ViewContainerRef;

private componentRef: ComponentRef<{}>;

constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler) {
        console.log(this.container);

}


arrayofspanstring:string[]=[];
arrayofspanstring2:string[]=[];

compileTemplate() {

    console.log("here");
    for(let i=0 ;i<6 ;i++){

      this.arrayofspanstring2[i]='<span  class="#variable_vide'+i+'#" *ngIf="variablearray['+i+'] != \'\'"  [ngClass]="statusarray['+i+'] ? \'selectedComponent\' : \'normalConent\'" (click)="highlightquestion('+i+')" (mouseenter)="highlightquestion('+i+')" (mouseleave)="nonhighlightquestion('+i+')">{{variablearray['+i+']}}</span>';
      this.arrayofspanstring[i]='*ngIf="variablearray['+i+'] === undefined || variablearray['+i+'] === \'\'" [ngClass]="statusarray['+i+'] ? \'selectedComponent\' : \'normalConent\'" (mouseenter)="highlightquestion('+i+')" (mouseleave)="nonhighlightquestion('+i+')"';
      let searchstring = 'class="#variable_vide'+i+'#"';
      let searchstring2 = 'class="#variable_vide'+i+'#">________</span>';
      let searchingstringindex2 = this.temp.indexOf(searchstring2);
      let searchstringindex = this.temp.indexOf(searchstring);
      //40
      this.temp = this.temp.slice(0,searchingstringindex2+40) + this.arrayofspanstring2[i] + this.temp.slice(searchingstringindex2+40);
      this.temp = this.temp.slice(0,searchstringindex-1) + this.arrayofspanstring[i] + this.temp.slice(searchstringindex);

    }


    let metadata = {
        selector: `runtime-component-sample`,
        template: this.temp
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
}

private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent {

        statusarray: boolean[] = [];
        questionstatusarray: boolean[] = [];
        divarray: string[] = [];
        formGrouphere: FormGroup;
        targetstring = "whatif";
        binding: string;
        htmlstring: string;
        variablearray:string[]=[];


constructor() {
 let t:Test = new Test();
 t.changehtmlstring();

 for (let i = 0; i < 6; i++) {
  this.statusarray.push(false);
  this.questionstatusarray.push(false);
  this.divarray.push("whatif" + i);
}

// for(let i=0;i<15;i++){

//   this.variablearray.push("");

// }

this.formGrouphere = new FormGroup({
option1:new FormControl(),
option2:new FormControl(),
option3:new FormControl()
});

}

lastindex: number = 0;

scrollToThatElement(index:number) {
this.statusarray[index] = true;
console.log("whatif" + index);
let elmnt = document.getElementById("whatif" + index);

elmnt.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
if (index != this.lastindex) this.statusarray[this.lastindex] = false;

this.lastindex = index;
}


highlightquestion(i:number){
  console.log(i);
  this.questionstatusarray[i] = true;

}

nonhighlightquestion(i){
  this.questionstatusarray[i] = false;
}

highlightfield(i:number){
  console.log(i);
  this.statusarray[i] = true;

}

nonhighlightfield(i){
  this.statusarray[i] = false;
}


ngOnInit(): void {
// document.getElementById("doithere").innerHTML +=  this.elemnt;
}


    };

    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({ imports: [CommonModule,BrowserModule,FormsModule], declarations: [decoratedCmp] })
    class RuntimeComponentModule { }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
}

}
