import { useEffect, useRef } from 'react';
import { ReportCard } from '../ReportCard'
import './taskSection.scss'
import { useDispatch } from 'react-redux';
import { setWidthBlock } from '../../redux/action-creators';

export const TaskReport = () => {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch()
    useEffect(() => {
        if (blockRef.current) {
          const width = blockRef.current.offsetWidth;
          dispatch(setWidthBlock(width))
        }
      }, []);
    return (
        <div className="task-report" ref={blockRef}>
            <h2 className="task-report__title">Отчетность за проделанную работу:</h2>
            <div className="task-report-container">
            <ReportCard/>
            <ReportCard/>
            <ReportCard/>
            <ReportCard/>
            <ReportCard/>
            <ReportCard/>
            <ReportCard/>
            </div>
        </div>
    )
}