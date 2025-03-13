import { Routes } from '@angular/router';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ApiCallComponent } from './components/api-call/api-call.component';

export const routes: Routes = [
    {
        path: "variables",
        component: VariablesComponent,
    },
    {
        path: "data-binding",
        component: DataBindingComponent,
    },
    {
        path: "directive",
        component: DirectiveComponent,
    },
    {
        path: "template-form",
        component: TemplateFormComponent,
    },
    {
        path: "api-call",
        component: ApiCallComponent,
    },
];
