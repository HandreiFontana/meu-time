import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
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
