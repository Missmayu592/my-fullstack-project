import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotcomponentComponent } from './notcomponent.component';

describe('NotcomponentComponent', () => {
  let component: NotcomponentComponent;
  let fixture: ComponentFixture<NotcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
