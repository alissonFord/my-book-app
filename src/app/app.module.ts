import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ListComponent } from './list/list.component';
import { TabComponent } from './tab/tab.component';
import { ItemComponent } from './item/item.component';
import { YearsComponent } from './years/years.component';
import { YearItemComponent } from './year-item/year-item.component';
import { BooksServce } from './books.service';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes = [
  { path: '', component: WelcomeComponent },
  { path: 'book-list', component: TabComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    ListComponent,
    TabComponent,
    ItemComponent,
    YearsComponent,
    YearItemComponent,
    WelcomeComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BooksServce],
  bootstrap: [AppComponent]
})
export class AppModule { }
