'use strict';

/**
  * startTime: xxxx-xx-xx
  * endTime: xxxx/xx/xx or ''
  * diffType: 'second' or 'minute' or 'hour' or 'day'
  */

function GetDateDiff(startTime, endTime, diffType) {
  //xxxx-xx-xx transform to xxxx/xx/xx
  startTime = startTime.replace(/\-/g, "/");
  endTime = endTime?endTime.replace(/\-/g, "/"):"";
  //to lowerCase
  diffType = diffType?diffType.toLowerCase():"";
  var sTime = new Date(startTime);      //start time
  var eTime;
  if(endTime === ''){
    eTime = new Date();  //if endTime id '' end time , new a endTime as now
  }else{
    eTime = new Date(endTime);  // endTime
  }
  var divNum = 1;
  switch (diffType) {
    case "second":
      divNum = 1000;
      break;
    case "minute":
      divNum = 1000 * 60;
      break;
    case "hour":
      divNum = 1000 * 3600;
      break;
    case "day":
      divNum = 1000 * 3600 * 24;
      break;
    default:
      divNum = 1000 * 3600 * 24;
      break;
  }
  return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
}

module.exports = GetDateDiff;
