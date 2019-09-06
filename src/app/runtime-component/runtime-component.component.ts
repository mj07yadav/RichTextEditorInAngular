import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-runtime-component',
  template: `
  <div #container class="container">

  </div>
`,
  styleUrls: ['./runtime-component.component.css']
})
export class RuntimeComponentComponent implements OnInit {
  ngOnInit(): void {
    this.compileTemplate();
}

temp: string =
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
''+
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

// (mouseenter)="highlightfield(i)" (mouseleave)="nonhighlightfield(i)"
@ViewChild('container', { read: ViewContainerRef,static:true }) container: ViewContainerRef;

private componentRef: ComponentRef<{}>;

constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler) {
        console.log(this.container);

}

compileTemplate() {

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

for (let i = 0; i < 15; i++) {
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
