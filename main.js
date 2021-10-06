 const newItem = document.querySelector('.create-queue-item__content');
 const startBtn = document.querySelector('#startBtn')
 const queue = document.querySelector('.queue')
 const stack = document.querySelector('.stack__field')
 const form = document.getElementById('form')
 const mentalAge = 16 


 let queueList=[]
 let stackList=[]

 const createQueue=()=>{      // create divs for queue from queueList(array)
    queue.innerHTML=queueList.map((el, ind)=>`<div class="queue__item"><span>${ind+1}.</span> ${el}</div>`).join` `
 } 

 window.onload = function(){      //Geting data from sessinStorage
    let storageData = JSON.parse( sessionStorage.getItem('data') );
    if (storageData){
    queueList = storageData;
    createQueue();
    }
 }

 function setInSessinStorage (value) {      //set data to sessionStorage
   sessionStorage.setItem( 'data', JSON.stringify(value) )
 }

 
 form.onsubmit = (e) =>{
    e.preventDefault();
   if(queueList.length>=mentalAge){     //validation for quantity
      alert('Error: Queue frame too large. Strat task to free space, only 16 slots available ')
   } else{
    queueList.push(newItem.value)
    createQueue()
    newItem.value = '';
    setInSessinStorage(queueList)
  }
 }

 startBtn.addEventListener('click', ()=>{
    setItemInStack ()
    queueList.shift()
     createQueue()
     setInSessinStorage(queueList)
 })

 function setItemInStack () {   
      let onExit  = queueList[0];
      if (onExit){
      stackList.push(onExit);
      
      stack.innerHTML=stackList.map((el, ind)=>`<div class="stack-field__item"> ${el}</div>`).join` `
      setTimeout(() => {
        stackList.pop()
        stack.innerHTML=stackList.map((el, ind)=>`<div class="stack-field__item"> ${el}</div>`).join` `
      }, 1000);
    }
    }