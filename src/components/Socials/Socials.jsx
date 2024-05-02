import {SOCIALS} from '../../utils/constants'
import {Icon} from '../Icon/Icon'

export const Socials = ({...rest}) => (
  <ul className="socials">
    {SOCIALS.map(({icon, link}) => (
      <li title={icon} className="socials-item" key={icon}>
        <a href={link} target="_blank" rel="noreferrer">
          <Icon name={icon} {...rest}/>
        </a>
      </li>
    ))}
  </ul>
)
