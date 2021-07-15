import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {TypesComponent} from './types/types.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ZonesComponent} from './zones/zones.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TechniqueComponent} from './technique/technique.component';
import {RoutinesComponent} from './routines/routines.component';
import {StrengthComponent} from './strength/strength.component';
import {StretchingComponent} from './stretching/stretching.component';
import {WeekComponent} from './week/week.component';
import {CalendarComponent} from './calendar/calendar.component';
import {TypeSelectorComponent} from './type-selector/type-selector.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypesComponent,
    ZonesComponent,
    TechniqueComponent,
    RoutinesComponent,
    StrengthComponent,
    StretchingComponent,
    CalendarComponent,
    WeekComponent,
    TypeSelectorComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
