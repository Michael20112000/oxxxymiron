import {Icon} from '../Icon/Icon'
import {useState} from 'react'

export const FooterForm = () => {
  const [state, setState] = useState('')

  const handleChange = ({target: {value}}) => {
    setState(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setState('')
  }

  return <form className="footer-form" onSubmit={handleSubmit}>
    <p>some text</p>
    <div className="footer-form__email">
      <input onChange={handleChange} value={state} type="email" name="email" placeholder="Email"/>
    </div>
    <button type="submit" className="footer-form__button">
      <span>Submit</span>
      <Icon name="arrow-right"/>
    </button>
  </form>
}
