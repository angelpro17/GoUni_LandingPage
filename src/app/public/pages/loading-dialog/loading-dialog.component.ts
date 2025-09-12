import { Component } from '@angular/core';
import {MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import {CommonModule, NgIf} from "@angular/common";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-loading-dialog',
  template: `
    <h2 mat-dialog-title>{{ title }}</h2>
    <mat-dialog-content>
      <div class="loading-content">
        <mat-spinner *ngIf="!success" diameter="50"></mat-spinner>
        <mat-icon *ngIf="success" class="success-icon">check_circle</mat-icon>
        <p>{{ message }}</p>
      </div>
    </mat-dialog-content>
  `,
  styles: [`
    .loading-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    h2 {
      text-align: center;
    }
    p {
      margin-top: 20px;
    }
    .success-icon {
      font-size: 50px;
      height: 50px;
      width: 50px;
      color: #4caf50;
    }
  `],
  standalone: true,
  imports: [MatDialogModule, MatProgressSpinnerModule, MatIconModule, CommonModule, MatDialogTitle, MatDialogContent, MatIcon, NgIf, MatProgressSpinner]
})
export class LoadingDialogComponent {
  title = 'Procesando solicitud';
  message = 'Por favor, espera...';
  success = false;

  setSuccess() {
    this.success = true;
    this.title = 'Correo verificado';
    this.message = 'Tu correo ha sido verificado correctamente';
  }
}
