import { Component, OnInit, TemplateRef  } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {PrintserviceService} from '../../../services/printservice.service';
declare var $: any;
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ], 
  declarations: []
  }
)
@Component({
  selector: 'app-print-pc',
  templateUrl: './print-pc.component.html',
  styleUrls: ['./print-pc.component.css']
})
export class PrintPcComponent implements OnInit {
  modalRef: BsModalRef;  
  waitingList:any=[];
  listItem:any=[];
  paymentDue:any=0;
  pinNumber:any;
  targetPrinter:[];
  constructor(private modalService: BsModalService,private PrintserviceService:PrintserviceService) { }  

  ngOnInit() {
    this.fetchListPrintingJobwithCostInfo();
    this.fetchTargetPrinter();

  }

  fetchListPrintingJobwithCostInfo(){
   let data={
     "start":"0",
     "lenght":"20"
   }
    this.PrintserviceService.fetchListPrintingJobwithCostInfo(data).subscribe((data:any)=>{
       console.log("data",data)
       this.waitingList=data.data;
       console.log("data",this.waitingList);
    })
  }
  onCheckboxChange(event,list){
    console.log("event",event.target.checked)
    if(event.target.checked){
      this.listItem.push(list);
      this.paymentDue= this.paymentDue + Number(list.showUnitMoney);
    }else{
   let index=   this.listItem.findIndex((x)=>{
        return x.idx==list.idx;
      })
      console.log({index})

      this.listItem.splice(index,1);
      this.paymentDue= this.paymentDue -Number(list.showUnitMoney);

    }
    console.log(this.listItem);

  }
  fetchTargetPrinter(){

    this.PrintserviceService.fetchTargetPrinter().subscribe((data:any)=>{
      try {
        console.log("data fetchTargetPrinter",data);
        this.targetPrinter=data;
      } catch (error) {
        
      }
    })
  }
  fetchJobByPin(){
    console.log("data",this.pinNumber);
    this.PrintserviceService.fetchJobByPin(this.pinNumber).subscribe((data:any)=>{
      console.log("data",data);
    })
  }

  startModalWithClass(start: TemplateRef<any>) {  
    this.modalRef = this.modalService.show(  
      start,  
      Object.assign({}, { class: 'gray modal-lg' })  
    );  
}
printModal(print_process: TemplateRef<any>) {  
    this.modalRef = this.modalService.show(  
      print_process,  
      Object.assign({}, { class: 'gray modal-lg' })  
    );  
}

scanModal(scan_process: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    scan_process,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}

copyModal(copy_process: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    copy_process,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}
faxModal(fax_process: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    fax_process,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}
copyBackModal(copy_backside: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    copy_backside,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}

informationModal(information: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    information,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}

infoModal(info_modal: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    info_modal,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}

errorModal(error: TemplateRef<any>) {  
  this.modalRef = this.modalService.show(  
    error,  
    Object.assign({}, { class: 'gray modal-lg' })  
  );  
}

countDown(){
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}

}
