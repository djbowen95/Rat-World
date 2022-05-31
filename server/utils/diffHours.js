function diff_hours(dt2) 
 {

  let diff =(dt2.getTime() - Date.now()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt2 = new Date("May 31, 2022 11:49:00");
console.log(diff_hours(dt2));

module.exports = diffHours;