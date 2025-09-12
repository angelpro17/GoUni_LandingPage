import { Component } from '@angular/core';
import {MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  beneficios = [
    { icono: 'pig.png', clave: 'benefit1' },
    { icono: 'people.png', clave: 'benefit2' },
    { icono: 'leaf.png', clave: 'benefit3' },
    { icono: 'shield.png', clave: 'benefit4' },
    { icono: 'clock.png', clave: 'benefit5' },
    { icono: 'graduation_hat.png', clave: 'benefit6' }
  ];
}
