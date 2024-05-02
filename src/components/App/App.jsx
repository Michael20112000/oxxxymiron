import {AppRoutes} from './AppRoutes'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import '../../styles/index.scss'

export const App = () => (
  <div className="app">
    <Header/>
    <AppRoutes/>
    <Footer/>
  </div>
)
