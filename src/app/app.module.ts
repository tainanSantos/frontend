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
import {FasesComponent} from './fases/fases.component';
import {PartidaComponent} from './partida/partida.component';
import {HistoricoComponent} from './historico/historico.component';
import {ConfiguracoesComponent} from './configuracoes/configuracoes.component';
import {AjudaComponent} from './ajuda/ajuda.component';
import {CreditosComponent} from './creditos/creditos.component';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {
  DialogElementsExampleDialogComponent
} from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainComponent,
    FasesComponent,
    PartidaComponent,
    HistoricoComponent,
    ConfiguracoesComponent,
    AjudaComponent,
    CreditosComponent,
    LoginComponent,
    CreateAccountComponent,
    DialogElementsExampleDialogComponent
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
