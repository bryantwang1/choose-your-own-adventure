/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForkComponent } from './fork.component';

describe('ForkComponent', () => {
  let component: ForkComponent;
  let fixture: ComponentFixture<ForkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
