import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPersonLegalFormComponent } from './registration-person-legal-form.component';

describe('RegistrationPersonLegalFormComponent', () => {
  let component: RegistrationPersonLegalFormComponent;
  let fixture: ComponentFixture<RegistrationPersonLegalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPersonLegalFormComponent]
    });
    fixture = TestBed.createComponent(RegistrationPersonLegalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
