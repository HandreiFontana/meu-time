import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSelectComponent } from './season-select.component';

describe('SeasonSelectComponent', () => {
  let component: SeasonSelectComponent;
  let fixture: ComponentFixture<SeasonSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonSelectComponent]
    });
    fixture = TestBed.createComponent(SeasonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
