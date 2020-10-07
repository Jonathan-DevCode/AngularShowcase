import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavegationComponent } from './navegation.component';


const routes: Routes = [
  	{ path: "", component: NavegationComponent, 
		children: [
			{
				path: "one", loadChildren: () => import ('./route-one/route-one.module')
				.then(imported => imported.RouteOneModule)
			},
			{
				path: "two", loadChildren: () => import ('./route-two/route-two.module')
				.then(imported => imported.RouteTwoModule)
			},
			
			{ path: '', pathMatch: 'full', redirectTo: 'one' }
		]
	}

];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})

export class NavegationRoutingModule { }
