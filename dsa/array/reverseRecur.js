


function reverseArr(arr, start, end)
{
  let temp = arr[end];
   arr[end] = arr[start];
   arr[start] = temp;

   if( start+1 < end-1){
   	reverseArr(arr, start+1, end-1);


   }

}


function printArr(arr, n){
	for(let i = 0; i<n; i++){
		console.log(arr[i]);
	}
}


const arr = [1,2,3,4,5,6,7];
let n = arr.length-1;
start = 0;
end = n-1;

printArr(arr, n);
console.log("reverse arrar using recursion method");
reverseArr(arr, start, end);
printArr(arr, n);
