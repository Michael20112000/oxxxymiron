import {useState} from 'react'
import {Section} from '../Section/Section'
import {SectionTitle} from '../Title/Title'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import {Icon} from '../Icon/Icon'
import {getLocaleDateString} from '../../utils/common'
import {Link} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
import {useTrackItems} from '../../hooks/useTrackItems'

export const Tracks = () => {
  const {items = [], isLoading} = useTrackItems()

  const [audio] = useState(new Audio())
  const [playing, setPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

  const handleTrackClick = track => {
    setPlaying(prev => {
      const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true
      audio.src = track.link.url

      !isPlaying ? audio.pause() : audio.play()

      return isPlaying
    })

    setCurrentTrack(track)
  }

  return <Section className="tracks-section">
    <div className="container">
      <SectionTitle text="Релизы"/>
      {
        isLoading ? <Loader/> : (
          <div className="tracks">
            {
              items.map(track => {
                const {cover, title, date, sys: {id}} = track

                return <AnimationOnScroll key={id}
                                        className="track-item"
                                        animateIn="fadeInLeft"
                                        animateOut="fadeOutRight">
                  <div className="track" onClick={() => handleTrackClick(track)}>
                    <div className="track-image">
                      <img src={cover.url} alt={title}/>
                      {
                        !!playing && currentTrack.sys.id === id && <Icon name="pause"/>
                      }
                    </div>
                    <p className="track-date">
                      {getLocaleDateString(date, {month: 'short'})}
                    </p>
                    <h3 className="track-title">
                      {title}
                    </h3>
                  </div>
                </AnimationOnScroll>
              })
            }
          </div>
        )
      }
      <Link to="/tracks" className="button-more">
        Все релизы
      </Link>
    </div>
  </Section>
}
