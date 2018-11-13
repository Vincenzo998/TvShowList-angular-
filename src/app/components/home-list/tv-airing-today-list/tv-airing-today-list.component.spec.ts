import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAiringTodayListComponent } from './tv-airing-today-list.component';

describe('TvAiringTodayListComponent', () => {
  let component: TvAiringTodayListComponent;
  let fixture: ComponentFixture<TvAiringTodayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvAiringTodayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAiringTodayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
