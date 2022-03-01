/* 
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example:
s="12:01PM"
Return '12:01:00'.

s="12:01AM"
Return '00:01:00'. 
*/

function timeConversion(s) {
  let militaryTime;
  const middayTime = s.slice(-2);
  s = s.slice(0, -2);
  const [hour, min, sec] = s.split(':');

  if (middayTime === 'AM' && hour === '12') {
    return (militaryTime = `00:${min}:${sec ? sec : '00'}`);
  }

  if (middayTime === 'AM') militaryTime = `${hour}:${min}:${sec ? sec : '00'}`;

  if (middayTime === 'PM' && hour === '12')
    return (militaryTime = `${hour}:${min}:${sec ? sec : '00'}`);

  if (middayTime === 'PM')
    militaryTime = `${+hour + 12}:${min}:${sec ? sec : '00'}`;

  return militaryTime;
}

// DRIVER CODE
s = '12:01PM';
s2 = '12:01AM';
s3 = '2:01PM';
s4 = '12:45:54PM';

// console.log(timeConversion(s));
// console.log(timeConversion(s2));
// console.log(timeConversion(s3));
console.log(timeConversion(s4));
