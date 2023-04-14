// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let arr2 = arr.filter(el=>el>0)
    if(!arr2.length) {
        return 0
    }
    let result = arr2.reduce(function(sum, elem) {
        if (elem >= 0) {
            return sum + elem;
        } else {

            return sum;
        }
    })
    return result
}
