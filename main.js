// Count the odd numbers of an array

document.write("Count the odd numbers of an array"+"<br>");
document.write("---------------------------------"+"<br>");

var a=[12,13,34,19,90,45,95];
var k=0;
document.write("The array elements are:"+a+"<br>");
document.write("The number of array elements are:"+a.length+"<br><br>");
document.write("The odd elements"+"<br>");
for(let i=0;i<a.length;i++){
    if(a[i]%2==1){
       let b=a[i];
       k++;
       document.write(b+"<br>");
    }
}
document.write("The count of odd elements :"+k+"<br>");

