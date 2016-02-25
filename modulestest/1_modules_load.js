var counter = require('./1_modules_custom_counter.js');
console.log('第一次调用模块');

counter.setOutputVal(10);
counter.setIncrement(10);

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

//多次调用同一个模块不会重复加载
var counter = require('./1_modules_custom_counter.js');
console.log('第二次调用模块');
counter.printNextCount();