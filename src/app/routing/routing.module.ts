import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { PublicComponent } from "../public/public.component";
import { TermsComponent } from "../terms/terms.component";
import { PrivacyComponent } from "../privacy/privacy.component";

const routes: Routes = [
  { path: "", redirectTo: "public", pathMatch: "full" },

  {
    path: "public",
    component: PublicComponent,
  },

  {
    path: "terms",
    component: TermsComponent,
  },

  {
    path: "privacy",
    component: PrivacyComponent,
  },

  { path: "**", component: PublicComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
    ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }