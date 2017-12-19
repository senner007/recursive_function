function recursive(y) {
    var count = 0;

  var functionCalls
    function find(x, a) {
    count++; // count counts the total recursive calls made
   //console.log(x)
    if (count > 3000) {return 'count: ' + count;}
    if (x == y) { a = a + x; a = a.split(','); return {n: x, stepsToComplete: a.length, totalCalls: count, sequence: a}; }
    if (x > y) { return false;}
    else {
      console.log(x) // this does not show the final sequence
      var param2 = a + x + ',';
      return (
        find(x +5, param2) ||
        find(x +4, param2) ||
        find(x * 3, param2)
      );
    }

   }
   return find(1, '')
}
var obj = recursive(128);
console.log(obj)
