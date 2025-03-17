import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCalculatorPageComponent } from './pages/recipe-calculator-page/recipe-calculator-page.component';
import { RecipeManagerPageComponent } from './pages/recipe-manager-page/recipe-manager-page.component';
import { IngredientCreateComponent } from './pages/ingredient-create/ingredient-create.component';
import { FormsModule } from '@angular/forms';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { RecetteIndexComponent } from './pages/recette-index/recette-index.component';
import { RecetteCreateComponent } from './pages/recette-create/recette-create.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,

    RecipeCalculatorPageComponent,
    RecipeManagerPageComponent,
    IngredientCreateComponent,
    RadarChartComponent,
    RecetteIndexComponent,
    RecetteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
