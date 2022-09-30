import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PartidaComponent} from "./partida/partida.component";
import {HistoricoComponent} from "./historico/historico.component";
import {ConfiguracoesComponent} from "./configuracoes/configuracoes.component";
import {CreditosComponent} from "./creditos/creditos.component";
import {AjudaComponent} from "./ajuda/ajuda.component";
import {LoginComponent} from "./login/login.component";
import {CreateAccountComponent} from "./create-account/create-account.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'criar_conta', component: CreateAccountComponent,
  },
  {
    path: 'app', component: MainComponent, children: [
      {path: 'partida', component: PartidaComponent},
      {path: 'historico', component: HistoricoComponent},
      {path: 'configuracoes', component: ConfiguracoesComponent},
      {path: 'creditos', component: CreditosComponent},
      {path: 'ajuda', component: AjudaComponent},
    ],
  },

  {
    path: "**", pathMatch: "full", redirectTo: "app/partida"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
