import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PartidaComponent} from "./partida/partida.component";
import {ConfiguracoesComponent} from "./configuracoes/configuracoes.component";
import {CreditosComponent} from "./creditos/creditos.component";
import {AjudaComponent} from "./ajuda/ajuda.component";
import {StartComponent} from "./start/start.component";
import {RankingComponent} from './ranking/ranking.component';
import {StartGuard} from "./utils/start.guard";
import {PartidaGuard} from "./utils/partida.guard";

const routes: Routes = [
  {
    path: 'start', component: StartComponent, canActivate: [StartGuard]
  },
  {
    path: 'app', component: MainComponent, canActivate: [PartidaGuard], children: [
      {path: 'partida', component: PartidaComponent},
      {path: 'ranking', component: RankingComponent},
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
