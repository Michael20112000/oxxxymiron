import {motion, useScroll, useTransform} from 'framer-motion'
import {useRef} from 'react'

export const Section = ({children, ...props}) => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 2], ['0%', '100%'])

  return <section {...props} ref={ref}>
    <motion.div style={{y: backgroundY}}>
      {children}
    </motion.div>
  </section>
}
