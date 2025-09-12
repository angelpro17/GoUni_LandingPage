import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  protected currentLang: string = 'en';
  protected languages: string[] = ['en', 'es'];

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language');
    this.currentLang = savedLang ? savedLang : 'en';
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
    localStorage.setItem('language', language);
  }
}
