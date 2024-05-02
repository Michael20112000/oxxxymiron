import {Section} from '../Section/Section'
import {SectionTitle} from '../Title/Title'
import {TourItem} from './TourItem'
import {Link} from 'react-router-dom'
import {sortByDate} from '../../utils/common'
import {Loader} from '../Loader/Loader'
import {useTourItems} from '../../hooks/useTourItems'

export const TourItems = () => {
  const {items = [], isLoading} = useTourItems()

  const filtered = sortByDate(items.filter(({soldOut, ticketLink}) => !soldOut && ticketLink))

  return <Section className="tour">
    <div className="container">
      <SectionTitle text="Концерты"/>
      {isLoading ? <Loader/> : (
        <ul className="tour-list">
          {
            filtered.map((item, i) => (
              <TourItem {...item} i={i} key={item.sys.id}/>
            ))
          }
        </ul>
      )}
      <Link to="/tour" className="button-more">
        Все концерты
      </Link>
    </div>
  </Section>
}
