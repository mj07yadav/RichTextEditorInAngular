import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-anotherruntime',
  template: `
  <div  [innerHTML]="newtempstring"></div>
`,
  styleUrls: ['./anotherruntime.component.css']
})
export class AnotherruntimeComponent implements OnInit {


  temp: string =
  '<div class="container">' +
  '<div class="row">' +
  '   <div class="col-4" style="background-color: #008e52; border:solid 2px black ; border-radius:8px ; height:40vh ; margin-right:20px ; margin-top : 20px">' +
  '      <div style="margin-top:12px">' +
  '          <div *ngFor="let variablearrayelement of divarray; let i = index">' +
  '           <div> <label style="margin-right:5px ; color:white ; font-weight:bold;">Question {{i+1}}</label><input  [ngClass]="questionstatusarray[i] ? \'selectedComponent\' : \'normalConent\'" id="button{{(i)}}" [(ngModel)]="variablearray[i]" (focus)="scrollToThatElement(i)" style="margin-bottom:5px ; margin-left:5px" />' +
  "           </div> " +
  "          </div>" +
  "      </div>" +
  "    </div>" +
  ''  +
  ''  +
  ''  +
  ''  +
  ''  +
  ''  +
  '   <div class="col-7"   id="doithere" style="background-color:white;overflow-wrap: break-word; ; border-radius : 7px ; height : 82vh ; margin-top:20px;overflow-y: auto;">' +
  '   <h2>{{countervalue}}</h2>'+
  '   <button (click)="incrementCounter()" class="btn btn-primary">Increment from inside</button>'+
  ' <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif0">' +
  "            <h4> Section 1 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide0#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif1">' +
  "            <h4> Section 2 </h4>" +
  '            <p >' +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
  '                  <span  class="#variable_vide1#">________</span>' +
  "                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif2">' +
  "            <h4> Section 3 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide2#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif3">' +
  "            <h4> Section 4 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide3#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif4">' +
  "            <h4> Section 5 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide4#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif5">' +
  "            <h4> Section 6 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide5#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif6">' +
  "            <h4> Section 7 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide6#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif7">' +
  "            <h4> Section 8 </h4>" +
  "            <p>" +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide7#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  '   <div class="row">' +
  '      <div class="col">' +
  '         <div id="whatif8">' +
  "            <h4> Section 9 </h4>" +
  '            <p style="filter:blur(8px)">' +
  "               Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  '                  <span  class="#variable_vide8#">________</span>' +
  "                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni" +
  "            </p>" +
  "         </div>" +
  "      </div>" +
  "   </div>" +
  "</div>";



          newtempstring:string='';
          countervalue:number=0;
         countervalue2:number = 0;
         subscription:Subscription;
         statusarray: boolean[] = [];
         questionstatusarray: boolean[] = [];
         divarray: string[] = [];
         formGrouphere: FormGroup;
         targetstring = "whatif";
         binding: string;
         htmlstring: string;
         variablearray: string[] = [];
         arrayofspanstring: string[] = [];
        arrayofspanstring2: string[] = [];

         ngOnInit(){

          console.log("hellow brother its workign ");

         }

         constructor() {
          this.newtempstring = this.temp;
           console.log(sessionStorage.getItem("numbers"));
           for (let i = 0; i < 8; i++) {
             this.statusarray.push(false);
             this.questionstatusarray.push(false);
             this.divarray.push("whatif" + i);
           }

           for (let i = 0; i < 8; i++) {

            this.arrayofspanstring2[i] =
              '<span  class="#variable_vide' +
              i +
              '#" *ngIf="variablearray[' +
              i +
              "] != ''\"  [ngClass]=\"statusarray[" +
              i +
              "] ? 'selectedComponent' : 'normalConent'\" (click)=\"highlightquestion(" +
              i +
              ')" (mouseenter)="highlightquestion(' +
              i +
              ')" (mouseleave)="nonhighlightquestion(' +
              i +
              ')">{{variablearray[' +
              i +
              "]}}</span>";

            this.arrayofspanstring[i] =
              '*ngIf="variablearray[' +
              i +
              "] === undefined || variablearray[" +
              i +
              "] === ''\" [ngClass]=\"statusarray[" +
              i +
              "] ? 'selectedComponent' : 'normalConent'\" (mouseenter)=\"highlightquestion(" +
              i +
              ')" (mouseleave)="nonhighlightquestion(' +
              i +
              ')"';

            let searchstring = 'class="#variable_vide' + i + '#"';
            let searchstring2 = 'class="#variable_vide' + i + '#">________</span>';
            let searchingstringindex2 = this.newtempstring.indexOf(searchstring2);
            let searchstringindex = this.newtempstring.indexOf(searchstring);
            //40
            this.newtempstring =
              this.newtempstring.slice(0, searchingstringindex2 + 40) +
              this.arrayofspanstring2[i] +
              this.newtempstring.slice(searchingstringindex2 + 40);
            this.newtempstring =
              this.newtempstring.slice(0, searchstringindex - 1) +
              this.arrayofspanstring[i] +
              this.newtempstring.slice(searchstringindex);



          }
          console.log(this.newtempstring);

            // console.log(document.getElementById("cont").innerHTML = this.temp);
           // .innerHTML = this.temp;

         }

         lastindex: number = 0;

         scrollToThatElement(index: number) {
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

         highlightquestion(i: number) {
           console.log(i);
           this.questionstatusarray[i] = true;
         }

         nonhighlightquestion(i) {
           this.questionstatusarray[i] = false;
         }

         highlightfield(i: number) {
           console.log(i);
           this.statusarray[i] = true;
         }

         nonhighlightfield(i) {
           this.statusarray[i] = false;
         }

}
