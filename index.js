function runFiveMiles() {
    console.log('Go for a five-mile run');
}

function liftWeights(){
    console.log('Pump iron');
}

function swimFortyLaps(){
    console.log('Swim 40 laps')
}

const exerciseRoutine = runFiveMiles();

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction(){
        return('beep');
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'neat';
    }
}