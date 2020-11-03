import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component'
import { TerminosComponent } from '../terminos/terminos.component'

const routes: Routes = [
    {
        path: '',
        component: FormularioComponent,
    },
    {
      path: 'terminos',
      component: TerminosComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }