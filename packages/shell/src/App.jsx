import './App.css'

//This is the mife import
import Button from 'shared/Button'

import { supabase } from './supabase'


function App() {

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
