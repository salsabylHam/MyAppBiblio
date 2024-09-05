import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoverComponent } from './home/cover/cover.component';
import { BlogListComponent } from './home/blog-list/blog-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AtomicComponent } from './atomic/atomic.component';
import { BecomingComponent } from './becoming/becoming.component';
import { BookthiefComponent } from './bookthief/bookthief.component';
import { GeorgeComponent } from './george/george.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoverComponent,
    BlogListComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AuthorComponent,
    CreatearticleComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    PrivacyComponent,
    NotfoundComponent,
    AtomicComponent,
    BecomingComponent,
    BookthiefComponent,
    GeorgeComponent,
    HarryPotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
