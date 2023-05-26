import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    component.teamValue = {
      label: 'label',
      action: () => {},
      image: 'image',
      options: { code: 'code' }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when team close emit', () => {
    const emitMessageSpy = spyOn(component.teamClose, 'emit')

    let button = fixture.debugElement.query(By.css('#button')).nativeElement
    button.click()

    expect(emitMessageSpy).toHaveBeenCalled();
  });
});
