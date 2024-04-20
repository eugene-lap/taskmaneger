import './progressLine.scss'
export const ProgressLine = ({width, bgColor} : {width: string, bgColor: string}) => {
    return(
        <div className="progress-line">
            <div className="progress-line__completed"
            style={{
                width: `${width}%`,
                background: `${bgColor}`
              }}></div>
        </div>
    )
}