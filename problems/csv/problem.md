# CSV

You can take a stream of CSV data and convert it to LDJSON on the fly, since
CSV is a streaming friendly format.

The **csv-parser** command line module is great at this, and by default will
convert CSV data into LDJSON.

Read about how it works at: **npmjs.org/csv-parser**.

To install it run **npm install --save csv-parser**. This will add csv-parser
to your package.json's dependencies field.

**Note**: you don't have to use **-g**. gasket is smart enough to find
commands inside the node_modules directory.

Raw CSV data will be automatically piped into your gasket process.

**To pass this challenge:**

Create a **package.json** file with a **"gasket"** section that first converts
the CSV data into LDJSON, and then prints out the **name** property of each
JSON object

Use the command **data-plumber verify package.json** to verify.

Use the command **data-plumber run package.json** to see the raw gasket output.

**Hint**: use jsonfilter again for this challenge in addition to csv-parser
