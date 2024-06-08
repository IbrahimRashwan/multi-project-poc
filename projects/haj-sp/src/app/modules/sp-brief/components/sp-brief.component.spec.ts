import { ComponentFixture, TestBed } from '@angular/core/testing';

import SPBriefComponent from './sp-brief.component';

describe('SPBriefComponent', () => {
  let component: SPBriefComponent;
  let fixture: ComponentFixture<SPBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPBriefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
