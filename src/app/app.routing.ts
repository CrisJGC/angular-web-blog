import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreatComponent } from './components/creat/creat.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProyectoComponent } from "./components/proyecto/proyecto.component";

const appRoutes: Routes = [
    {path: '', component: AboutmeComponent},
    {path: 'about-me', component: AboutmeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'create', component: CreatComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project/:id', component: ProyectoComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
