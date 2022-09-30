import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MainComponent} from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {PartidaComponent} from './partida/partida.component';
import {ConfiguracoesComponent} from './configuracoes/configuracoes.component';
import {AjudaComponent} from './ajuda/ajuda.component';
import {CreditosComponent} from './creditos/creditos.component';
import {LoginComponent} from './login/login.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ModalComponent} from './modal/modal.component';
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {RankingComponent} from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainComponent,
    PartidaComponent,
    RankingComponent,
    ConfiguracoesComponent,
    AjudaComponent,
    CreditosComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
