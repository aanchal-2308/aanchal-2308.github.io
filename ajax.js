<!doctype html>
<html>
<body>
<div id="demo">
<h1> The XMLHttpRequest object</h1>
<button type="button" onclick="loadDoc()">Change content</button>
</div>

<script>
function loadDoc()
{
    var xhttp= new  XMLHttpRequest();
      xhttp.onreadystatechange = function() 
      {
           if (this.readyState == 4 && this.status == 200) {
           document.getElementById("demo").innerHTML =
           this.responseText;
           }
  };
  xhttp.open("GET","a.html",true);
  xhttp.send();



}
</script>
</body>      
</html>

