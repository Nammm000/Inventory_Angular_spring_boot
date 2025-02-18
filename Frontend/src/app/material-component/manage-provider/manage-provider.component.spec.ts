import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProviderComponent } from './manage-provider.component';

describe('ManageProviderComponent', () => {
  let component: ManageProviderComponent;
  let fixture: ComponentFixture<ManageProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
