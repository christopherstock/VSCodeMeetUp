
    import { Debug, MenuItem, Setting, Website } from '..';
    import * as React                  from 'react';
    import { render }                  from 'react-dom';
    import { SettingsContext } from '../site/context/Settings';

    /** ****************************************************************************************************************
    *   The main class contains the application's point of entry.
    *
    *   TODO useEffect: https://overreacted.io/a-complete-guide-to-useeffect/
    *   TODO tests: https://testing-library.com/docs/react-testing-library/intro
    *
    *   TODO React Context.
    *******************************************************************************************************************/
    export class Main
    {
        /** ************************************************************************************************************
        *   This method is invoked when the application starts.
        ***************************************************************************************************************/
        public static main() : void
        {
            // set website title
            document.title = Setting.TITLE;

            // acclaim debug console
            Debug.major.log( Setting.TITLE + ', ' + Setting.COPYRIGHT );
            Debug.major.log();

            // add container div
            const websiteContainer:HTMLDivElement = document.createElement( 'div' );
            document.body.appendChild( websiteContainer );

            // create and mount React component 'Website' into container div
            const websiteComponent:JSX.Element = (
                <SettingsContext.Provider value={
                    {
                        defaultMenuItem: MenuItem.RANDOM_JOKE,
                    }
                }>
                    <Website />
                </SettingsContext.Provider>
            );

            render(
                websiteComponent,
                websiteContainer
            );
        }
    }
