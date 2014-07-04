# XLS

Excel files come in two flavors, XLS (older) and XLSX (newer). 

Miraculously someone has written a parser for both formats in pure JS!

The project is called [SheetJS](https://github.com/sheetjs) and there is a
module called **excel-stream** that wraps SheetJS in a command line API.

Check out the **excel-stream** readme for usage details: npmjs.org/excel-stream

An XLS file containing 311 complaints from the City of Oakland will get piped
into your gasket pipeline.

**To pass this challenge:**

Create a **package.json** file with a **"gasket"** section that converts the
XLS to JSON and then filters out the **DESCRIPTION** field of each item in the
data and prints them one per line.

Use the command **data-plumber verify package.json** to verify.

Use the command **data-plumber run package.json** to see the raw gasket output.

**HINT:** make sure to use the newline delimited JSON mode of excel-stream
