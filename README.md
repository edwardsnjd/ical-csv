ical-csv
========

Simple CLI app to export a CSV feed of (optionally filtered) events from an iCal feed.

Usage
=====

```
> node index.js --help
```

Examples
========

Get all events from NASA calendar (aliased as NPM script `example-nasa`):

```
> node index.js https://www.nasa.gov/templateimages/redesign/calendar/iCal/nasa_calendar.ics
```

Get all events from NASA calendar with 'discovery' in the title (aliased as NPM script `example-nasa-discovery`):

```
> node index.js -f discovery https://www.nasa.gov/templateimages/redesign/calendar/iCal/nasa_calendar.ics
```
