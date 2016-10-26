/**
 * Created by dongmin on 16-10-25.
 */
var _ = require('lodash');

module.exports.getSize = function (size) {
  if (!_.isNumber(size)) return size;

  var baseSize = 1024;
  var arrUnit = ['b', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'DB', 'NB'];
  
  var unitIndex = 0;
  
  do {
    unitIndex++;
    console.log(size);
  } while ((size = parseInt(size / baseSize)) > 1024)


  return size + arrUnit[unitIndex] + ',' + lastS;

};

