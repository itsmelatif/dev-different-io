import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/UI/navbar/navbar.component';
import { FoldersComponent } from './shared/components/UI/folders/folders.component';
import { UplodedFilesComponent } from './shared/components/UI/uploded-files/uploded-files.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FoldersComponent,
    UplodedFilesComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'dev-different-test';
}
