 const newItem = document.querySelector('.create-queue-item__content');
 const addBtn = document.querySelector('input')
 const queue = document.querySelector('.queue')
 const queueList=['dqwdwq', 'dwqdwq' ]
 
 queue.innerHTML=queueList.map((el, ind)=>`<div class="queue__item"><span>${ind+1}.</span> ${el}</div>`).join` `

 addBtn.onclick = (e) =>{
    e.preventDefault();
    createQueueItem()
    newItem.value = '';
    sessionStorage.setItem('queueList', queueList)
 }

 createQueueItem = ()=>{
    queueList.push(newItem.value);
    console.log(queueList);
    queue.innerHTML=queueList.map((el, ind)=>`<div class="queue__item"><span>${ind+1}.</span> ${el}</div>`).join` `
 }
