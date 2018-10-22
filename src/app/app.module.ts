import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Toaster
import { ToastrModule } from 'ngx-toastr';

// Rich text editor
import { QuillModule } from 'ngx-quill'

// Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/app-structure/header/header.component';
import { ContainerComponent } from './components/app-structure//container/container.component';
import { LeftSidebarComponent } from './components/app-structure//left-sidebar/left-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { PlayersComponent } from './components/players/players.component';
import { NpcsComponent } from './components/npcs/npcs.component';
import { MapsComponent } from './components/maps/maps.component';
import { AudioComponent } from './components/audio/audio.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    HeaderComponent,
    ContainerComponent,
    LeftSidebarComponent,
    HomeComponent,
    CampaignsComponent,
    PlayersComponent,
    NpcsComponent,
    MapsComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    FontAwesomeModule,
    QuillModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
