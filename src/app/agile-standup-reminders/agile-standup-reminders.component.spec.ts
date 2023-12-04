import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileStandupRemindersComponent } from './agile-standup-reminders.component';

describe('AgileStandupRemindersComponent', () => {
  let component: AgileStandupRemindersComponent;
  let fixture: ComponentFixture<AgileStandupRemindersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgileStandupRemindersComponent]
    });
    fixture = TestBed.createComponent(AgileStandupRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
