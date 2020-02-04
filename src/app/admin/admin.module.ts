import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';
import { ConfigComponent } from './config/config.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSlideToggleModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [AdminComponent, BlogComponent, ConfigComponent],
  imports: [
    AdminRoutingModule,
    AngularFireDatabaseModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class AdminModule { }
