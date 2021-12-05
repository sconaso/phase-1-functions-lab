function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - 42);
}
// Math.abs from a Google search, which brought me to StackOverflow

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, end) <= 2000) {
        return (distanceTravelledInFeet(start, end) - 400) * 0.02; 
    } else if (distanceTravelledInFeet(start, end) > 2500) {
        return 'cannot travel that far';
    } else
        return 25;
}