# Pipe In

With gasket you can also pipe in data. This means that the first command
in your gasket pipeline will receive whatever data gets piped to the 'gasket'
command.

For example, the module **transform-uppercase** simply uppercases all
data that is written to it and writes it out to the next process.

Run **npm install --save transform-uppercase** and then add the command
to your gasket pipeline. You should end up with something similar to:

```
{
  "name": "my-module",
  "version": "0.0.1",
  "gasket": [
    "transform-uppercase"
  ],
  "dependencies": {
    "transform-uppercase": "^1.0.0"
  }
}
```

Now run **echo "hello" | gasket** in the same folder as the above
**package.json** file. It should print out **HELLO**!

This is the same as running **echo "hello" | node_modules/.bin/transform-uppercase**
directly. All of the workshops can be run similarly this way, by piping data
from one command to the other, but 'gasket' will be helping us combine complex
examples together.

**To pass this challenge** create a **package.json** file with a **"gasket"** section that
**uppercases all input**.

Use the command **data-plumber verify package.json** to verify.
