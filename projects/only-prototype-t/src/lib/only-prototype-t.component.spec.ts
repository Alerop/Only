import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyPrototypeTComponent } from './only-prototype-t.component';

describe('OnlyPrototypeTComponent', () => {
  let component: OnlyPrototypeTComponent;
  let fixture: ComponentFixture<OnlyPrototypeTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyPrototypeTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyPrototypeTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
