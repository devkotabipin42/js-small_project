const container = document.querySelector('.container')
const button = document.querySelector('.open')
const topic = document.querySelector('.topic')
const del = document.querySelector('.delete')
const photo = document.querySelector('.photo')
let h1 = null

var arr = [
  "HTML", "CSS", "JavaScript",
  "Sass / SCSS",
  "Responsive Design",
  "Event Handling",
  "Browser APIs (Storage, Fetch, Geolocation)",
  "Object-Oriented Programming (OOP)",
  "Advanced Concepts (Throttling, Debouncing, JSON)"
]
button.addEventListener('click',function(e){
 let h1 = document.createElement('h1')

 var x = Math.random()*90
 var y = Math.random()*90
 var rot = Math.random()*360
 var scl=Math.random()*3
 var a = Math.floor(Math.random()*arr.length)
 var a = Math.floor(Math.random()*250)
 var b = Math.floor(Math.random()*250)
 var c = Math.floor(Math.random()*250)


 console.log(a);
 
 h1.innerHTML='hello'
 h1.style.color=`rgb(${a},${b},${c})`
 h1.style.position='absolute'
 h1.style.left=x + '%'
 h1.style.top=y+'%'
 h1.style.rotate=rot+'deg'
 container.appendChild(h1)
 console.log(h1)
 console.log(x,y)

 
})

del.addEventListener('click',function(){
const h1 = container.querySelectorAll('h1')
h1.forEach(h1=>h1.remove())

const h2 = container.querySelectorAll('h2')
h2.forEach(h2=>h2.remove())

const img = container.querySelectorAll('img')
img.forEach(img=>img.remove())
})

topic.addEventListener('click',function(){

 let h2 = document.createElement('h2')
 var x = Math.random()*90
 var y = Math.random()*90
 var rot = Math.random()*360
 var scl=Math.random()*3
 var d = Math.floor(Math.random()*arr.length)
 var a = Math.floor(Math.random()*250)
 var b = Math.floor(Math.random()*250)
 var c = Math.floor(Math.random()*250)
console.log('hello')
  h2.innerHTML=arr[d]
 h2.style.color=`rgb(${a},${b},${c})`
 h2.style.position='absolute'
 h2.style.left=x + '%'
 h2.style.top=y+'%'
 h2.style.rotate=rot+'deg'
 h2.style.scale=scl
 container.appendChild(h2)
 console.log(h2)
 console.log(x,y)
})


var imgsrc = ['https://plus.unsplash.com/premium_photo-1762560038784-6d927493a029?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D','https://plus.unsplash.com/premium_photo-1723526592766-15d1fd0de4a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D','https://plus.unsplash.com/premium_photo-1752865066686-a58cb4d5b966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D','https://images.unsplash.com/photo-1756137074695-88e71b00ef77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8','https://images.unsplash.com/photo-1761669973922-3e4107cf1136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8','https://images.unsplash.com/photo-1761438180295-9ea187978263?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'

]

photo.addEventListener('click',function(){
 const img= document.createElement('img')
 const randomIndex = Math.floor(Math.random()*imgsrc.length)
 img.src=imgsrc[randomIndex]
 img.style.height='70px'
 img.style.width='70px'
 container.appendChild(img)
 img.style.borderRadius= '50%'
 var x = Math.random()*90
 var y = Math.random()*90
 var rot = Math.random()*360
 var scl=Math.random()*3
 var d = Math.floor(Math.random()*arr.length)
 var a = Math.floor(Math.random()*250)
 var b = Math.floor(Math.random()*250)
 var c = Math.floor(Math.random()*250)

  img.innerHTML=arr[d]
 img.style.position='absolute'
 img.style.left=x + '%'
 img.style.top=y+'%'
 img.style.rotate=rot+'deg'
 img.style.scale=scl
})