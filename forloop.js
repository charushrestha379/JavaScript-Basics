//for loop is used to repeat a block of code a specific number of times

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

const arr = [10, 20, 30, 40]
for (let i = 0; i <arr.length; i++)
{
    console.log(arr[i]);
    // Output: 1, 2, 3, 4, 5
}

const arr1 = [4, 5, 6]
for (let value of arr1)
{
    console.log(value);
    // Output: 4, 5, 6
}

//grabbing index and value

const arr10 = [1, 2, 3, 4, 5]
for (let [ i, value]of arr10.entries()) {
console.log(i, value)
} 
/*
output:
0 1
1 2   
2 3
3 4
4 5
*/