import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    MatCardContent,
    NgForOf,
    MatCard,
    MatCardTitle,
    MatCardImage,
    TranslateModule
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  steps = [
    { image: 'icon1.png', clave: 'step1' },
    { image: 'icon2.png', clave: 'step2' },
    { image: 'icon3.png', clave: 'step3' }
  ];
}
