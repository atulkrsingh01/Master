import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-usb',
  templateUrl: './usb.component.html',
  styleUrls: ['./usb.component.css']
})
export class UsbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $("input[name='colour']").click(function() {
        var preview = document.getElementById('preview-image');
        if ($("#mono").is(":checked") && $("#vertical").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(0deg);");
        } 
        else if ($("#vertical").is(":checked") && $("#mono").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(0deg);");
        } 
        else if ($("#mono").is(":checked") && $("#horizontal").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(90deg);");
        } 
        else if ($("#horizontal").is(":checked") && $("#mono").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(90deg);");
        } 
        else if ($("#color").is(":checked") && $("#vertical").is(":checked")){
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(0deg); ");
        }
        else if ($("#vertical").is(":checked") && $("#color").is(":checked")){
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(0deg); ");
        }
        else if ($("#color").is(":checked") && $("#horizontal").is(":checked")) {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(90deg);");
        }
        else if ($("#horizontal").is(":checked") && $("#color").is(":checked")) {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(0deg);");
        }
      });
      $("input[name='direction']").click(function() {
        var preview = document.getElementById('preview-image');
        if ($("#mono").is(":checked") && $("#vertical").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(0deg);");
        } 
        else if ($("#vertical").is(":checked") && $("#mono").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(0deg);");
        } 
        else if ($("#mono").is(":checked") && $("#horizontal").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(90deg);");
        } 
        else if ($("#horizontal").is(":checked") && $("#mono").is(":checked"))
        {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; filter: grayscale(100%); transform: rotate(90deg);");
        } 
        else if ($("#color").is(":checked") && $("#vertical").is(":checked")){
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(0deg); ");
        }
        else if ($("#vertical").is(":checked") && $("#color").is(":checked")){
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(0deg); ");
        }
        else if ($("#color").is(":checked") && $("#horizontal").is(":checked")) {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(90deg);");
        }
        else if ($("#horizontal").is(":checked") && $("#color").is(":checked")) {
          preview.setAttribute("style", " background-image: url(https://picsum.photos/250/200); height: 275px; width: 240px; border: 2px solid #bdc3c7; transform: rotate(0deg);");
        }
      });
    });
    
  }

}
