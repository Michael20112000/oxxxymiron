import ScrollAnimation from 'react-animate-on-scroll'

export const SectionTitle = ({text}) => (
  <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
    <h2>{text}</h2>
  </ScrollAnimation>
)
