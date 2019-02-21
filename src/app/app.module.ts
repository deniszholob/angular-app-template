// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms'

// Third Party (UI frameworks, etc...)
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ClarityModule } from '@clr/angular'
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
// import { TranslateHttpLoader } from '@ngx-translate/http-loader'

// Routing
import { AppRoutingModule, routedComponents } from 'app/app-routing.module';

// Services
// import * as appServices from 'app/services';

// Validators
// import * as appValidators from 'app/validators';

// Non routed components (Views, Modals, etc...)
import { AppComponent } from 'app/app.component';
import * as ViewComponents from 'app/views/components';
// import * as ViewModals from 'app/views/modals';

@NgModule({
    imports: [
        BrowserModule,
        // HttpClientModule,
        // FormsModule,
        AppRoutingModule,
        // NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        routedComponents,
        ViewComponents.FooterComponent,
        ViewComponents.NavbarComponent,
    ],
    providers: [
        // appServices.DataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
