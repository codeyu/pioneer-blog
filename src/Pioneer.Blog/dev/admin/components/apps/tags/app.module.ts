﻿import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }                     from './app.component';
import { TagsPageComponent }                 from '../../pages/tags/tags-page.component';
import { PaginatedCollectionListComponent } from '../../paginated-collection-list/paginated-collection-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TagsPageComponent,
    PaginatedCollectionListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }