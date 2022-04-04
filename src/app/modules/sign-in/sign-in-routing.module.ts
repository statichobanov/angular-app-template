import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { UnauthorizedGuard } from '@app/services/guards'; */
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    /*     canActivate: [
       UnauthorizedGuard
    ], */
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignInRoutingModule {}
