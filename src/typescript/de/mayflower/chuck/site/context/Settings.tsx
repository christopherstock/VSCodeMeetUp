
    import * as React from 'react';
    import { MenuItem } from '../MenuItem';

    export interface Settings
    {
        defaultMenuItem :MenuItem;
    }

    export const SettingsContext :React.Context<Settings> = React.createContext<Settings>(
        {
            defaultMenuItem: null,
        }
    );
