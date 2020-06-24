
    import * as chai   from 'chai';
    import * as Enzyme from 'enzyme';
    import * as React from 'react';
    import { Content, ContentProps, MenuItem } from '../../../../../typescript/de/mayflower/chuck';

    describe( 'React component Content', () =>
    {
        const wrapper: Enzyme.ShallowWrapper<ContentProps> = Enzyme.shallow(
            <Content
                currentSite={ MenuItem.ABOUT }
            />
        );

        it( 'create the React component', () =>
        {
            chai.expect( wrapper.length ).to.equal( 1 );
        });

        it( 'assign the property "currentSite"', () =>
        {
            // replace with React Testing Library
/*
            const contentComponent :React.Component<ContentProps> = wrapper.instance() as React.Component<ContentProps>;

            console.log( contentComponent );

            chai.expect( contentComponent.props.currentSite ).to.equal( MenuItem.ABOUT );
*/
        });
    });
