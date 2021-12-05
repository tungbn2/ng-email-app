import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmailBoxComponent } from './app-email/email-box/email-box.component';
import { EmailContentComponent } from './email-content/email-content.component';
import { AppEmailComponent } from './app-email/app-email.component';
import { EmailPreviewComponent } from './app-email/email-preview/email-preview.component';
import { EmailDetailComponent } from './email-content/email-detail/email-detail.component';
import { EmailHeaderComponent } from './email-content/email-header/email-header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReferencesComponent } from './references/references.component';
import { MessageService } from './share/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailBoxComponent,
    EmailContentComponent,
    AppEmailComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    EmailHeaderComponent,
    ContactsComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
