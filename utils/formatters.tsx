 export const setFormatAmout = (amount:any) =>{
   return amount.toLocaleString(undefined, { 
  minimumFractionDigits: 2, 
  maximumFractionDigits: 2 
})}