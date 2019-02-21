// Angular
import { Component } from '@angular/core';

// PWA
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private updates: SwUpdate,
    ) {
        // Service worker auto refresh the page if new version available
        updates.available.subscribe(event => {
            this.updates.activateUpdate().then(() => document.location.reload());
        });
    }
}
