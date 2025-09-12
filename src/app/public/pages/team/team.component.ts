import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  team = [
    { id: '01', name: 'Anampa Lavado, Luis Angel', role: 'Desarrollador-DevOps', extraRole: 'Código: u202218664', photo: 'Anampa_Angel.jpeg' },
    { id: '02', name: 'Ayquipa Ubaldo, Abraham Israel', role: 'Desarrollador Full-Stack Frontend', extraRole: 'Código: u202218475', photo: 'Ayquipa_Abraham.jpeg' },
    { id: '03', name: 'Onofre Ruiz, Carlos Jesus', role: 'Desarrollador Backend y UX/UI', extraRole: 'Código: u202115590', photo: 'Onofre_Carlos.jpeg' },
    { id: '04', name: 'Landeo Simeón, Favio Sebastián', role: 'Desarrollador Full-Stack', extraRole: 'Código: u202119588', photo: 'favio.jpg' }
  ];
}
