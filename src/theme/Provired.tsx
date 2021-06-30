import { FC } from 'react';
import {
    createMuiTheme,
    ThemeProvider as Provider,
} from '@material-ui/core/styles';
import { themeConfig } from './themeConfig';

const theme = createMuiTheme(themeConfig, {
    shape: { sideMenu: 240 },
});

export const ThemeProvider: FC = ({ children }) => {
    return <Provider theme={theme}>{children}</Provider>;
};
