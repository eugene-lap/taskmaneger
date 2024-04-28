import { useState } from 'react';
import { ProgressLine } from '../ProgressLine'
import './taskSection.scss'
import { Button } from '../Button';

export const TaskCommand = () => {
    const [number, setNumber] = useState<number | null>(90);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };
    
      const handleAddNumber = () => {
        if (!inputValue.trim()) return;
        const newNumber = parseFloat(inputValue);
        if (!isNaN(newNumber)) {
          setNumber(newNumber);
          setInputValue('');
        }
      };

    return (
        <div className="task-command">
            <div className="task-command-buttons">
            <Button text='Приступить к работе' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
            <Button text='Выйти на обед' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
            <Button text='Продолжить работу' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
            <Button text='Выйти на перерыв' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
            <Button text='Завершить работу' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
            </div>
            <h2 className="task-command__title">Укажите завершенность работы:</h2>
            <ProgressLine width={String(number)} bgColor='red' />
            <p className="task-command__progress">{number}%</p>
            <div className="task-command-container">
                <input type="number" className="task-command-container__input" value={inputValue} onChange={handleInputChange} />
                <button className="task-command-container__button" onClick={handleAddNumber}>Okey</button>
            </div>
        </div>
    )
}