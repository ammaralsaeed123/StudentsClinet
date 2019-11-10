document.getElementById(but).addEventListener ("click" ,click);

function click(){
    page=document.getElementById("inp").value;
fetch('http://localhost:4000/students?page=' + page, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            
            for(var i=0 ; i<data.length ; i++) { 
          document.getElementById("table").innerHTML +=' <tr><td>'+data[i].id+'</td><td>'+data[i].first_name+'</td><td>'+ data[i].last_name+'</td><td>'+data[i].grade+'</td></tr>';
         
          }
        
        });}