import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import * as $ from "jquery";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
  });

  it(`should have as title 'application-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('application-frontend');
  });

  it('should have the heading 1 with \'Some Content\'', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('h1').innerText).toEqual('Some Content');

    $('h1').text("New Text");
    expect(fixture.nativeElement.querySelector('h1').innerText).toEqual('Some Content');
  });
});
