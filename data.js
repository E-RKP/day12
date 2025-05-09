let ciao = 'ciao'
console.log(ciao)
const myButton = document.querySelector('button')
const myTitle = document.querySelector('h1')
const input = document.querySelector('input')

function saluto (nome){

  console.log(`ciao ${nome}`)
  myTitle.innerHTML = `Ciao ${input.value}`;
}



myButton.addEventListener('click', ()=>{
  saluto('spuff');
  console.log(input.value)
})

