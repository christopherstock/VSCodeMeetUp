
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

        it( 'Basic example addition test"', () =>
        {
            chai.expect( 2 + 2 ).to.equal( 4 );
        });

        it( 'Basic example substraction test"', () =>
        {
            chai.expect( 2 - 2 ).to.equal( 0 );
        });
    });
