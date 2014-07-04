# XML

XML (similar to HTML) is intended for markup + documents but is used in many
sitatuations as a way to store structured data. 

The **xml-json** module will convert XML into JSON, but usually you end up with
JSON that is kind of messy, so it is usually necessary to post-process the JSON
you get into more clean JSON (e.g. LDJSON).

This challenge involves XML data from a public transit bus data API. Data will
be piped into your gasket pipeline.

**To pass this challenge:**

Create a **package.json** file with a **"gasket"** section that converts the
XML to JSON and then filters out the **id** field of each item in the data and
prints them one per line.

Use the command **data-plumber verify package.json** to verify.

Use the command **data-plumber run package.json** to see the raw gasket output.
