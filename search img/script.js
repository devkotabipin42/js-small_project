const  accessKey =;

const searchEngine = document.querySelector('.search-engine')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.querySelector('.show-more-btn')

let keyword = ''
let page = 1

async function searchImage(){
 keyword= searchBox.value
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
 
 const response= await fetch(url)
 const data =await response.json()

 if(page===1){
  searchResult.innerHTML=''
 }
 const results = data.results
 
 results.map((result)=>{
  const image = document.createElement('img')
  image.src = result.urls.small
  const imageLink = document.createElement('a')
  imageLink.href = result.links.html
  imageLink.target= '_blank'
  imageLink.appendChild(image)
  searchResult.appendChild(imageLink)
  console.log(data)
 })
}
showMoreBtn.style.display = 'block'

searchEngine.addEventListener('submit',(e)=>{
 e.preventDefault()
 page = 1
 searchImage()
})

showMoreBtn.addEventListener('click',()=>{
 page++
 searchImage()
})