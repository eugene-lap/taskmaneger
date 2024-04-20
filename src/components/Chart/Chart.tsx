import './Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea } from 'recharts';

const data = [
  { name: 'Пн', Выполнено: 12 },
  { name: 'Вт', Выполнено: 8 },
  { name: 'Ср', Выполнено: 15 },
  { name: 'Чт', Выполнено: 10 },
  { name: 'Пт', Выполнено: 5 },
  { name: 'Сб', Выполнено: 4 },
  { name: 'Вс', Выполнено: 9 },
];

export const Chart = ({width, height} : {width: number, height: number}) => (
  <LineChart className='charts' width={width} height={height} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="Выполнено" stroke="#64379F" strokeWidth={1.59} dot={true}>
    </Line>
  </LineChart>
);
