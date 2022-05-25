import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeeComponent} from "./components/bee/bee.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {OctopusComponent} from "./components/octopus/octopus.component";
import {SlothComponent} from "./components/sloth/sloth.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'bee', component: BeeComponent},
  { path: 'octopus', component: OctopusComponent},
  { path: 'sloth', component: SlothComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
