import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getNewsItems} from '../reducers/newsReducer'

export const useNewsItems = () => {
  const dispatch = useDispatch()
  const {items = [], isLoading} = useSelector(({news}) => news)

  useEffect(() => {
    !items.length && dispatch(getNewsItems())
  }, [items, dispatch])

  return {items, isLoading}
}
