import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/components/layout.component';

export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
        data:{
          items: [
            {
                label: 'Haj Mission Home',
                icon: 'pi pi-home',
                route: '/'
            },
            {
                label: 'Haj Mission About us',
                icon: 'pi pi-info-circle',
                route: '/about-us'
            }
        ]
        },
        children:[
            { path:"", loadComponent: () => import("./modules/home/components/home.component")},
            {
              path:"about-us",
              loadComponent: () => import("@shared/modules/about-us/components/about-us.component"),
              data:{
                project: "Haj Mission"
              },
            },
        ]
    }
];
