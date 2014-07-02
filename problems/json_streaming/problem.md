# JSON Streaming

Sometimes you have tons of non-newline delimited JSON data that you can't
read into memory all at once (e.g. JSON.parse() causes JS to crash!).

For this use case check out the **JSONStream** module (case sensitive!)

To install it run **npm install --save JSONStream**

This challenge involves JSON data for a music collection. The data is
structured like this:

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

**To pass this challenge** create a **package.json** file with a **"gasket"**
section that parses the **doc** objects out of the input JSON stream and prints
out the **song** name for each one.

Use the command **data-plumber verify package.json** to verify.

Use the command **data-plumber run package.json** to see the raw gasket output.

**Hint**: use jku again for this challenge
