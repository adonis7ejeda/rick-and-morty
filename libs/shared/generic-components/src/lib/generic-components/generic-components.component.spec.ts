import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericComponentsComponent } from './generic-components.component';

describe('GenericComponentsComponent', () => {
  let component: GenericComponentsComponent;
  let fixture: ComponentFixture<GenericComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
