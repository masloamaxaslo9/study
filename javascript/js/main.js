let pow = function pow(value, stepValue ) {
    if(stepValue !== 1) {
        return value * pow(value, stepValue - 1);
    } else {
        return value;
    }
};

// First Decorator
function showConsoleDecorator(func) {
    return function () {
        let result = func.apply(this, arguments);
        console.log('Result function: ' + result);
        return result;
    }
}

// Call Counter Decarator
function callCounterDecorator (func) {
    let count = 0;
    return function () {
        count++;
        console.log('Function summoned: ' + count);
        return func.apply(this, arguments);
    }
}

// Execution Time Function
function executionTimeFunction(func) {
    return function () {
        let timeExecution = performance.now();
        let result = func.apply(this, arguments);
        timeExecution = performance.now() - timeExecution;
        console.log('Execution Time: ' + timeExecution + ' ms.');
        return result + console.log('///////////////////');
    }
}


pow = showConsoleDecorator(pow);
pow = callCounterDecorator(pow);
pow = executionTimeFunction(pow);

pow(2,3);
pow(5,40);
pow(6,10);
pow();