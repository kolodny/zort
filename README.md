zort
===

usage:

```js
var zort = require('zort');

zort(function(port) {
  console.log(port, 'is available');
}, {start: 8080, end: 9000});

zort(function(port) {
  console.log(port, 'is also available');
});
```


Command line usage:

```bash
$ zort
45032
$ zort 8080
8081
$ zort 80
1024
$ sudo zort 80
81
```
