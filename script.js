function insert_Row() {
    //Write your code here
//   document.getElementById("sampleTable").innerHTML=`<tr><td>New Cell1</td> 
// <td>New Cell2</td> </tr>
// <tr><td>Row1 cell1</td> 
// <td>Row1 cell2</td></tr> 
// <tr><td>Row2 cell1</td> 
// <td>Row2 cell2</td></tr> `

let table=document.getElementById("sampleTable")
let row = table.insertRow(0);
let td1=row.insertCell(0);
let td2=row.insertCell(1);

td1.innerHTML="New Cell1"
td2.innerHTML="New Cell2"
}
