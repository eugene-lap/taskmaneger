import { useSelector } from 'react-redux'
import './reportCard.scss'
import { IStoreState } from '../../types'
import { useEffect } from 'react'

export const ReportCard = () => {
    const width = useSelector((state: IStoreState) => state.ui.widthBlock)
    const setBlockWidth =() => {
        const widthBlock = width / 4.4
        return widthBlock
    }
    useEffect(()=>{
    }, [width])
    return(
        <div className="report-card">
            <img src="https://proprikol.ru/wp-content/uploads/2020/06/kartinki-zajchiki-8.jpg" alt="" className="report-card__img" 
            style={{
                width: `${setBlockWidth()}px`,
            }}
            />
            <h4 className="report-card__date">31.12.2024</h4>
            <p className="report-card__text">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</p>
        </div>
    )
}