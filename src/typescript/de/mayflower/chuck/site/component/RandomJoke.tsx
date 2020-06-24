
    import Button                             from 'antd/lib/button';
    import Divider                            from 'antd/lib/divider';
    import List                               from 'antd/lib/List';
    import * as React                         from 'react';
    import { Debug, API, RandomJokeResponse } from '../..';

    /** ****************************************************************************************************************
    *   The react component that represents the RandomJoke main content page.
    *******************************************************************************************************************/
    export const RandomJoke :() => JSX.Element = () :JSX.Element =>
    {
        // use the React State Hook
        const [
            requestInProgress,
            setRequestInProgress,
        ]
        : [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = React.useState<boolean>( false );

        const [
            jokes,
            setJokes,
        ]
        : [RandomJokeResponse[], React.Dispatch<React.SetStateAction<RandomJokeResponse[]>>]
        = React.useState<RandomJokeResponse[]>( [] );

        // use the React Effect Hook
        React.useEffect(
            () => {
                requestRandomJoke();
            },
            []
        );

        // TODO WORKSHOP show a Progress bar with maximum sustainable 'Chuck Norris Jokes per day' count
        return <div>

            <Button
                type="primary"
                onClick={ ( me: React.MouseEvent ) :void => { onClickJokeButton(); } }
                loading={  requestInProgress }
            >
                Request a Random Joke
            </Button>

            <Divider />

            {
                jokes.length > 0
                ? <List
                    dataSource={ jokes }
                    renderItem={

                        // TODO WORKSHOP extract to method .createJokeLine()
                        ( item:RandomJokeResponse, index:number ) :JSX.Element => {

                            const id   :number = ( index + 1 );
                            const fact :string = item.value.joke.replace( /&quot;/g, '"' );

                            return (
                                <List.Item>
                                    { id }: { fact }
                                </List.Item>
                            );
                        }
                    }
                />
                : null
            }

        </div>;

        /** ************************************************************************************************************
        *   Being invoked when the 'Get Random Joke' button is clicked.
        ***************************************************************************************************************/
        function onClickJokeButton() : void
        {
            Debug.major.log( 'Button "Get a Joke" clicked.' );

            requestRandomJoke();
        }

        /** ************************************************************************************************************
        *   Requests a new random joke.
        ***************************************************************************************************************/
        function requestRandomJoke() : void
        {
            Debug.major.log( 'requestRandomJoke() being invoked.' );

            setRequestInProgress( true );

            // submit a new search
            API.getRandomJoke(
                ( data:RandomJokeResponse ) :void => {
                    onRandomJokeResponse( data );
                },
                ( error:Error ) :void => {
                    onRandomJokeError( error );
                }
            );
        }

        /** ************************************************************************************************************
        *   Being invoked when the random joke data has arrived.
        *
        *   @param joke The received random joke data model.
        ***************************************************************************************************************/
        function onRandomJokeResponse( joke:RandomJokeResponse ) : void
        {
            Debug.network.log( 'received random joke:' );
            Debug.network.log( JSON.stringify( joke ) );

            const newJokes:RandomJokeResponse[] = jokes.splice( 0 );
            newJokes.push( joke );

            setJokes(             newJokes );
            setRequestInProgress( false    );
        }

        /** ************************************************************************************************************
        *   Being invoked when the random joke request threw an error.
        *
        *   @param error The error that occurred on requesting the random joke.
        ***************************************************************************************************************/
        function onRandomJokeError( error:Error ) : void
        {
            Debug.network.log( 'requesting random joke threw an error:' );
            Debug.network.log( error.message );

            setRequestInProgress( false );
        }
    };
