import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PlansComponent} from "./public/pages/plans/plans.component";
import {SecurityComponent} from "./public/pages/security/security.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {HeaderComponent} from "./public/pages/header/header.component";
import {BenefitsComponent} from "./public/pages/benefits/benefits.component";
import {HowItWorksComponent} from "./public/pages/how-it-works/how-it-works.component";
import {SponsorComponent} from "./public/pages/sponsor/sponsor.component";
import {TeamComponent} from "./public/pages/team/team.component";
import {FeaturesComponent} from "./public/pages/features/features.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent},
  { path:'benefits',component: BenefitsComponent},
  { path: 'how-it-works', component: HowItWorksComponent},
  { path:'plans', component: PlansComponent },
  { path:'security', component: SecurityComponent },
  { path: 'contact', component:ContactComponent},
  { path:'sponsor', component:SponsorComponent},
  { path: 'team', component: TeamComponent},
  { path: 'features', component: FeaturesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirecciona a 'home' por defecto
  { path: '**', component: PageNotFoundComponent }      // Ruta para páginas no encontradas
];
