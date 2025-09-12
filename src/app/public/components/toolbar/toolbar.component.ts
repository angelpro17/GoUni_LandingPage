import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterLink,
    LanguageSwitcherComponent,
    TranslateModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openLogin() {
    window.open('', '_self');
  }

  openRegister() {
    window.open('', '_self');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
