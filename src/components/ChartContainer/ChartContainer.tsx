import { Chart } from '../Chart/Chart'
import './chartContainer.scss'
export const ChartContainer = () => {
    return (
        <div className="chart-container">
            <p className="chart-container__text">Выполнено</p>
            <Chart width={503} height={158}/>
        </div>
    )
}