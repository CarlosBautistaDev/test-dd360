import classnames from 'classnames'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
  gridGray?:boolean
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  gridGray,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-semibold  rounded ' ,
    
    {
      'bg-white dark:bg-slate-500 border-slate-200 dark:border-slate-500':
        !status ,
      'border-slate-500': value && !status  ,
      'absent  bg-slate-400 dark:bg-slate-700  border-slate-400 dark:border-slate-700':
        status === 'absent' || gridGray,
      'correct  bg-orange-500  border-orange-500':
        status === 'correct' && isHighContrast,
      'present  bg-cyan-500  border-cyan-500':
        status === 'present' && isHighContrast,
      'correct  bg-green-500  border-green-500':
        status === 'correct' && !isHighContrast,
      'present  bg-yellow-500  border-yellow-500':
        status === 'present' && !isHighContrast ,
      'cell-fill-animation': isFilled ,
      'cell-reveal': shouldReveal,
      'text-white': gridGray ,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
