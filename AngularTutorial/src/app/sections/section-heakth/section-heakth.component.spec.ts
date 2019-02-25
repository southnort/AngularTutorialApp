import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeakthComponent } from './section-heakth.component';

describe('SectionHeakthComponent', () => {
  let component: SectionHeakthComponent;
  let fixture: ComponentFixture<SectionHeakthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHeakthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeakthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
