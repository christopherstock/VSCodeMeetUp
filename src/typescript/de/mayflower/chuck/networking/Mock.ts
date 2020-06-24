
    import { RandomJokeResponse } from '..';

    /** ****************************************************************************************************************
    *   Holds mocked response data for offline requests.
    *******************************************************************************************************************/
    export class Mock
    {
        /** ************************************************************************************************************
        *   Returns a mocked response for the route 'jokes/random'.
        *
        *   @return Mocked offline response json data.
        ***************************************************************************************************************/
        public static mockRandomJoke() : RandomJokeResponse
        {
            return {
                type: 'success',
                value: {
                    'id':         1,
                    'joke':       'MOCKED: Time stands still for no man. Except that man is Chuck Norris.',
                    'categories': [],
                },
            };
        }
    }
