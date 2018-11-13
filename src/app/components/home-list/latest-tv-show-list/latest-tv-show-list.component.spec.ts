import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTvShowListComponent } from './latest-tv-show-list.component';

describe('LatestTvShowListComponent', () => {
  let component: LatestTvShowListComponent;
  let fixture: ComponentFixture<LatestTvShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestTvShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTvShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
