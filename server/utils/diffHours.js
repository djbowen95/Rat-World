function diff_hours(date) 
 {

  let diff =(date.getTime() - Date.now()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

date = new Date("May 31, 2022 11:49:00");
console.log(diff_hours(date));

module.exports = diffHours;