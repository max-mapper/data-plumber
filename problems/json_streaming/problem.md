# JSON Streaming

Sometimes you have tons of non-newline delimited JSON data that you can't
read into memory all at once (e.g. JSON.parse() causes JS to crash!).

The **jsonfilter** module can be used in this situation as well.

Read about how it works at **npmjs.org/jsonfilter**.

This challenge involves filtering JSON data from a music collection. The data
is structured like this:

```
{"rows": [
  {
    "key":"4e8a1427c764960bcd9a025eb00270a1", "doc": {
      "song":"01 - Yes.mp3"
    }
  },
  // many more rows here...
]}
```

To put it another way: an array of **rows**, where each row is an object that
has a **doc** property where the **song** name (and other song info) are stored.

This raw JSON data will be automatically piped into your gasket process.

**To pass this challenge:**

Create a **package.json** file with a **"gasket"** section that parses the
**doc** objects out of the input JSON stream and prints the **song** property
from each one

Use the command **data-plumber verify package.json** to verify.

Use the command **data-plumber run package.json** to see the raw gasket output.
