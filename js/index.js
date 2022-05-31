let page=1;

function getMonsters(a){
  fetch('http://localhost:3000/'+`monsters/?_limit=50&_page=${a}`)
    .then(resp=>resp.json())
    .then(data=>{
      document.querySelector('#monster-container').innerHTML='';
      for(let i=0; i<data.length; i++)
       createMonsterCard(data[i])
    })
  }

function createMonsterCard(a){
  let b=document.createElement('div')
  let c=document.createElement('h2')
  let d=document.createElement('h4')
  let e=document.createElement('p')
      c.innerHTML=`${a.name}`,
      d.innerHTML=`Age: ${a.age}`,
      e.innerHTML=`Bio: ${a.description}`,
      b.appendChild(c),b.appendChild(d),
    b.appendChild(e),
    document.querySelector('#monster-container').appendChild(b)}
    
function createMonsterForm(){
      const a=document.createElement('form'),
      b=document.createElement('input'),
      c=document.createElement('input'),
      d=document.createElement('input'),
      e=document.createElement('button');
        a.id='monster-form'
        b.id='name'
        c.id='age'
        d.id='description'
        b.placeholder='name...'
        c.placeholder='age...'
        d.placeholder='description...'
        e.innerHTML='Create'
          a.appendChild(b)
          a.appendChild(c)
          a.appendChild(d)
          a.appendChild(e)
          document.getElementById('create-monster').appendChild(a)
  addSubmitEventListener()}
      
function addSubmitEventListener(){
  document.querySelector('#monster-form').addEventListener('submit',a=>{
        a.preventDefault()
        postNewMonster(getFormData())
        document.querySelector('#monster-form').reset()})
      }
        
function getFormData(){
  let a=document.querySelector('#name')
  let b=document.querySelector('#age')
  let c=document.querySelector('#description')
    return{
      name: a.value,
      age: parseFloat(b.value),
      description: c.value}
    }
      
      postNewMonster=a=>{
        fetch("http://localhost:3000/monsters",{
          method:'POST',
          headers:{'Content-type':'application/json',
          Accept:'application/json'},
          body:JSON.stringify(a)})
          .then(resp=>resp.json())
          .then(data =>console.log('new monster',data))}

        

function addNavListeners(){
  let a = document.querySelector('#back')
  let b = document.querySelector('#forward')
      a.addEventListener('click',()=>{
        1<page?(page--,getMonsters(page)):alert('Aint no monsters here')
      })
      b.addEventListener('click',()=>{
        page++,getMonsters(page)
      })
    }

      

document.addEventListener('DOMContentLoaded',init=()=>{getMonsters(),createMonsterForm(),addNavListeners()});