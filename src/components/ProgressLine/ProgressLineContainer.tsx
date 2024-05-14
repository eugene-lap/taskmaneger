import { useSelector } from "react-redux"
import { Button } from "../Button"
import { ProgressLine } from "./ProgressLine"
import './progressLine.scss'
import { IStoreState } from "../../types"
import { setTimeDeadline } from "../../util"

export const ProgressLineContainer = () => {

    const task = useSelector((state: IStoreState) => state?.tasks.task)

    return(
        <div className="line-progress">
            <h2 className="line-progress-container__title">Задача выполнена на {task?.progress}%</h2>
            <div className="line-progress-container">
                <ProgressLine width={String(task?.progress)} bgColor='#E26001'/>
                <div className="line-progress-container-blok">
                    <p className="line-progress-container-blok__progress">{task?.progress}%</p>
                </div>
            </div>
            <div className="line-progress-blok">
                    <div className="line-progress-blok__line"></div>
                    <div className="line-progress-blok-container">
                        <Button text={setTimeDeadline(task?.deadline)} fontSize='16' bgColor='#DDACF5' textColor='#64379F' borderRadius='20'/>
                    </div>
                </div>
        </div>
    )
}