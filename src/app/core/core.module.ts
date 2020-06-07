import { DateService } from './services/date.service';
import { ProjectHttpService } from './../project/services/http/project-http.service';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './../project/effects/project.effects';
import { UserActions } from './../user/actions/user.actions';
import { CommentActions } from './../project/actions/comment.actions';
import { StripeService } from './services/stripe.service';
import { ProjectActions } from './../project/actions/project.actions';
import { AuthActions } from './actions/auth.actions';
import { AuthService } from './services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { HttpService } from './services/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpXhrBackend, HttpRequest, HttpClient } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';

export function httpInterceptor(
  backend: HttpXhrBackend,
  defaultOptions: HttpRequest<any>,
) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  imports: [
    EffectsModule.run(ProjectEffects),
  ],
  declarations: [],
  providers: [
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ HttpXhrBackend, HttpRequest]
    },
    ProjectActions,
    CommentActions,
    UserActions,
    ProjectHttpService,
    AuthService,
    AuthActions,
    StripeService,
    AuthGuard,
    DateService
  ]
})
export class CoreModule { }
