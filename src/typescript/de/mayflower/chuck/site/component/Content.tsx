
    import Layout                   from 'antd/lib/layout';
    import * as React               from 'react';
    import { MenuItem, RandomJoke } from '../..';

    /** ****************************************************************************************************************
    *   React properties for the Content component.
    *******************************************************************************************************************/
    export interface ContentProps
    {
        /** The current selected content site to display. */
        currentSite: MenuItem;
    }

    /** ****************************************************************************************************************
    *   The react component that represents the content part of the website.
    *
    *   @param props The properties being propagated to this component.
    *   @return The rendered React Component as an JSX Element.
    *******************************************************************************************************************/
    export const Content :( props:ContentProps ) => JSX.Element = ( props:ContentProps ) :JSX.Element =>
    {
        return <Layout.Content
            className="content"
        >

            <div>
                { createContent( props ) }
            </div>

        </Layout.Content>;
    };

    /** ****************************************************************************************************************
    *   Creates the different content part for this Content component.
    *
    *   @param props The properties being propagated to this component.
    *   @return The rendered JSX.
    *******************************************************************************************************************/
    const createContent :( props:ContentProps ) => JSX.Element = ( props:ContentProps ) :JSX.Element =>
    {
        switch ( props.currentSite )
        {
            case MenuItem.RANDOM_JOKE:
            {
                return <RandomJoke />;
            }

            default:
            {
                // TODO WORKSHOP show a Notification that this content is subject to change
                return <div>
                    To be defined ..
                </div>;
            }
        }
    };
