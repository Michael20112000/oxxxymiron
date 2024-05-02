import {useTourItems} from '../../hooks/useTourItems'
import {PageTitle} from '../Title/PageTitle'
import {Loader} from '../Loader/Loader'
import {useCallback, useEffect, useMemo, useState} from 'react'
import {TourItem} from './TourItem'

export const TourPage = () => {
  const {items = [], isLoading} = useTourItems()
  const [activeTab, setActiveTab] = useState(null)
  const [filtered, setFiltered] = useState([])
  const tabs = useMemo(() => [...new Set(items.map(({country}) => country))], [items])

  const toggleTab = useCallback((tab) => {
    setActiveTab(tab)
    setFiltered(items.filter(({country}) => country === tab))
  }, [items])

  useEffect(() => {
    if (tabs.length && !activeTab) toggleTab(tabs[0])
  }, [activeTab, toggleTab, tabs])

  return <section className="tour-page page">
    <div className="container">
      <PageTitle text="All tours"/>
      {isLoading ? <Loader/> : (
        <>
          <ul className="tour-tabs">
            {
              tabs.map(tab => (
                <li onClick={() => toggleTab(tab)} key={tab}
                    className={`tour-tab ${activeTab === tab ? 'active' : ''}`}>
                  {tab}
                </li>
              ))
            }
          </ul>
          <ul className="tour-items">
            {
              filtered.map((item, index) => (
                <TourItem offset={100} key={item.sys.id} {...item} i={index}/>
              ))
            }
          </ul>
        </>
      )}
    </div>
  </section>
}
