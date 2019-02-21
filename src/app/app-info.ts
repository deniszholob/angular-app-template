// === App level constants === //

/** Contains constants for the app */
export const APP_INFO: AppInfo = {
    app: {
        name: 'Angular_App_Template_Name',
        url: 'Angular_App_Template_URL',
        title: 'Angular_App_Template_Title',
    },
    author: {
        name: 'Denis Zholob',
        url: '//deniszholob.com',
    },
    // languages: ['en-US'],
}

/** App level constants */
interface AppInfo {
    app: Hyperlink;
    /** Author of this app */
    author: Hyperlink;
    /** Languages supported by this app */
    // languages: string[];
}

/** Hyperlink data */
interface Hyperlink {
    name: string;
    url: string;
    title?: string;
}
