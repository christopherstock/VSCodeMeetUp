
    import * as Enzyme from 'enzyme';
    import * as Adapter from 'enzyme-adapter-react-16';

    /** ****************************************************************************************************************
    *   Initializes the testing framework.
    *******************************************************************************************************************/

    /** Define global 'Image' object in order to prevent compilation errors of the test framework. */
    ( global as any ).Image = [];

    /** Define global 'btoa' function to perform a base64 conversion ( btoa is not present in chai ). */
    ( global as any ).btoa = ( str:string ) : string => {
        // return new Buffer( str ).toString( 'base64' );
        return Buffer.from( str ).toString( 'base64' );
    };

    /** Set the enzyme adapter for jest/React tests */
    Enzyme.configure( { adapter: new Adapter() } );
