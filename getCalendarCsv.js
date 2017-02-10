const {map,filter} = require('lodash/fp');
const {getCalendar,filters,transforms} = require('ical-utils');
const thenify = require('thenify');
const csvify = thenify(require('csv-stringify'));

const getFilter = (query) =>
    query ?
        filters.summaryMatchesRegex(new RegExp(query, 'i')) :
        () => true;

const getCalendarCsv = (calendarUrl, query) =>
    getCalendar(calendarUrl)
        .then(filter(getFilter(query)))
        .then(map(transforms.selectSummary))
        .then(map(transforms.addDurationInHours))
        .then(map(transforms.datesToFormat('YYYY-MM-DD HH:MM', 'start', 'end')))
        .then((records) => csvify(records, {header:true}));

module.exports = getCalendarCsv;