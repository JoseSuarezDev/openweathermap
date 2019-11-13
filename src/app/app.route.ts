import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

// Custom Components
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from './components/home/list/list.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
export const routingComponents = [HomeComponent]