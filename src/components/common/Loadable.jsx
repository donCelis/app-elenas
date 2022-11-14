import { Suspense } from 'react'
import LoadingModal from './Modal'

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingModal size='large' />}>
      <Component {...props} />
    </Suspense>
  )
}

export default Loadable
