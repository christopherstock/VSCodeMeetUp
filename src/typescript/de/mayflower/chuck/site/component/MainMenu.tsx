
    import * as React                   from 'react';
    import Icon                         from 'antd/lib/icon';
    import Layout                       from 'antd/lib/layout';
    import Menu                         from 'antd/lib/menu';
    import { SelectParam }              from 'antd/lib/menu';
    import { MenuItem, Setting } from '../..';

    /** ****************************************************************************************************************
    *   React properties for the MainMenu component.
    *******************************************************************************************************************/
    interface MenuProps
    {
        /** The intial set menu item. */
        initialItem: MenuItem;

        /** Being invoked when the selected menu item changes. */
        onChangeMenu: ( key:MenuItem ) => void;
    }

    /** ****************************************************************************************************************
    *   The react component that represents the site menu.
    *******************************************************************************************************************/
    export const MainMenu : ( props:MenuProps ) => JSX.Element = ( props:MenuProps ) :JSX.Element =>
    {
        return <Layout.Sider
                breakpoint="lg"
                collapsedWidth="0"
                theme="dark"
                className="sider"
            >

            <img
                src={ Setting.PATH_IMAGE + 'logo.png' }
                alt={ Setting.TITLE }
                className="logo"
            />

            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={ [ props.initialItem ] }
                onSelect={
                    ( param:SelectParam ) :void => {
                        props.onChangeMenu( param.key as MenuItem );
                    }
                }
            >

                <Menu.Item key={ MenuItem.RANDOM_JOKE }>
                    <Icon type="user" />
                    <span>{ MenuItem.RANDOM_JOKE }</span>
                </Menu.Item>

                <Menu.Item key={ MenuItem.DOWNLOAD }>
                    <Icon type="video-camera" />
                    <span>{ MenuItem.DOWNLOAD }</span>
                </Menu.Item>

                <Menu.Item key={ MenuItem.ABOUT }>
                    <Icon type="upload" />
                    <span>{ MenuItem.ABOUT }</span>
                </Menu.Item>

                <Menu.Item key={ MenuItem.GO_PREMIUM }>
                    <Icon type="user" />
                    <span>{ MenuItem.GO_PREMIUM }</span>
                </Menu.Item>

                <Menu.SubMenu
                    key={ MenuItem.EXTENDED }
                    title={
                    <span>
                    <Icon type="appstore" />
                    <span>{ MenuItem.EXTENDED }</span>
                    </span>
                }>

                    <Menu.Item key={ MenuItem.LEGAL   }>{ MenuItem.LEGAL   }</Menu.Item>

                    <Menu.Item key={ MenuItem.IMPRINT }>{ MenuItem.IMPRINT }</Menu.Item>

                </Menu.SubMenu>

            </Menu>

        </Layout.Sider>;
    };
