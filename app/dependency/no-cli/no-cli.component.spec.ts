import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCliComponent } from './no-cli.component';

describe('NoCliComponent', () => {
  let component: NoCliComponent;
  let fixture: ComponentFixture<NoCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
