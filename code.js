//code.js
//COSC3020 Binary Search Exercise
//Noah Mulvaney, nmulvane@uywo.edu
//24 Jan 2024

//Help recieved from lab TA

//Returns index of element in sorted list, -1 if not found
function binarySearch(list, element) {
    var start = 0, end = list.length; //controls search window [start, end)

    while (true) {
        //window includes only one element
        if (end - start < 2) {
            if (list[start] == element) {
                //decrement start if left value is a duplicate
                while (list[start - 1] == element) start--;
                return start; //return lowest index found
            } else return -1; //element not found
        }

        //find center value
        var i = start + Math.floor((end - start) / 2);

        if (list[i] > element) { 
            end = i; //disregard upper half
        } else if (list[i] < element) {
            start = i + 1; //disregard lowwer half
        } else if (list[i] == element) {
            //decrement start if left value is a duplicate
            while (list[i - 1] == element) i--;
            return i; //return lowest index found
        }
    } 
}

/* My own testing */
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 1)); //0
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 10)); //10
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 4)); //2
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 5)); //3
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 6)); //5
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 9)); //9
console.log(binarySearch([1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10], 3)); //-1
