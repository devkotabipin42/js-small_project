const footer = document.querySelector('footer');
const main = document.querySelector('main');  
const right = document.querySelector('.right img');
const img = document.querySelector('.img');
const screen = document.querySelector('.screen ');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
 console.log(e.pageX, e.pageY);
  right.style.left = `${e.pageX}px`;
  right.style.top = `${e.pageY}px`;
  right.style.opacity = '1';
})

document.addEventListener('click', () => {
  right.style.opacity = '0';
});

img.addEventListener('click', (e) => {
   e.stopPropagation()
  console.log('hello')
  screen.style.display = 'block';
  screen.style.transition = 'all 0.3s ease-in-out';
});

document.addEventListener('click',()=>{
  screen.style.display = 'none';
})