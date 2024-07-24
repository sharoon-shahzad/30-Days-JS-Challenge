function  changeTextContext()
{
    const ul = document.querySelector('#ul');
    const li =ul.querySelector('li:nth-child(1)');
    li.textContent = 'I changed the text';

    const existUl = document.querySelector('.language')
    const newLi  = document.createElement('li')
    newLi.appendChild(document.createTextNode('NextJs'));
    existUl.appendChild(newLi);
}
// changeTextContext();
function channgeBgColor(color)
{
    const h1 = document.querySelector('.h1');
    h1.style.backgroundColor = color;
}
channgeBgColor('red');

function addDiv(divContent)
{
    const book = document.querySelector('#book')
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(divContent));
    book.appendChild(div);
}
// addDiv('hello i am new div which is being added!')

function changeImg()
{
    const book = document.querySelector('#book')
    const img =book.querySelector('img')
    img.src = 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D';
}
// changeImg()

function removeEle()
{
    const ul = document.querySelector('.language')
    const li = ul.querySelector('li:last-child')
    li.remove();
}
removeEle()
function addNewDiv() {
  const book = document.querySelector('#book');
  const newDiv = document.createElement('div');
  newDiv.textContent = 'I am new div';
  newDiv.classList.add('new-div');
  book.appendChild(newDiv);
}
function addClassTag()
{
    const book = document.querySelector('#book')
    const newdiv = document.createElement('div');
    newdiv.appendChild(document.createTextNode('I am new div'));
    newdiv.classList.add('new-div');
    book.appendChild(newdiv);
    console.log(newdiv);
}
// addClassTag()

function removeClassTag()
{
    const book = document.querySelector('#book')
    const newdiv = document.querySelector('.new-div');
    book.removeChild(newdiv);
}
// removeClassTag()