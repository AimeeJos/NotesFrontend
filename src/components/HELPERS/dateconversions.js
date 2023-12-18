export default function date_convertion(inputDateString){
const date = new Date(inputDateString);
const day = date.getUTCDate();
const month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
const year = date.getUTCFullYear();
const formattedDate = `${day}/${month}/${year}`;
// console.log(formattedDate); // Output: 16/12/2023
return formattedDate
}