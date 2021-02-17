import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';

import * as $ from "jquery";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a login form', ()=>{
    expect($(fixture.nativeElement).find('form[name=loginForm]').length).toBe(1);
  });

  it('should contain the username field', ()=>{
    expect($(fixture.nativeElement).find('input#userName').length).toBe(1);
  });

  it("should have login form validations", ()=>{
    expect($(fixture.nativeElement).find('input#userName').val()).toEqual("");
    expect($(fixture.nativeElement).find('input#password').val()).toEqual("");
    $(fixture.nativeElement).find('.loginButton').trigger('click');
    expect($(fixture.nativeElement).find('.username-error-message').hasClass('dNone')).toBe(false);
    expect($(fixture.nativeElement).find('.username-error-message').text()).toEqual("Username cannot be empty");
    $(fixture.nativeElement).find('input#userName').val("ehyasin");
    $(fixture.nativeElement).find('.loginButton').trigger('click');
    expect($(fixture.nativeElement).find('.username-error-message').hasClass('dNone')).toBe(false);
    expect($(fixture.nativeElement).find('.username-error-message').text()).toEqual("Username should have a valid email address");

    $(fixture.nativeElement).find('input#userName').val("ehyasin@gmail.com");
    $(fixture.nativeElement).find('.loginButton').trigger('click');
    expect($(fixture.nativeElement).find('.username-error-message').hasClass('dNone')).toBe(true);
  });
});
