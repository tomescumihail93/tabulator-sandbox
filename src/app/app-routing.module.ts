import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabulatorConfirmationComponent } from './tabulator-confirmation/tabulator-confirmation.component';

const routes: Routes = [
  { path: "tabconfirm", component: TabulatorConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
