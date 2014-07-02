# Trim Objects

Sometimes you get data that needs to be trimmed, e.g. it has extra whitespace
at the beginning or end, like this:

{"   hello    ": "     world     "}

When what you really want is:

{"hello": "world"}

For trimming LDJSON data on the command line you can use **trim-object-stream**

To install it run **npm install --save trim-object-stream**.

Raw CSV data will be piped into your gasket process for this challenge.

**To pass this challenge** create a **package.json** file with a **"gasket"**
section that first converts the CSV data into LDJSON, and then prints out
the **"Owner name"** property of each JSON object with the keys and values trimmed.

Use the command **data-plumber verify package.json** to verify.

Use the command **data-plumber run package.json** to see the raw gasket output.

**Hint**: use the jku again for this challenge in addition to csv-parser
