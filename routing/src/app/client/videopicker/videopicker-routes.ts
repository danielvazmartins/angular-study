import { Routes } from "@angular/router";
import { VideopickerComponent } from "./videopicker.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProdutosComponent } from "./produtos/produtos.component";

export const videoPickerRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'produtos', component: ProdutosComponent}
];