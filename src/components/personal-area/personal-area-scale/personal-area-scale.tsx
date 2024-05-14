import './personal-area-scale.scss';
import { useEffect, useState } from 'react';
import { Scale } from '../UI/scale';


export function PersonalAreaScale() {
  //const [statisticData, setStatisticData] = useState<Statistic>(stat);
   
  // useEffect(() => {
  //   setStatisticData(stat);
  // }, []);
  const data = [100, 50, 20, 40, 10, 80, 90];
  const dataTitle = ['M','T','W','T','F','S','S'];
  

  return (
   <div className='personal-area-scale'>
      <div className='personal-area-scale__numbers'>
        {['05','04','03','02','01','0'].map((data) => 
          <div>{data}</div>
        )}        
      </div>
      {data.map((dataInfo, index) => 
        <div className='personal-area-scale__scale'>
          <Scale height={`${dataInfo}%`}></Scale>
          <div>{dataTitle[index]}</div>
        </div>
        
      )}
    
   </div>
  )
}