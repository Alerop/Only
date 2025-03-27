import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardPrototypeComponent } from './custom-card-prototype.component';

describe('CustomCardPrototypeComponent', () => {
  let component: CustomCardPrototypeComponent;
  let fixture: ComponentFixture<CustomCardPrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCardPrototypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
