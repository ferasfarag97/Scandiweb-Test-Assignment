var ajax=new XMLHttpRequest();
var method="GET";
var url="includes/getAll.php";
var asynchronouse=true;
ajax.open(method,url,asynchronouse);
ajax.send();
ajax.onreadystatechange=function(){
    if (this.readyState ==4 && this.status == 200){
     var data = JSON.parse(this.responseText); 
     console.log(data);
        var html="";
        for(let i=0;i<data.length;i++){
         html+='<article  id='+data[i].SKU+'>'+'<input value='+data[i].SKU+' class="checks" type="checkbox"/>';	
                html+='<h3>'+data[i].SKU+'</h3>';
                html+='<h3>'+data[i].Name+'</h3>';
                html+='<h3>'+data[i].Price+ '</h3>';
                html+='<h3>'+data[i].Size+'</h3>';
                html+='</article>  ';
                document.getElementById("art").innerHTML=html;
            
}
    }	
}
function getvalue(){
    
    var checks= document.getElementsByClassName('checks');
    var checkedid = [];
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked===true){
            checkedid.push(checks[i].value);
        }
    } 
    console.log(checkedid);
    for(let i=0;i<checkedid.length;i++){
        var element = document.getElementById(checkedid[i]);
        element.parentNode.removeChild(element);
    }
    $.ajax({
   type: "POST",
   url: "includes/Delete.php",
   data: { activitiesArray: checkedid },
          success: function(data) {
        console.log(data)
   }
});



}

//////////////////////////////////////////////////////////////////////////////////////////////
function send(){
    let selected= document.getElementById("type");
    switch(selected.value){
        case "DVD":
     var checkedid = [];
     checkedid.push("dvds");
     checkedid.push(document.getElementById("SKU").value);
     checkedid.push(document.getElementById("Name").value);
     checkedid.push(document.getElementById("Price").value);
     checkedid.push(document.getElementById("Size").value);
        $.ajax({
            type: "POST",
            url: "includes/insert.php",
            data: { activitiesArray: checkedid },
                   success: function(data) {
                 console.log(data)
            }
         });
     break;
}
}
function run(){
var selected= document.getElementById("type");

console.log(selected.value);
try{
 document.getElementById("specific").deleteRow(8);
 document.getElementById("specific").deleteRow(8);
 document.getElementById("specific").deleteRow(8);
 document.getElementById("specific").deleteRow(8);}catch{}

 switch (selected.value){
     case "DVD":
  var table = document.getElementById("specific");
 var row = table.insertRow(8);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = "<h3>Size (MB)</h3>";
 cell2.innerHTML = '<input type="number" pattern="\d*" name="Size" id="Size" placeholder="Please, Enter The Size(MB)" required>';
////////////////////////////////////
var row = table.insertRow(9);
var cell2 = row.insertCell(0);
var cell1 = row.insertCell(1);
cell1.innerHTML = '<p>"Please, provide size"</p>';
 break;
     case "Book":
     var table = document.getElementById("specific");
     var row = table.insertRow(8);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = "<h3>wieght (KG)</h3>";
 cell2.innerHTML = '<input type="number" pattern="\d*" name="wieght" placeholder="Please, Enter The Wieght(KG)" required>';
 var row = table.insertRow(9);
 var cell2 = row.insertCell(0);
var cell1 = row.insertCell(1);
cell1.innerHTML = '<p>"Please, provide weight"</p>';
     break;
     case "Furniture":
     var table = document.getElementById("specific");
 var row = table.insertRow(8);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = "<h3>Height(CM)</h3>";
 cell2.innerHTML = '<input type="number" pattern="\d*" name="Height" placeholder="Please, Enter The Height(CM)" required>';
 var row = table.insertRow(9);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = "<h3>Width(CM)</h3>";
 cell2.innerHTML = '<input type="number" pattern="\d*" name="Width" placeholder="Please, Enter The Width(CM)" required>';
 var row = table.insertRow(10);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 cell1.innerHTML = "<h3>Length(CM)</h3>";
 cell2.innerHTML = '<input type="number" pattern="\d*" name="Length" placeholder="Please, Enter The Length(CM)" required>';
 var row = table.insertRow(11);
 var cell2 = row.insertCell(0);
var cell1 = row.insertCell(1);
cell1.innerHTML = '<p>"Please, provide dimensions"</p>';
     break;
 }

}

