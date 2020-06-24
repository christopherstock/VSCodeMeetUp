
    /** The Moment.js library import. */
    import moment = require( 'moment' );

    /** ****************************************************************************************************************
    *   Offers extended string functionality.
    *******************************************************************************************************************/
    export class StringUtil
    {
        /** ************************************************************************************************************
        *   Returns a formatted timestamp of the current system date and time.
        *
        *   @return string A formatted timestamp of the current system date and time.
        ***************************************************************************************************************/
        public static getDateTimeString():string
        {
            return new ( moment as any )().format( 'DD.MM.YYYY HH:mm:ss' );
        }
    }
