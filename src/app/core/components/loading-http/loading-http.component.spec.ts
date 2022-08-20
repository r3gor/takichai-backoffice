import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingHttpComponent } from './loading-http.component';

describe('LoadingHttpComponent', () => {
  let component: LoadingHttpComponent;
  let fixture: ComponentFixture<LoadingHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
