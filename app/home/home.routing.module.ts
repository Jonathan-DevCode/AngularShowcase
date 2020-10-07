import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: "", component: HomeComponent, 
        children: [
            {
                path: "", loadChildren: () => import('./../router/router.module')
                    .then( imported => imported.RouterModule)
            }
        ]   
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }