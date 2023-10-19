import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomDialogComponent } from './custom-dialog.component';

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDialogComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    component.dataModal = {
      displayModal: false,
      textModal: 'Hubo un error al iniciar sesión',
      iconModal: 'pi-exclamation-circle',
      typeModal: 'Error'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog with success', () => {
    component.data = {
      displayModal: true,
      textModal: 'Success message',
      iconModal: 'success-icon',
      typeModal: 'Éxito',
    };

    let closeEventEmitted = false;
    component.closeModal.subscribe((result: boolean) => {
      closeEventEmitted = result;
    });

    component.closeDialog();

    expect(component.data.displayModal).toBe(false);
    expect(closeEventEmitted).toBe(true);
  });

  it('should confirm dialog', () => {
    let confirmEventEmitted = false;
    component.confirmModal.subscribe((result: boolean) => {
      confirmEventEmitted = result;
    });

    component.confirmDialog();

    expect(confirmEventEmitted).toBe(true);
    expect(component.data.displayModal).toBe(false);
  });

});
