
    /** ****************************************************************************************************************
    *   The response model for the route 'search/groups'.
    *******************************************************************************************************************/
    export interface RandomJokeResponse
    {
        /** The response type - success or error. */
        type:  string;
        /** The value body that contains the joke. */
        value: {
            /** The ID of the joke. */
            id:         number,
            /** The joke in prosa. */
            joke:       string,
            /** All categories this joke is assigned to. */
            categories: string[],
        }
    }
