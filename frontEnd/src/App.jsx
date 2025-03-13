
import Routing from './pages/Routing'
import UserContext from './pages/UserContext'

function App() {
  

  return (
    <div className=''>
    <UserContext>
    <Routing/>
    </UserContext>
    </div>
  )
}

export default App
