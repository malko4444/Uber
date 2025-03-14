
import { CaptainDataProvider } from './pages/CaptainContext'
import Routing from './pages/Routing'
import UserContext from './pages/UserContext'

function App() {
  

  return (
    <div className=''>
      <CaptainDataProvider>
    <UserContext>
    <Routing/>
    </UserContext>
    </CaptainDataProvider>
    </div>
  )
}

export default App
