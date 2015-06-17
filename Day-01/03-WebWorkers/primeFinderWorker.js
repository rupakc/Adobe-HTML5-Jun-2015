function isPrime(n){
    if (n <= 3 ) return true;
    for(var i=2; i <= (n/2); i++)
        if (n % i === 0) return false;
    return true;
}

function findPrimeCount(start, end){
    var result = 0;
    for(var i=start; i<=end; i++){
        if (isPrime(i)) ++result;
    }
    return result;
}

self.addEventListener("message", onMessageFromMain);
function onMessageFromMain(evtArg){
    var data = evtArg.data;
    if (data.type === "findPrimeCount"){
        var primeCount = findPrimeCount(data.start, data.end);
        var output = {
            type : "completed",
            primeCount : primeCount
        };
        self.postMessage(output);
    }
}
