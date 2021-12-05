import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmailComponent } from './app-email.component';

describe('AppEmailComponent', () => {
  let component: AppEmailComponent;
  let fixture: ComponentFixture<AppEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
