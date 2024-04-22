import { Select } from "antd";

import './personal-area-data.scss';
import { StatisticItem } from "../statistic-item";
import { useState } from "react";

const _statisticsItems = [
  {
    icon:'/svg/time-icon.svg', 
    title:'Отработанных часов', 
    info:'54 часов'
  },
  {
    icon:'/svg/task-icon.svg', 
    title:'Выполненных задач', 
    info:'10'
  },
  {
    icon:'/svg/develop-task-icon.svg', 
    title:'Задач в обработке', 
    info:'2'
  },
  {
    icon:'/svg/time-up-icon.svg', 
    title:'Переработанных часов', 
    info:'20 часов 12 минут'
  },
  {
    icon:'/svg/lateness-icon.svg', 
    title:'Опоздания', 
    info:'20 часов 12 минут'
  },
]

export function PersonalAreaData() {
  const [statisticsItems, setstatisticsItems] = useState(_statisticsItems);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="personal-area-data">
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
      { statisticsItems.map((item) => (
        <StatisticItem {...item}></StatisticItem>
      )) }
      
    </div>
  )
}