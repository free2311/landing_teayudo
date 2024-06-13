import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { RouterModule } from "@angular/router";

import { BasicelementsComponent } from "./basicelements/basicelements.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TypographyComponent } from "./typography/typography.component";
import { NucleoiconsComponent } from "./nucleoicons/nucleoicons.component";
import { ComponentsComponent } from "./components.component";
import { NotificationComponent } from "./notification/notification.component";
import { NgbdModalComponent } from "./modal/modal.component";
import { NgbdModalContent } from "./modal/modal.component";
import { ButtonserviceComponent } from "./buttons/buttonservice/buttonservice.component";
import { NumericInputComponent } from './input/numeric-input/numeric-input.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    ReactiveFormsModule
  ],
  declarations: [
    ComponentsComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NotificationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    ButtonserviceComponent,
    NumericInputComponent,
    TestComponent,
  ],
  entryComponents: [NgbdModalContent],
  exports: [ComponentsComponent, ButtonserviceComponent, NumericInputComponent, TestComponent],
})
export class ComponentsModule { }
