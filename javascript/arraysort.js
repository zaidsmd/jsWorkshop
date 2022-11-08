let setButton = document.querySelector('#arraySort .set button');
let arrayLength = document.querySelector('#arraySort .set input');
let sortButton = document.querySelector('#arraySort .input button');
let table = document.querySelector('#arraySort .input .array');
let output = document.querySelector('#arraySort .output ');
let myArray = [];
let result = [];
const createTable = `<input type="number">`;
setButton.addEventListener('click', () => {
        if (arrayLength.value > 0) {
            document.querySelector('#arraySort .result').classList.add('hide');
            document.querySelector('#arraySort .input').classList.remove('hide');
            table.innerHTML = createTable.repeat(parseInt(arrayLength.value))
        } else {
            output.innerHTML = "Please enter a valid number"
        }
    }
);

function mergeSortedArrays(arr1, arr2) {
    result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    output.innerHTML = createTable.repeat(result.length);
    for (let i = 1; i <= result.length; i++) {
        document.querySelector('#arraySort .result').classList.remove('hide');
        const outputCell = document.querySelector(`#arraySort .output input:nth-child(${i})`)
        outputCell.value = result[i - 1]
    }
    return result;

}

function sortArray(x) {
    if (parseInt(x.length) <= 1) {
        output.innerHTML = createTable;
        document.querySelector('#arraySort .result').classList.remove('hide');
        const outputCell = document.querySelector(`#arraySort .output input`)
        outputCell.value = x[0]
        return x
    } else {
        let midArray = Math.floor(x.length / 2);
        let left = sortArray(x.slice(0, midArray))
        let right = sortArray(x.slice(midArray));
        return mergeSortedArrays(left, right);
    }

}

function sort() {
    output.innerHTML = '';
    myArray = [];
    for (let i = 1; i <= parseInt(arrayLength.value); i++) {
        let tableToSort = document.querySelector(`#arraySort .array input:nth-child(${i})`)
        myArray.push(+(tableToSort.value));
    }
    if ((document.querySelector('#arraySort select').value) === "1") {
        sortArray(myArray)
    } else {
        bubblesort()
    }
}

sortButton.addEventListener('click', sort)

function bubblesort() {
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = 0; j < myArray.length - i - 1; j++) {
            if (myArray[j] >= myArray[j + 1]) {
                [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]]
            }
        }
    }
    output.innerHTML = createTable.repeat(myArray.length);
    for (let u = 1; u <= myArray.length; u++) {
        document.querySelector('#arraySort .result').classList.remove('hide');
        const outputCell = document.querySelector(`#arraySort .output input:nth-child(${u})`)
        outputCell.value = myArray[u - 1]
    }
}