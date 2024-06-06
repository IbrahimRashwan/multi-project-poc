import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/components/layout.component';

export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
        children:[
            { path:"", loadComponent: () => import("./modules/home/components/home.component")}
        ]
    }
];
