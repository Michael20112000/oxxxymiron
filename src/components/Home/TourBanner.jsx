import {Section} from '../Section/Section'
import video from '../../images/oxxxytour.mp4'

export const TourBanner = () => {
  return <Section className="tour-banner">
    <div className="container">
      <video loop muted autoPlay>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  </Section>
}
