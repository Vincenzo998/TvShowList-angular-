import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRatedTvShowComponent } from './most-rated-tv-show.component';

describe('MostRatedTvShowComponent', () => {
  let component: MostRatedTvShowComponent;
  let fixture: ComponentFixture<MostRatedTvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRatedTvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRatedTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
