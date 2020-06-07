import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StripeOauthRedirectComponent } from './stripe-oauth-redirect/stripe-oauth-redirect.component';
import { routes as staticPagesRoutes } from './static-pages/static-pages.routes';

export  const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects/:id/payment', loadChildren: './payment/payment.module#PaymentModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
  { path: 'categories', loadChildren: './projects-listing/projects-listing.module#ProjectListingModule' },
  { path: 'users/:id', loadChildren: './user/user.module#UserModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'stripe_oauth/redirect', component: StripeOauthRedirectComponent },
  ...staticPagesRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
