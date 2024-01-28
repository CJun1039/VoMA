import Populate from "./upload.js";

// To run this file, put a new monthly position csv file under '/to-process'
// Then run the following lines
let p = new Populate();
// p.ingestCSV('[one of the 10 funds].[date].csv');

// Stuff only run once to populate database with existing data
// p._instrumentIngestAllCSV();
// p._fundIngestAllCSV();
// p._positionIngestAllCSV();
// p._pricingIngestAllCSV();