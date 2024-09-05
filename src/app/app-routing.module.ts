import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';
import { GeorgeComponent } from './george/george.component';
import { BookthiefComponent } from './bookthief/bookthief.component';
import { AtomicComponent } from './atomic/atomic.component';
import { BecomingComponent } from './becoming/becoming.component';

const routes: Routes = [
  {path : '',component:HomeComponent},
  {path : 'home',component:HomeComponent},
  {path : 'about',component:AboutComponent},
  {path : 'author/:id',component:AuthorComponent},
  {path : 'create',component:CreatearticleComponent},
  {path : 'article',component:DetailComponent},
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'privacy',component:PrivacyComponent},
  { path: 'harry', component: HarryPotterComponent },
  { path: 'george', component: GeorgeComponent },
  { path: 'book', component: BookthiefComponent },
  { path: 'atomic', component: AtomicComponent },
  { path: 'becoming', component: BecomingComponent },
  {path : '**',component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
