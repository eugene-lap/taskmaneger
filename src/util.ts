export const tittleCard = (titleStatus: string) => {
    switch(titleStatus){
        case 'all':  return  'Задачи за все время'
        case 'completed': return 'Выполненные задачи'
        case 'current': return 'Задачи на сегодня'
    }
}

export const textCard = (titleStatus: string, role: string)=> {
    switch(titleStatus){
        case 'all': return role === 'USER' ? 'Проверьте свои задачи за все время' : 'Проверьте задачи вашей команды за все время'
        case 'completed': return role === 'USER' ? 'Проверьте свои выполненные задачи' : 'Проверьте выполненные задачи вашей команды'
        case 'current': return role === 'USER' ? 'Проверьте свои задачи на сегодня' : 'Проверьте задачи вашей команды на сегодня '
    }
}

export const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
};

export const getUserName = (name: string, surname: string) => {
    return `${name.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`;
}

export const formatDateTime = (dateTimeString: Date) =>  {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export const setTimeDeadline = (deadline: Date) => {
    const currentDate = new Date();
    const futureDate = new Date(deadline)
if (currentDate > futureDate) {
  return 'Время просрочено';
} else {
  const diffInMillies = (+futureDate -  +currentDate);
  const hours = Math.floor((diffInMillies / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffInMillies / (1000 * 60 * 60 * 24));
  if (days > 0) {
     return `До закрытия задачи ${getDaysText(days)}`
  } else {
    return `До закрытия задачи ${getHoursText(hours)}`
  }
}
}

export const setTimeProgress = (deadline: Date, openingDate: Date) => {
    const currentDate = new Date(openingDate);
    const futureDate = new Date(deadline)
if (currentDate > futureDate) {
  return 'Время просрочено';
} else {
  const diffInMillies = (+futureDate -  +currentDate);
  const hours = Math.floor((diffInMillies / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffInMillies / (1000 * 60 * 60 * 24));
  if (days > 0) {
     return getDaysText(days)
  } else {
    return getHoursText(hours)
  }
}
}

export const setTimeIsProgress = (openingDate: Date) => {
    const currentDate = new Date(openingDate);
    const futureDate = new Date()

  const diffInMillies = (+futureDate -  +currentDate);
  const hours = Math.floor((diffInMillies / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffInMillies / (1000 * 60 * 60 * 24));
  if (days > 0) {
     return getDaysText(days)
  } else {
    return getHoursText(hours)
  }
}

export const  getDaysText = (number: number) =>  {
  if (number % 10 === 1 && !String(number).endsWith("11")) {
      return ` ${number} день`;
  } else if (number % 10 >= 2 && number % 10 <= 4 && !(String(number).endsWith("12") || String(number).endsWith("13") || String(number).endsWith("14"))) {
      return  ` ${number} дня`;
  } else {
      return ` ${number} дней`;
  }
}

export const  getHoursText = (number: number) => {
  if (number % 10 === 1 && number !== 11) {
      return ` ${number} час`;
  } else if (number % 10 >= 2 && number % 10 <= 4 && !(String(number).endsWith("12") || String(number).endsWith("13") || String(number).endsWith("14"))) {
      return ` ${number} часа`;
  } else {
      return ` ${number} часов`;
  }
}

