import data from '../data.json'


let now = new Date();

export const getCurrentDate = () => {
  return `Hoje - ${now.getDate()} do ${now.getMonth() + 1} de ${now.getFullYear()} - ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`
}

export const [year, month] = data.created_at.split('-')
export const getYearDifference = () => {
  let now = new Date();
  Number(year, month)
  return `Tempo na closeer ${now.getFullYear() - year}.${(now.getMonth() + 1) - month} anos`
}
