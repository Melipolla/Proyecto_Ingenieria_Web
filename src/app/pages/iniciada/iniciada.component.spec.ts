import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciadaComponent } from './iniciada.component';

describe('IniciadaComponent', () => {
  let component: IniciadaComponent;
  let fixture: ComponentFixture<IniciadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciadaComponent]
    });
    fixture = TestBed.createComponent(IniciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
