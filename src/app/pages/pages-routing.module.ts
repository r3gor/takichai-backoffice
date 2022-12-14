import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSessionRequiredGuard } from '../core/guards/nosession-required.guard';
import { LayoutComponent } from '../layout/layout.component';
import { SessionRequiredGuard } from '../core/guards/session-required.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [NoSessionRequiredGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [SessionRequiredGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'songs',
        loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
