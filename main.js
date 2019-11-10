// document.getElementById(but).addEventListener ("click" ,click);
let dd=document.getElementById("but");

dd.addEventListener("click",ev=>{
    click()
})
function click(){
 page=document.getElementById("inp").value;
fetch('http://localhost:4000/students/'+ page, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          for(let i=0;i<data.length;i++){
          document.getElementById("table").innerHTML +=' <tr><td>'+
          data[i].id+'</td><td>'+data[i].first_name+'</td><td>'+
          data[i].last_name+'</td><td>'+data[i].grade+'</td></tr>';
          }
        })
        }
