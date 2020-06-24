
    import * as React                               from 'react';
    import Layout                                   from 'antd/lib/layout';
    import { Content, MainMenu, MenuItem, Setting } from '../..';
    import { Settings, SettingsContext }            from '../context/Settings';

    /** ****************************************************************************************************************
    *   The react component that represents the entire website.
    *******************************************************************************************************************/
    export const Website :() => JSX.Element = () :JSX.Element =>
    {
        // get settings context
        const settings :Settings = React.useContext( SettingsContext );

        // create new state variable 'menuItem' with setter 'setMenuItem'
        const [
            menuItem,
            setMenuItem,
        ]
        : [MenuItem, React.Dispatch<React.SetStateAction<MenuItem>>]
        = React.useState<MenuItem>( settings.defaultMenuItem );

        return <Layout>

            <MainMenu
                initialItem={ menuItem }
                onChangeMenu={ ( key:MenuItem ) :void => { setMenuItem( key ); } }
            />

            <Layout>

                <Layout.Header
                    className="header"
                >
                    { Setting.TITLE }
                </Layout.Header>

                <Content
                    currentSite={ menuItem }
                />

                <Layout.Footer
                    className="footer"
                >
                    { Setting.COPYRIGHT }
                </Layout.Footer>

            </Layout>

        </Layout>;
    };
