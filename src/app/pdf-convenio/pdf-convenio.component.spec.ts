import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfConvenioComponent } from './pdf-convenio.component';

describe('PdfConvenioComponent', () => {
  let component: PdfConvenioComponent;
  let fixture: ComponentFixture<PdfConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfConvenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
