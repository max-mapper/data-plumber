# Line Delimited JSON

Line Delimited JSON (abbreviated as LDJSON or sometimes NDJSON for "Line"
or "Newline") is simply a plain text format where you have one piece of
JSON encoded data per line, e.g.:

{"foo": "bar"}
{"foo": "bar"}
{"foo": "bar"}

The **jku** command line module is really handy for processing LDJSON data.

Read about how it works at: npmjs.org/jku

To install it run **npm install --save jku**. This will add jku to your
package.json's dependencies field. **Note**: you don't have to use **-g**
anymore. gasket is smart enough to find commands inside the node_modules
directory.

**Hint**: use the 'transform' option of jku for this challenge

Use the command **data-plumber verify package.json** to verify.

**To pass this challenge** create a **package.json** file with a **"gasket"**
section that prints out the **value** of the **"name"** of each JSON object
using the **jku** module. It should print one name per line.

Data will be piped into your gasket process for this challenge.
