import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

// Custom Components
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
export const routingComponents = [HomeComponent]