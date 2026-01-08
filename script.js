// let btn = document.getElementById('btn')

// btn.addEventListener('ddclick',()=>{alert('dd')})

// let box= document.getElementById('box')
// box.addEventListener('click',()=>{
//     box.style.background = 'red'
//     box.style.borderRadius = '50%'
// });

let html_input = document.getElementById('text')
let html_p = document.getElementById('pi')
html_input.addEventListener('input',()=>{
    html_p.innerHTML = html_input.value
})