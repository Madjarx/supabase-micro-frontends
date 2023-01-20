// I should be the one to display the current session

import { supabase } from "../supabase";


export default function Button() {

    // This is one way to do it but you get a plain string
    const getSessionHandler = async () => {
        let sessionObject = localStorage.getItem('sb-206-auth-token');
        console.log(sessionObject);
    }

    // The other way is to do it as god intended, so heres a bit of supabase magic
    // By the way biiiig security issues but do we care?
    const getSessionHandlerNonHacky = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        console.log(user);
    }

    return (
        <>
            <div>Button Component (not a button haha!)</div>
            <hr />
            <button onClick={getSessionHandlerNonHacky}>Click me to console log the session!!!</button>
        </>
    )
}