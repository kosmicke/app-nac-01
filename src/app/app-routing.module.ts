import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example/example.component';

const routes: Routes = [
  // APLIQUE SUAS CONFIGURAÇÕES DE ROTAS AQUI
  // {...}

  // ESTAS SÃO ROTAS DE EXEMPLO
  {
    path: "example",
    component : ExampleComponent
  },
  {
    path: "",
    redirectTo : "/example",
    pathMatch : "full"
  },
  {
    path: "**",
    component : ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
