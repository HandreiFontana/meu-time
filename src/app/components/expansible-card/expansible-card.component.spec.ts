import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansibleCardComponent } from './expansible-card.component';

describe('ExpansibleCardComponent', () => {
  let component: ExpansibleCardComponent;
  let fixture: ComponentFixture<ExpansibleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansibleCardComponent]
    });
    fixture = TestBed.createComponent(ExpansibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
