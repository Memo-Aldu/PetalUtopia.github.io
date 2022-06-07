import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerAlbumComponent } from './flower-album.component';

describe('FlowerAlbumComponent', () => {
  let component: FlowerAlbumComponent;
  let fixture: ComponentFixture<FlowerAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
