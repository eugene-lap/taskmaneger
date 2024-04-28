import { Button } from "../Button"
import { ProgressLine } from "./ProgressLine"
import './progressLine.scss'

export const ProgressLineContainer = () => {
    return(
        <div className="line-progress">
            <h2 className="line-progress-container__title">Задача выполнена на 90%</h2>
            <div className="line-progress-container">
                <ProgressLine width='90' bgColor='#E26001'/>
                <div className="line-progress-container-blok">
                    <p className="line-progress-container-blok__progress">90%</p>
                </div>
            </div>
            <div className="line-progress-blok">
                    <div className="line-progress-blok__line"></div>
                    <div className="line-progress-blok-container">
                        <Button text='До закрытия задачи 17 часов' fontSize='16' bgColor='#DDACF5' textColor='#64379F' borderRadius='20'/>
                    </div>
                </div>
        </div>
    )
}