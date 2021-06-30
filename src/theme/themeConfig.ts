import { ThemeOptions } from '@material-ui/core/styles';

// import { Theme } from '@material-ui/core/styles/createMuiTheme';
// import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        appDrawer: {
            drawerWidth: number;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        appDrawer?: {
            drawerWidth: number;
        };
    }
}

export const themeConfig: ThemeOptions = {
    palette: {
        primary: {
            light: '#7cfffe',
            main: '#3cdecb',
            dark: '#00ab9a',
        },
    },
    appDrawer: {
        drawerWidth: 240,
    },
    overrides: {
        // MuiDrawer: {
        //     paper: {
        //         // backgroundColor: '#7cfffe',
        //         // color: 'white',
        //     },
        // },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
            },
        },
        MuiIconButton: {
            root: {
                color: 'inherit',
            },
        },
    },
};
