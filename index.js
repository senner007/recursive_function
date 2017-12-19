function recursive(y) {
    var count = 0;

  var functionCalls
    function find(x, a) {
    count++;
   //console.log(x)
    if (count > 3000) {return 'count: ' + count;}
    if (x == y) { a = a + x; a = a.split(','); return {n: x, stepsToComplete: a.length, totalCalls: count, sequence: a}; }
    if (x > y) { return false;}
    else {
       console.log(x)
      return (
        find(x +5, a + x + ',') ||
        find(x +4, a + x + ',') ||
        find(x * 3, a + x + ',')
      );
    }

   }
   return find(1, '')
}
var obj = recursive(128);
console.log(obj)
