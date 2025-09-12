import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MatButton,
    ToolbarComponent,
    FooterComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  protected invalidPath: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidPath = '';
  }

  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  protected onNavigateHome() {
    this.router.navigate(['home']).then();
  }

}
