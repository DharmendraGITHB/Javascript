//write a program to reverse an array or string

//iterative way


function reverseArr(arr, start, end)
{
	while (start < end )
	{
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;

	}
}


function printArr(arr, n)
{
	for(let i =0; i < n; i++ )
	{
		console.log(arr[i]);
	}
}
const arr= [1,2,3,4,5,6];
let n= 6;

printArr(arr,n);

reverseArr(arr,0,n-1);

console.log("after reverse string");

printArr(arr,n);








