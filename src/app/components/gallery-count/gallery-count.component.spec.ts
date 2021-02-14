import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCountComponent } from './gallery-count.component';

describe('GalleryCountComponent', () => {
  let component: GalleryCountComponent;
  let fixture: ComponentFixture<GalleryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
