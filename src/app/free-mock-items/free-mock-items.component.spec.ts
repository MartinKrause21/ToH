import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreeMockItemsComponent } from './free-mock-items.component';

describe('FreeMockItemsComponent', () => {
  let component: FreeMockItemsComponent;
  let fixture: ComponentFixture<FreeMockItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeMockItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMockItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
