import { ClockIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import Countdown from 'react-countdown'

import {
  DATE_LOCALE,
  ENABLE_ARCHIVED_GAMES,
} from '../../constants/settings'
import {
  NEW_WORD_TEXT,
  STATISTICS_TITLE,
} from '../../constants/strings'
import { GameStats } from '../../lib/localStorage'
import { solutionGameDate } from '../../lib/words'
import { StatBar } from '../stats/StatBar'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isLatestGame: boolean
  isGameLost: boolean
  isGameWon: boolean
  isDarkMode: boolean
  numberOfGuessesMade: number
  countDowner:number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isLatestGame,
  isGameLost,
  isGameWon,
  isDarkMode,
  numberOfGuessesMade,
  countDowner
}: Props) => {
  console.log(countDowner);
  
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
        
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      
      {(isGameLost || isGameWon) && (
        <div className="mt-5 pt-5 items-center items-stretch justify-center text-center dark:text-white sm:mt-6">
          <div className="inline-block w-full text-center">
            {(!ENABLE_ARCHIVED_GAMES || isLatestGame) && (
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={Date.now() + countDowner}
            />
          </div>
            )}
            {ENABLE_ARCHIVED_GAMES && !isLatestGame && (
              <div className="mt-2 mb-5 text-center ">
                <ClockIcon className="mr-1 mt-2 mt-1 h-5 w-5 stroke-black dark:stroke-white" />
                <div className="mt-1 ml-1 text-center text-sm sm:text-base">
                  {format(solutionGameDate, 'd MMMM yyyy', {
                    locale: DATE_LOCALE,
                  })}
                </div>
              </div>
            )}
          </div>
         
          <button className="px-16 mt-20 text-xl text-white font-bold rounded-md border bg-green-500  hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-1  focus:ring-offset-2" onClick={handleClose}>¡JUGAR!</button>
        </div>

      )}
      
    </BaseModal>
  )
}
