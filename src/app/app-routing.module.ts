import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEmailComponent } from './app-email/app-email.component';
import { EmailPreviewComponent } from './app-email/email-preview/email-preview.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EmailContentComponent } from './email-content/email-content.component';
import { EmailDetailComponent } from './email-content/email-detail/email-detail.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  {
    path: 'message',
    component: AppEmailComponent,
    children: [
      {
        path: ':folder',
        component: EmailPreviewComponent,
      },
      {
        path: ':folder/:id',
        component: EmailPreviewComponent,
      },
    ],
  },

  { path: 'contacts', component: ContactsComponent },
  { path: 'references', component: ReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
