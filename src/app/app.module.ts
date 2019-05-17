import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { TrainerComponent } from './trainer/trainer.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { StudyPeriodeComponent } from './study-periode/study-periode.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponent } from './shared/shared.component';
import { BootcampPeriodComponent } from './bootcamp-period/bootcamp-period.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    BackofficeComponent,
    TrainerComponent,
    StudyMaterialComponent,
    StudyPeriodeComponent,
    SharedComponent,
    BootcampPeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
