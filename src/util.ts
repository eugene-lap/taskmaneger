export const tittleCard = (titleStatus: string) => {
    switch(titleStatus){
        case 'all':  return 'Задачи за все время'
        case 'completed': return 'Выполненные задачи'
        case 'current': return 'Задачи на сегодня'
    }
}

export const textCard = (titleStatus: string)=> {
    switch(titleStatus){
        case 'all': return 'Проверти свои задачи за все время'
        case 'completed': return 'Проверти свои выполненные задачи'
        case 'current': return 'Проверти свои задачи на сегодня'
    }
}

export const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
};
