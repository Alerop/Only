import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyComponentsComponent } from './only-components.component';

describe('OnlyComponentsComponent', () => {
  let component: OnlyComponentsComponent;
  let fixture: ComponentFixture<OnlyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
