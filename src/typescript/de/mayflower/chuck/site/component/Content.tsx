
    import Notification             from 'antd/lib/notification';
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
/*
        // shows an error message on conceptual contents in an React effect hook (each render)
        React.useEffect( () => {
            if ( props.currentSite !== MenuItem.RANDOM_JOKE )
            {
                // show a warning
                Notification.warning( {
                    message: 'Page under construction',
                    description: 'This content is still under development.',
                } );
            }
        } );
*/
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
                return <div>
                    To be defined ..
                </div>;
            }
        }
    };
