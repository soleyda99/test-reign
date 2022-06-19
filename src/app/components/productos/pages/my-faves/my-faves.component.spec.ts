import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavesComponent } from './my-faves.component';

describe('MyFavesComponent', () => {
  let component: MyFavesComponent;
  let fixture: ComponentFixture<MyFavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
