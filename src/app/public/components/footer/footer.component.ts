import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
