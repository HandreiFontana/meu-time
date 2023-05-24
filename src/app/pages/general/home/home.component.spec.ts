import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle expanded card to a card value', () => {
    const card = 'card'
    component.toggleExpandedCard(card)
    expect(component.expandedCard).toEqual(card)
  })

  it('should toggle expanded card to a null value', () => {
    const card = 'card'
    component.expandedCard = card
    component.toggleExpandedCard(card)
    expect(component.expandedCard).toBeNull()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
