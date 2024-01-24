//code.js
//COSC3020 Binary Search Exercise
//Noah Mulvaney, nmulvane@uywo.edu
//24 Jan 2024

//Help recieved from lab TA

//Returns index of element in sorted list, -1 if not found
function binarySearch(list, element) {
    var start = 0, end = list.length; //[start, end)

    while (true) {
        //window includes only one element
        if (start == end) return (list[start] == element) ? start : -1;

        //find center value
        var i = start + Math.floor((end - start) / 2);

        if (list[i] > element) { 
            end = i; //disregard upper half
        } else if (list[i] < element) {
            start = i + 1; //disregard lowwer half
        } else if (list[i] == element) return i; //found
    } 
}

/* My own testing
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 1)); //0
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 10)); //10
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 4)); //2
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 5)); //3 or 4
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 6)); //5
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 9)); //9
*/