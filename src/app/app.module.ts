import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipePage } from '../pages/recipe/recipe';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { ShoppingListService } from '../services/shopping-list';
import { RecipesService } from '../services/recipes';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { AuthService } from '../services/auth';
import { SLOptionsPage } from '../pages/shopping-list/sl-options/sl-options';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShoppingListPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    SignupPage,
    SigninPage,
    SLOptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShoppingListPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    SignupPage,
    SigninPage,
    SLOptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService,
    AuthService
  ]
})
export class AppModule {}
