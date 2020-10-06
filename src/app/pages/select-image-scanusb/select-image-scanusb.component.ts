import { Component, OnInit } from '@angular/core';
import {PrintserviceService} from '../../services/printservice.service'
@Component({
  selector: 'app-select-image-scanusb',
  templateUrl: './select-image-scanusb.component.html',
  styleUrls: ['./select-image-scanusb.component.css']
})
export class SelectImageScanusbComponent implements OnInit {
  public imagelist =[];
  public targetPrinter = [];

  constructor(private PrintserviceService: PrintserviceService) { }

  ngOnInit() {
    this.fetchImage();
    this.fetchTargetPrinter();
  }

  fetchImage(){

    this.PrintserviceService.fetchScanImage().subscribe((data:any)=>{
      try {
        console.log("data",data)
        this.imagelist = data;
      } catch (error) {
        
      }
    })
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

  getListOfImages(item){
    debugger;
  }

}
