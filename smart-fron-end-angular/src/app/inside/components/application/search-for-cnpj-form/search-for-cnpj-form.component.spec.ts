import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForCnpjFormComponent } from './search-for-cnpj-form.component';

describe('SearchForCnpjFormComponent', () => {
  let component: SearchForCnpjFormComponent;
  let fixture: ComponentFixture<SearchForCnpjFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchForCnpjFormComponent]
    });
    fixture = TestBed.createComponent(SearchForCnpjFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
