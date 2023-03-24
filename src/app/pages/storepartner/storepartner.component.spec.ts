import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepartnerComponent } from './storepartner.component';

describe('StorepartnerComponent', () => {
  let component: StorepartnerComponent;
  let fixture: ComponentFixture<StorepartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorepartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorepartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
