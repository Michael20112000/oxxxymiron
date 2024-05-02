import {AnimationOnScroll} from 'react-animation-on-scroll'

export const SectionTitle = ({text}) => (
  <AnimationOnScroll animateIn="fadeInLeft" animateOut="fadeOutLeft">
    <h2>{text}</h2>
  </AnimationOnScroll>
)
