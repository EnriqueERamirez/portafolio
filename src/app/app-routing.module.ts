import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './inicio/inicio.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
