import { StatisticItemType } from '../../../types';
import './statistic-item.scss';

export function StatisticItem(item: StatisticItemType) {

  return (
    <div className='statistic-item'>
      <div className='statistic-item-icon'>
        <img src={item.icon} alt="icon" />
      </div>
      <div className='statistic-item-text'>
        <div className='statistic-item-text__title'>
          {item.title}
        </div>
        <div className='statistic-item-text__info'>
          {item.info}
        </div>
      </div>
    </div>    
  )
}