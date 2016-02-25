var outputVal = 0;
var increment = 1;

function setOutputVal(val)
{
    outputVal = val;
}

function setIncrement(incrementVal)
{
    increment = incrementVal;
}

function printNextCount()
{
    outputVal += increment;
    console.log(outputVal);
}

function printOutputVal()
{
    console.log(outputVal);
}

/*
    exports 是 module.exports的引用，它们两个实际上是同一个东西
    
 */
exports.setOutputVal = setOutputVal;
exports.setIncrement = setIncrement;
module.exports.printNextCount = printNextCount;