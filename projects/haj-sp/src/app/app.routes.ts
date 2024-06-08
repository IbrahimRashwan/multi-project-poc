import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/components/layout.component';

export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
        data:{
          items: [
            {
                label: 'Haj SP Home',
                icon: 'pi pi-home',
                route: '/'
            },
            {
                label: 'Haj SP About us',
                icon: 'pi pi-info-circle',
                route: '/about-us'
            },
            {
                label: 'Haj SP Brief',
                icon: 'pi pi-info-circle',
                route: '/sp-brief'
            }
        ]
        },
        children:[
            { path:"", loadComponent: () => import("./modules/home/components/home.component")},
            { path:"sp-brief", loadComponent: () => import("./modules/sp-brief/components/sp-brief.component")},
            {
              path:"about-us",
              loadComponent: () => import("@shared/modules/about-us/components/about-us.component"),
              data:{
                project: "Haj Service Provider"
              },
            },
        ]
    }
];
