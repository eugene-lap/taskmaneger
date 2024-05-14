import { Select } from 'antd';
import './personal-area-progress.scss';
import { useEffect, useState } from 'react';
import { Scale } from '../UI/scale';
import { PersonalAreaScale } from '../personal-area-scale';

type Statistic = {
  timeSpent: number;
  lessons: number;
  examams: number;
  timeSpentPlan: number;
  lessonsPlan: number;
  examamsPlan: number;
};
const stat =  {
  timeSpent: 10,
  lessons: 20,
  examams: 30,
  timeSpentPlan: 5,
  lessonsPlan: 10,
  examamsPlan: 20,
};
export function PersonalAreaProgress() {
  const [statisticData, setStatisticData] = useState<Statistic>(stat);
   
  useEffect(() => {
    setStatisticData(stat);
  }, []);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="personal-area-progress">
      <div className='personal-area-progress__data'>
        <h3>Прогресс задач</h3>
        <PersonalAreaScale></PersonalAreaScale>   
            
      </div>
      <div className='personal-area-progress__aside'>
        <Select
          defaultValue="allTime"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'allTime', label: 'Все время' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
          ]}
        />

        <div className='aside-info'>
          <div>
            <p>Время затраченное</p>
            <span className='aside-info__time'>
              { statisticData.timeSpent + 'h' }
            </span>
            <span className='aside-info__procent'>
              { (statisticData.timeSpent / statisticData.timeSpentPlan * 100) + '%' }
            </span>
          </div>
          <div>
            <p>ыыыыыыыы</p>
            <span className='aside-info__time'>
              { statisticData.lessons + 'h' }
            </span>
            <span className='aside-info__procent'>
              { (statisticData.lessons / statisticData.lessonsPlan * 100) + '%' }
            </span>
          </div>
          <div>
            <p>вввввввв</p>
            <span className='aside-info__time'>
              { statisticData.examams + 'h' }
            </span>
            <span className='aside-info__procent'>
              { (statisticData.examams / statisticData.examamsPlan * 100) + '%' }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}