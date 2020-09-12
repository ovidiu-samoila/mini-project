import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentElementComponent } from './attachment-element.component';

describe('AttachmentElementComponent', () => {
  let component: AttachmentElementComponent;
  let fixture: ComponentFixture<AttachmentElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
