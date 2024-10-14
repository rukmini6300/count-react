
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='pt-10 flex'>
        <button 
          aria-label="Increment value"
         onClick={() => dispatch(increment())}
         className='border-4 px-5 py-4 border-purple-500 mr-10'
        >
          Increment
        </button>
        <span className='text-3xl font-bold text-red-500'>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className='border-4 px-5 py-4 border-purple-500 ml-10' 
        >
          Decrement
        </button>
      </div>
    </div>
  )
}