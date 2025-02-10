import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteUserComponent } from './delte-user.component';

describe('DelteUserComponent', () => {
  let component: DelteUserComponent;
  let fixture: ComponentFixture<DelteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelteUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
