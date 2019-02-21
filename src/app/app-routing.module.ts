// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// View Components
import * as ViewPages from 'app/views/pages';

// Constants

/** App Route List */
const routes: Routes = [
    { path: '', component: ViewPages.HomeComponent },
    { path: '**', component: ViewPages.NotFoundComponent },
];

/**
 * Routed App Page Components
 * Exported for ease of import in the main app.module.ts
 */
export const routedComponents = [
    ViewPages.HomeComponent,
    ViewPages.NotFoundComponent,
];

/**
 * Router Options
 * Enable use of (#) anchor tags
 */
const routerOptions: ExtraOptions = {
    // useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};

/** Routing Module Class itself */
@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
