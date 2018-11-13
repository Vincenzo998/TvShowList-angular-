import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvShowListComponent } from './popular-tv-show-list.component';

describe('PopularTvShowListComponent', () => {
  let component: PopularTvShowListComponent;
  let fixture: ComponentFixture<PopularTvShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTvShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTvShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
