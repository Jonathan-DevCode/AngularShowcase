import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedComponent } from './provided.component';

describe('LearningComponent', () => {
  let component: ProvidedComponent;
  let fixture: ComponentFixture<ProvidedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
