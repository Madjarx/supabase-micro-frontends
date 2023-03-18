import './App.css'

//This is the mife import
import Button from 'shared/Button'

import { supabase } from './supabase'


function App() {

  /*
  * I hard-coded credentials just to show the Proof of Concept:
  * "Supabase session is shared across the micro-frontends"
  *
  * I also believe in as simple as possible POCs so i avoided implementing
  * auth logic since i believe this is sufficient for explanation
  */
  const handleLogin = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'password'
    })
  }

  return (
    <div className="App">
      <div>This is the Shell app</div>
      <hr />
      <div>This is the Remote import</div>
      <hr />
      <button onClick={handleLogin}>Click me to login</button>
      <hr />
      <Button></Button>
    </div>
  )
}

export default App
