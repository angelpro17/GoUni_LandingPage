import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      image: 'diversity.png',
      title: 'Comunidad estudiantil',
      description: 'Conecta con otros estudiantes de tu universidad y haz nuevos amigos'
    },
    {
      image: 'verified.png',
      title: 'Seguridad Garantizada',
      description: 'Viaja con confianza gracias a nuestro sistema de verificación de usuarios.'
    },
    {
      image: 'eco.png',
      title: 'Eco friendly',
      description: 'Reduce tu huella de carbono compartiendo viajes y cuidando el medio ambiente.'
    },
    {
      image: 'saving.png',
      title: 'Ahorro económico',
      description: 'Divide los costos de transporte y ahorra dinero en tus viajes diarios.'
    }
  ];
}
