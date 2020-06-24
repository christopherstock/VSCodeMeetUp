
    import { Setting, StringUtil } from '..';

    /** ****************************************************************************************************************
    *   Represents a debug group whose logging can be enabled or disabled.
    *******************************************************************************************************************/
    export class Debug
    {
        /** Major debug output. */
        public      static              major           :Debug              = new Debug( true  );
        /** Debugs lifecycle methods of React components. */
        public      static              react           :Debug              = new Debug( true  );
        /** Debugs network API requests. */
        public      static              network         :Debug              = new Debug( true  );

        /** The flag that enables or disables logging for this debug group. */
        private             readonly    debugEnabled    :boolean            = false;

        /** ************************************************************************************************************
        *   Constructs a new debug group.
        *
        *   @param  debugEnabled    Flags if this debug group should log messages.
        ***************************************************************************************************************/
        public constructor( debugEnabled:boolean )
        {
            this.debugEnabled = debugEnabled;
        }

        /** ************************************************************************************************************
        *   Logs a line of output to the default console. This method will only generate output
        *   if the debug flag for this debug group is enabled.
        *
        *   @param msg The message to log to the default console.
        ***************************************************************************************************************/
        public log( msg:string = '' ):void
        {
            if ( Setting.DEBUG_MODE && this.debugEnabled )
            {
                const lineToLog:string = ( '[' + StringUtil.getDateTimeString() + '] ' + msg );

                // eslint-disable-next-line no-console
                console.log( lineToLog );
            }
        }
    }
