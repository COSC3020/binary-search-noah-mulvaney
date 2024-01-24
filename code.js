//code.js
//COSC3020 Binary Search Exercise
//Noah Mulvaney, nmulvane@uywo.edu
//24 Jan 2024

//Returns index of element in sorted list, -1 if not found
function binarySearch(list, element) {
    var start = 0, end = list.length; //[start, end)

    while (true) {
        var i = Math.floor((end - start) / 2);

        if (i == 0) return (list[start] == element) ? start : -1;

        if (list[i] > element) {
            end = i;
            continue;
        } else if (list[i] < element) {
            start = i + 1;
            continue;
        } else if (list[i] == element) return i;
    }
}