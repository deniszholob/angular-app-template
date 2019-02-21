// Angular
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_INFO } from 'app/app-info';
import { APP_UPDATE_DATE } from 'app/app-update';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    // styleUrls: ['./footer.component.scss'] // Include as needed
})
export class FooterComponent implements OnInit {

    public APP_INFO = APP_INFO;
    public APP_UPDATE_DATE = APP_UPDATE_DATE;
    public today: number = Date.now();

    constructor() { }

    ngOnInit() { }

}
