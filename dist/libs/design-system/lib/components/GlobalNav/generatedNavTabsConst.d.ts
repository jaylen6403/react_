export declare const NAV_TABS: ({
    title: string;
    icon: string;
    route: string;
    children?: undefined;
    permissions?: undefined;
} | {
    title: string;
    icon: string;
    children: ({
        title: string;
        url: string;
        permissions?: undefined;
    } | {
        title: string;
        url: string;
        permissions: string[];
    })[];
    route?: undefined;
    permissions?: undefined;
} | {
    title: string;
    icon: string;
    children: ({
        title: string;
        route: string;
        permissions?: undefined;
    } | {
        title: string;
        permissions: string[];
        route: string;
    })[];
    route?: undefined;
    permissions?: undefined;
} | {
    title: string;
    icon: string;
    permissions: string[];
    route: string;
    children?: undefined;
} | {
    title: string;
    permissions: string[];
    route: string;
    icon?: undefined;
    children?: undefined;
} | {
    title: string;
    icon: string;
    permissions: string[];
    children: ({
        title: string;
        route: string;
        permissions: string[];
        url?: undefined;
        permission?: undefined;
    } | {
        title: string;
        route: string;
        permissions?: undefined;
        url?: undefined;
        permission?: undefined;
    } | {
        title: string;
        permissions: string[];
        url: string;
        route?: undefined;
        permission?: undefined;
    } | {
        title: string;
        permission: string;
        route: string;
        permissions?: undefined;
        url?: undefined;
    })[];
    route?: undefined;
})[];
export declare const ADMIN_TABS: {
    title: string;
    children: ({
        title: string;
        permissions: string[];
        route: string;
        url?: undefined;
    } | {
        title: string;
        route: string;
        permissions?: undefined;
        url?: undefined;
    } | {
        title: string;
        permissions: string[];
        url: string;
        route?: undefined;
    })[];
}[];
