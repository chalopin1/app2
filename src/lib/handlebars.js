// const timeago = require('timeago.js');
// const timeagoInstance = timeago();

// const helpers = {};

// helpers.timeago = (savedTimestamp) => {
//     return timeagoInstance.format(savedTimestamp);
// };

// module.exports = helpers;


const {format} = require('timeago.js');
const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return format(savedTimestamp);
};

module.exports = helpers;