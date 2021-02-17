import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validateForm($event:any):void{
    $event.preventDefault();
    $event.stopPropagation();
    $('.username-error-message').addClass('dNone');
    $('.password-error-message').addClass('dNone');

    let useremail = $('input#userName').val()?.toString();
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(useremail == ""){
      $('.username-error-message').removeClass('dNone').text("Username cannot be empty");
    } else if (useremail!==undefined && emailRegex.test(useremail.toString()) !== true){
      $('.username-error-message').removeClass('dNone').text("Username should have a valid email address");
    }

    if($('input#password').val() == ""){
      $('.password-error-message').removeClass('dNone').text("Password cannot be empty");
    }
  }

}
