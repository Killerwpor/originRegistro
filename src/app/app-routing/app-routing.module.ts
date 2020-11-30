import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component'
import { TerminosComponent } from '../terminos/terminos.component'
import { DescargaComponent } from '../descarga/descarga.component'
import { AdminPanelComponent } from '../admin-panel/admin-panel.component'

const routes: Routes = [
    {
        path: '',
        component: FormularioComponent,
    },
    {
      path: 'terminos',
      component: TerminosComponent,
  },
  {
    path: 'descarga',
    component: DescargaComponent,
},
{
    path: 'admin',
    component: AdminPanelComponent,
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