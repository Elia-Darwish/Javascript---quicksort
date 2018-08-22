





// quick sort method 1
(function (global) {

    let arr = [];


    // calling the the partition sort recursively
    let sort = function (arr, left, right) {

        if (left >= right) {
            return;
        }

        // getting the partition point after sorting
        const index = partition(arr, left, right);


        // calling the partition sort for the left and right partition
        sort(arr, left, index - 1);
        sort(arr, index, right);

    };


    // sorting the array partition 
    let partition = function (arr, left, right) {

        const pivot = arr[Math.floor((left + right) / 2)];


        // looping thru the elements of a partition
        while (left < right) {

            // finding the first swappable value 
            while (arr[left] < pivot) {
                left++;
            }

            // finding the second swappable value 
            while (arr[right] > pivot) {
                right--;
            }


            // swapping if not out of index
            if (left < right) {

                [arr[left], arr[right]] = [arr[right], arr[left]];

            }

            left++;
            right--;

        }

        // return the partition point
        return left;

    };


    function quickSort() {

        arr = [...this];

        sort(arr, 0, arr.length - 1);

        this.length = 0;
        this.push(...arr);

    }

    global.Array.prototype.quickSort = quickSort;


}(window));

















// quick sort method 2
(function (global) {


    let arr = [];

    // calling the the partition sort recursively
    const sort = function (arr, left, right) {

        if (left >= right) {
            return;
        }

        // getting the partition point after sorting
        const index = partition(arr, left, right);

        // calling the partition sort for the left and right partition 
        sort(arr, left, index);
        sort(arr, index + 1, right);

    };


    // sorting the array partition 
    const partition = function (arr, left, right) {

        let pivot = arr[right];
        let wall = left - 1;


        // looping thru the elements of a partition
        while (left < right) {


            // finding a swappable value
            while (arr[left] > pivot) {
                left++;
            }


            // swapping if not out of index
            if (left < right) {
                wall++;

                [arr[wall], arr[left]] = [arr[left], arr[wall]];

                left++;

            }

        }

        // repositioning the pivot to the beginning of the partition
        arr.splice(right, 1);
        arr.splice(wall + 1, 0, pivot);

        // return the partition point
        return wall;

    };


    function quickSort() {

        arr = [...this];

        sort(arr, 0, arr.length - 1);

        this.length = 0;

        this.push(...arr);

    }

    global.Array.prototype.quickSort = quickSort;


}(window));