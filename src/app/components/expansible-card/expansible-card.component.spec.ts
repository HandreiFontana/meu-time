import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansibleCardComponent } from './expansible-card.component';
import { By } from '@angular/platform-browser';

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

  it('should receive a card title', () => {
    const cardTitle = 'cardTitle'
    component.cardTitle = cardTitle

    expect(component.cardTitle).toBe(cardTitle)
  })

  it('should receive a card value', () => {
    const cardValue = 'cardValue'
    component.cardValue = cardValue

    expect(component.cardValue).toBe(cardValue)
  })

  it('should receive a card is expanded', () => {
    const cardIsExpanded = true
    component.cardIsExpanded = cardIsExpanded

    expect(component.cardIsExpanded).toBeTrue()
  })

  it('should emit the card value', () => {
    const emitCardClickSpy = spyOn(component.cardClick, 'emit')
    component.cardValue = 'cardValue'

    let card = fixture.debugElement.query(By.css('#card')).nativeElement
    card.click()

    expect(emitCardClickSpy).toHaveBeenCalledWith('cardValue')
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
