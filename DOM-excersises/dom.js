const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content'); 
content.textContent = 'This is the glorious text content!' 

container.appendChild(content); 

const p = document.createElement('p')
p.style.color = 'red';
p.textContent = 'Hey I\'m red';

container.appendChild(p)

const h3 = document.createElement('h3'); 
h3.style.color = 'blue'; 
h3.textContent = 'Hey I\'m blue h3!'

container.appendChild(h3)

const div = document.createElement('div')
div.style.backgroundColor = 'pink'
div.style.borderStyle = 'solid'
div.style.borderColor = 'black'


const h1 = document.createElement('h1')
h1.textContent = 'I\'m in a div'
const p2 = document.createElement('p')
p2.textContent = 'Me too!'

div.append(h1, p2)
container.append(div)

const btn = document.querySelector('#hello');
console.log(btn)
btn.onclick = () => alert('Hello, world!');

const btn2 = document.querySelector('#world'); 
btn2.addEventListener('click', () => {
    alert('Hello, world!');
});

const buttons = document.querySelectorAll('a'); 
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        e.target.style.background = '#852d2d' 
        alert('Hello, world!')
    })
});