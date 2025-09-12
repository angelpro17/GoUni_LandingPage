import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule
  ],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.css'
})
export class SponsorComponent {
  sponsors = [
    { name: 'UPN', logo: 'logo_upn-1%201.png' },
    { name: 'USIL', logo: 'logo-USIL-1080x600-removebg-preview%201.png' },
    { name: 'UPC', logo: 'UPC_logo_transparente%201.png' },
    { name: 'ESAN', logo: 'Logo-esan-principal%201.png' },
    { name: 'UTP', logo: 'Utplogonuevo.svg%201.png' },
    { name: 'PUCP', logo: 'logo-pucp-color%201.png' }
  ];
}
