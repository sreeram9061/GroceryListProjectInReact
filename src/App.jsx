import './styles/index.scss'
import Header from './componets/Header'
import Calculatorcard from './componets/Calculatorcard'
import GroccerycontextCo from './context/Groccerycontext'
import Shopinglist from './componets/Shopinglist'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <GroccerycontextCo>
          <Header/>
          <Routes>
            <Route path="/" element={<Calculatorcard />} />
             <Route path="/shopinglist" element={<Shopinglist />} />
          </Routes>
      </GroccerycontextCo>

    </div>
  )
}

export default App
