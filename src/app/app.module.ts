import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ListComponent } from './list/list.component';
import { TabComponent } from './tab/tab.component';
import { ItemComponent } from './item/item.component';
import { YearsComponent } from './years/years.component';
import { YearItemComponent } from './year-item/year-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewBookComponent,
    ListComponent,
    TabComponent,
    ItemComponent,
    YearsComponent,
    YearItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
