export const strCapitalize = (str: string) =>{
  if(!str) return str
  return `${str.toUpperCase()[0] || ''}${str.toLowerCase().substring(1)}` 
}



export const ucWords = (str: string) =>
  str
    .trim()
    .toLowerCase()
    .split(' ')
    .map((s) => {
      // if (str.split(' ').includes(s)) return s;
      return strCapitalize(s);
    }).join(' ');
