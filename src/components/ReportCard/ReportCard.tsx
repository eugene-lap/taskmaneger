import { useSelector } from 'react-redux'
import './reportCard.scss'
import { IStoreState } from '../../types'
import { useEffect } from 'react'
import { url } from 'inspector'

export const ReportCard = ({img, date, text} : {img: string, date: string, text: string}) => {
    const width = useSelector((state: IStoreState) => state.ui.widthBlock)
    const setBlockWidth =() => {
        const widthBlock = width / 4.4
        return widthBlock
    }
    useEffect(()=>{
    }, [width])
    return(
        <div className="report-card">
            <img src={img} alt="" className="report-card__img" 
            style={{
                width: `${setBlockWidth()}px`,
                height: `${setBlockWidth()}px`,
            }}
            />
            <h4 className="report-card__date">{date}</h4>
            <p className="report-card__text">{text}</p>
        </div>
    )
}