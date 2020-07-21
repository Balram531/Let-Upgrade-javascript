
var arr=[];
var size=prompt("Enter the size of array")
for(var i=0;i<=size;i++)
{
arr[i]=prompt("Enter the number"+(i+1));
}
console.log(arr);
let Odd_number=arr.filter(el=>el%2!=0);
console.log(Odd_number);

let Cube_Number=arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(Cube_Number);