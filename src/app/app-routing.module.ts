import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '@app/constants';

import { OnBoardComponent } from './components/on-board/on-board.component';

const routes: Routes = [
  {
    path: '',
    component: OnBoardComponent
  },
  {
    path: APP_ROUTES.SIGN_IN,
    loadChildren: () => import('@modules/sign-in/sign-in.module').then(m => m.SignInModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
