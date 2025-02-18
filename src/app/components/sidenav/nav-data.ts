import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fas fa-home',
        label: 'Dashboard'
    }, 
    {
        routeLink: 'products',
        icon: 'fas fa-box-open',
        label: 'Products',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Level 1.1',
                items: [
                    {
                        routeLink: 'products/level2.1',
                        label: 'Level 2.1'
                    },
                    {
                        routeLink: 'products/level2.2',
                        label: 'Level 2.2',
                        items: [
                            {
                                routeLink: 'products/level3.1',
                                label: 'Level 3.1'
                            },
                            {
                                routeLink: 'products/level3.2',
                                label: 'Level 3.2'
                            }
                        ]
                    }
                ]
            }, 
            {
                routeLink: 'products/level1.2',
                label: 'Level 1.2'
            }
        ]
    },
    {
        routeLink: 'statistic',
        icon: 'fas fa-chart-bar',
        label: 'Statistic'
    },
    {
        routeLink: 'pages',
        icon: 'fas fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'coupens',
        icon: 'fas fa-tags',
        label: 'Coupens',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routeLink: 'media',
        icon: 'fas fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fas fa-cog',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    }
];