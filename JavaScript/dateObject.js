const d = new Date();
console.log(d.toDateString());
console.log(d.toString);

console.log(typeof(d));

//calculated from 1 Jan 1970
console.log(new Date(100000));

console.log(d.getDate());
console.log(d.getDay()); // 0 - Sun
console.log(d.getMonth());// 0 - Jan

const myd = new Date("2006-02-05"); // Here 1-indexing in months for strings //year-month-dateT00:00:00   time can be specified too
console.log(myd.toDateString());

//year, month(0 based indexing), day, hour, minute, second, millisecond
const myd2 = new Date(2024, 1, 20);
console.log(myd2.toString());

//Date Calculation
const date1 = new Date();
const date2 = new Date("2025-02-05");

//difference is in ms
console.log(date2-date1);
console.log(date2>date1);
console.log(date2<date1);

//CountDown Timer
//Days - Hours - Minutes - Seconds for Olympics

const neeDate = new Date();
const olympic = new Date("2028-07-14T00:00:00");

const diff = olympic - neeDate;

//1000 - converted to sec
//60 - converted to min
//60 - converted to hours
//24 - converted to days

const days = Math.floor(diff/(1000*60*60*24));
console.log("Days", Math.floor(days))

const hours = Math.floor(diff/(1000*60*60)%24);
console.log("Hours", Math.floor(hours))

const minutes = Math.floor(diff/(1000*60)%(60));
console.log("Minutes", Math.floor(hours))

const seconds = Math.floor(diff/(1000*60)%(60));
console.log("Seconds", Math.floor(seconds))

console.log(`Olympics Countdown days - ${days}, hours - ${hours}, minutes - ${minutes}, seconds - ${seconds}`);