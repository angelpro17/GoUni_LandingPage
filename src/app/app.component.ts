import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./public/components/footer/footer.component";
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {HowItWorksComponent} from "./public/pages/how-it-works/how-it-works.component";
import {PlansComponent} from "./public/pages/plans/plans.component";
import {BenefitsComponent} from "./public/pages/benefits/benefits.component";
import {SecurityComponent} from "./public/pages/security/security.component";
import {SponsorComponent} from "./public/pages/sponsor/sponsor.component";
import {FeaturesComponent} from "./public/pages/features/features.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToolbarComponent, LanguageSwitcherComponent, ContactComponent, HomeComponent, HowItWorksComponent, PlansComponent, BenefitsComponent, SecurityComponent, FeaturesComponent, SponsorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page-With-Angular';
  options = [
    { path: '/home', title: 'Home' },
    { path: '/header', title: 'Header' },
    { path: '/benefits', title: 'Benefits' },
    { path: '/how-it-works', title: 'How It Works' },
    { path: '/plans', title: 'Plans' },
    { path: '/security', title: 'Security' },
    { path: '/contact', title: 'Contact' },
    { path:'/sponsor', title:'SponsorComponent'},
    { path: '/team', title: 'TeamComponent'},
    { path: '/features', title: 'FeaturesComponent'}
  ];
}
