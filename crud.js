

  var form=document.getElementById('form');

  var ul=document.getElementById('oi')

  document.getElementById('btn1').addEventListener("click",showOutput)
  
  
  function showOutput(data){
  
      let li =document.createElement('li')
      li.id="list"
      let r=li.appendChild(document.createTextNode(data.name+"-"+data.email+"-"+data.pwd+"--"))
       let a=ul.appendChild(li)
       //ul.appendChild(li)
       a.style.textAlign='center'
      a.style.fontSize='50px'
      a.style.fontFamily ='fantasy'
      a.style.color='green'

      let btnD=document.createElement('button');
      btnD.id="btn2";
      btnD.appendChild(document.createTextNode('Delete'));
      li.appendChild(btnD)
      btnD.style.fontSize='45px'
      btnD.style.color='white'
      btnD.style.backgroundColor='red'

      let btnD1=document.createElement('button');
      btnD.id="btn3";
      btnD1.appendChild(document.createTextNode('Edit'));
      li.appendChild(btnD1)
      btnD1.style.fontSize='45px'
      btnD1.style.color='white'
      btnD1.style.backgroundColor='aqua'

     
  }
  
  document.getElementById('btn1').addEventListener("click",networkCall)
  
  function networkCall(){
    let name=document.getElementById('in1').value;
     let email=document.getElementById('in2').value;
      let pwd=document.getElementById('in3').value
  
    let obj={
      name,
      email,
      pwd
    }
    axios
      .post('https://crudcrud.com/api/81090ab736a4480694b4d69fa058b37d/Status',obj)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err));
  
  }
  
  
  window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/81090ab736a4480694b4d69fa058b37d/Status')
    .then(response=>{
      for(let i=0; i<response.data.length;i++){
       showOutput(response.data[i])
      }
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  })
  




