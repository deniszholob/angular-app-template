// Angular
import { Component, OnInit } from '@angular/core';

// Models
interface NavLink {
    /** Displayed to the user */
    name: string;
    /** Used in the router link */
    path: string;
    /** If the navlink is to an anchor tag (#) this is it's name */
    fragment?: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    // styleUrls: ['./navbar.component.scss'] // Include as needed
})
export class NavbarComponent implements OnInit {

    public navLinks: NavLink[] = [
        {
            name: 'Home',
            path: '/',
        },
    ];

    constructor() { }

    ngOnInit() {}

}
