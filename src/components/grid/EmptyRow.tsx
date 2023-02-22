import { solution } from '../../lib/words'
import { Cell } from './Cell'
type Props = {
  gridGray?: boolean;
};
export const EmptyRow = ({
  gridGray,
}: Props) => {
  const emptyCells = Array.from(Array(solution.length))

  return (
    <div className="mb-1 flex justify-center ">
      {emptyCells.map((_, i) => (
        <Cell key={i} gridGray={gridGray} />
      ))}
    </div>
  )
}
