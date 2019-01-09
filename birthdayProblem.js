// let's solve the birthday problem/paradox 

// cached factorial function 

function cachedFactorial() {
  const factCache = {};
  const fact = n => {
    if (n === 0 || n === 1) return 1;
    if (!factCache[n]) {
      factCache[n] = n * fact(n - 1);
    }
    return factCache[n];
  }
  return fact;
}

const factorial = cachedFactorial();

const combinations = (n, k) => (factorial(n) / (factorial(k) * factorial(n - k)));

const permutations = (n, k) => factorial(n) / factorial(n - k);

const birthayProbability = n => permutations(365, n) / (365 ** n);

console.log(combinations(25, 1), combinations(25, 24));
