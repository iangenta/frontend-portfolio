import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LogoutComponent } from './components/logout/logout.component';
import {  HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    FooterComponent,
    AboutMeComponent,
    LogoutComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
