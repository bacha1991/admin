import { FC } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewListIcon from '@material-ui/icons/ViewList';
import AppsIcon from '@material-ui/icons/Apps';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { SectionIconsEnum } from '../types';

export const SectionIcons: FC<{ type: SectionIconsEnum }> = ({ type }) => {
    let Icon = ViewListIcon;

    switch (type) {
        case SectionIconsEnum.app:
            Icon = AppsIcon;
            break;
        case SectionIconsEnum.logout:
            Icon = PowerSettingsNewIcon;
            break;
    }

    return (
        <ListItemIcon>
            <Icon />
        </ListItemIcon>
    );
};
