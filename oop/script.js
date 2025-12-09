
class Cars {
constructor(color,brand,functions){
  this.color=color
  this.brand=brand
  this.functions=functions
}
 billBook(){
  console.log('bring any time bill book')
 }
}

let crown = new Cars('black','crown', '6 airbag')
let honda = new Cars()


class Bikes{
  constructor(){
    this.price = 100000
    this.brand = 'honda'
    this.cc= 1000
  }

}

 let food = {
  veg : 'tarkali',
  nonveg: 'meat',
}

function tarkali( a,b,c){
 console.log(this,a,b,c)
}
helo =tarkali.bind(food,[1,2,3])
helo()

//inheritage

class User{
  constructor(name,address,username,email){
    this.name =name
    this.address=address
    this.username=username
    this.email=email
    this.user = 'user'
  }
  write(text){
    let h1= document.createElement('h1')
    h1.textContent=`${this.name}: ${text}`
    document.body.appendChild(h1)
  }

}


class Admin extends User{
  constructor(name,address,username,email){
    super(name,address,username,email)
    this.role='admin'
  }
  remove(){
    document.querySelectorAll('h1').forEach(function(elem){
      elem.remove()
    })
  }
}

let u1 = new User ('bpn','japan','bpn123','email.@123')
let u2 = new User ('ppnnna','japan','pdkod','email.@123')
let u3 = new Admin('bipin','asia','bipeeen','bipin@122')
