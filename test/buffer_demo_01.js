var buf = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(buf[0]);

console.log(buf.toString('utf-8'));

var buf2 = new Buffer('中u哦hello' , 'utf-8');

console.log(buf2[0]);