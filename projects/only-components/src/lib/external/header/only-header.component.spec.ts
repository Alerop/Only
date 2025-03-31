import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyHeaderComponent } from './only-header.component';

describe('OnlyHeaderComponent', () => {
  let component: OnlyHeaderComponent;
  let fixture: ComponentFixture<OnlyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
