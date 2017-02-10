const program = require('commander');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));
const getCalendarCsv = require('./getCalendarCsv');

program
    .version(pkg.version)
    .usage('[options] <url>')
    .option('-q --query [regex]', 'Optional regex for events\' summaries')
    .parse(process.argv);

if (program.args.length !== 1) {
    program.help();
} else {
    const calendarUrl = program.args[0];
    const summaryQuery = program.query;
    getCalendarCsv(calendarUrl, summaryQuery).then(console.log);
}
