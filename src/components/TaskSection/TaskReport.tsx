import { useEffect, useRef } from 'react';
import { ReportCard } from '../ReportCard'
import './taskSection.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getImagesTask, setWidthBlock } from '../../redux/action-creators';
import { IStoreState } from '../../types';
import { formatDateTime } from '../../util';

export const TaskReport = () => {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch()
    const taskImage = useSelector((state: IStoreState) => state.tasks.imagesTask)
    const taskId = useSelector((state: IStoreState) => state.tasks.task.id)
    useEffect(() => {
        if (blockRef.current) {
          const width = blockRef.current.offsetWidth;
          dispatch(setWidthBlock(width))
          dispatch(getImagesTask(taskId))
        }
      }, []);
    return (
        <div className="task-report" ref={blockRef}>
            <h2 className="task-report__title">Отчетность за проделанную работу:</h2>
            <div className="task-report-container">
              {taskImage?.map(el => <ReportCard img={el.urlImgs} date={formatDateTime(el.timeAdd)} text={el.textImgs}/>)}
            </div>
        </div>
    )
}