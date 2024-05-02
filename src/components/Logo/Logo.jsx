import logo from '../../images/logo.webp'
import {Link} from 'react-router-dom'

export const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} alt="Logotype"/>
    </Link>
  </div>
)
