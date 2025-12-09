//callback==> ek functon jun ki turant chaldaina yo chalxa jun hjur ko kam complete hunxa

// function abcd(fn){
//   fn(function(fn3){
//     fn3(function(fn5){
//       fn5(function(fn7){
//         fn7()
//       })
//     })
//   })
// }
// abcd(function(fn2){
//   fn2(function(fn4){
//     fn4(function(fn6){
//       fn6(function(){
//         console.log('hello')
//       })
//     })
//   })
// })





// function ab(fn){
//   console.log('hello1');
//   fn(function(fn3){
//     fn3(function(fn5){
//       fn5(function(fn7){
//         fn7(function(fn9){
//           fn9(function(){
//           })
//         })
//       })
//     })
//   })
// }

// ab(function(fn2){
//   fn2(function(fn4){
//     fn4(function(fn6){
//       fn6(function(fn8){
//         fn8(function(){
//             console.log('hello5')
//         })
//       })
//     })
//   })
// })



// function insta(userName,cb){
//   cb({id:'bipin',username:'bipin123',age:23})
// }

// insta('bipin',function(data){
//   console.log(data)
// })

//exercise 1
//ak function banau afterswlay
//Requrements
//time('milliseconds)
//callback function
//given time ke baad callback call kare
//callbak ke andar 'calback executed'print hona chahiye
//use case sacho
//2 nd second baad ek kaam karna hai
//goal

// function afterDelay(time,cb){
// setTimeout(() => {
//   cb()
// }, time);
// }

// afterDelay(3000,function(){
// console.log('all back')
// })
// ///////////////////////////////////////////////////
// function insagramdata(username,cb){
//   setTimeout(()=>{
//     cb({uniquenum: 1222,username:'bpn'})
//   },3000)
// }
// function metape(uniquenum,cb){
//   setTimeout(()=>{
//     cb(['img1','img2'])
//   },4000)
// }

// insagramdata('bpn',function(data){
//   metape(data.uniquenum,function(image){
//     console.log(image)
//   })
// })

//create a function processName(name,callback)that capitalizes the name and pass it to callback

// function processName(name,cb){
//  setTimeout(() => {
//    let result = name.toUpperCase()
//   cb(result)
//  }, 3000);
// }

// processName('bipin',function(br){
//   console.log(br)
// })

//if username  os 'admin call sucess callback otherwise error callback

// function sendOTP(callback) {
//   console.log("Sending OTP...");

//   setTimeout(() => {
//     console.log("OTP sent!");
//     callback();
//   }, 2000);
// }

// sendOTP(() => {
//   console.log("Continue to next step...");
// });



//////////////////////////////////////////////////////////////
//retrieve user
//retrieve users posts
//retrieve comments on first ppost
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
function getUser(callback) {
  console.log("Fetching user...");

  setTimeout(() => {
    console.log("User fetched!");
    callback({ id: 1 });
  }, 1000);
}

function getPosts(userId, callback) {
  console.log("Fetching posts for user:", userId);

  setTimeout(() => {
    console.log("Posts fetched!");
    callback(["Post A", "Post B"]);
  }, 1000);
}

function getComments(post, callback) {
  console.log("Fetching comments for:", post);

  setTimeout(() => {
    console.log("Comments fetched!");
    callback(["Nice!", "Good job!"]);
  }, 1000);
}

// Execution
getUser(function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0], function (comments) {
      console.log("Final comments:", comments);
      console.log("Flow completed");
    });
  });
});


//simumation a comlete e-commerce order
//1.validate user
//2.check product stock
//3.process payment
//4.send invoice
//After  every thing 'order complete'

function validateUser(callback){
  console.log('validating user...')

  setTimeout(() => {
    console.log('user validated')
    callback({userId: 101})
  }, 2000);
}

function checkStock(productId, callback){
  console.log('Checking stock for product:',productId )

  setTimeout(() => {
    console.log('stock available')
    callback()
  }, 2000);
}

function processPayment(userId,callback){
  console.log("Processing payment for user:", userId)

  setTimeout(() => {
    console.log('payment sucessfull')
    callback()
  }, 2000);
}

function sendInvoice(callback){
  console.log('sending invoice')

  setTimeout(() => {
    console.log('invoice sent')
    callback()
  }, 3000);
}

validateUser( function (user){
  checkStock(555,function(){
    processPayment(user.userId,function(){
      sendInvoice(function (){
        console.log('order complete')
      })
    })
  })
})

/*Scenario:

Check internet

Login user

Load homepage*/

function checkInternet(callback){
  setTimeout(() => {
    console.log('Internet Connected')
    callback()
  }, 4000);
}

function loginUser(callback){
  setTimeout(() => {
    console.log('User logged in')
    callback()
  }, 4000);
}

function loadHome(callback){
  setTimeout(() => {
    console.log('homepage Loaded')
    callback()
  }, 4000);
}
checkInternet( function(){
  loginUser(function(){
    loadHome(function(){
      console.log('everything ok')
    })
  })
})

/* Scenario:

Add item to cart

Check item price

Apply discount

Show final bill */

function addItem(cb){
  setTimeout(() => {
    console.log('item added in cart');
    cb()
  }, 2000);
}

function checkItem(cb){
  setTimeout(() => {
    console.log('price checked')
    cb(1000)
  }, 2000);
}

function applyDiscount(price,cb){
  setTimeout(() => {
    console.log('Discount applied')
    cb(price-300)
  }, 2000);
}

function showBill(finalAmount,cb){
  setTimeout(() => {
    console.log('final bill',finalAmount);
    cb()
  }, 2000);
}

addItem(function(){
  checkItem(function(price){
    applyDiscount(price,function(newPrice){
      showBill(newPrice,function(){
        console.log('order ready for checkout')
      })
    })
  })
})


/* Scenario:

Connect to database

Fetch user

Verify password

Generate token

Load dashboard  */

function connectDatabase(cb){
  setTimeout(() => {
    console.log('database connected')
    cb()
  }, 2000);
}

function fetchUser(cb){
  setTimeout(() => {
    console.log('user data fetched')
    cb({username:'bipin',password:'1234'})
  }, 2000);
}

function verifyPassword(user,cb){
  setTimeout(() => {
    console.log('password verified')
    cb(user.username)
  }, 2000);
}

function generateToken(username,cb){
  setTimeout(()=>{
    console.log('token generated for: ',username)
    cb('token_abcd')
  },2000)
}

function loaddash(token,cb){
  setTimeout(() => {
    console.log("Dashboard loaded with token:", token)
    cb()
  }, 2000);
}

connectDatabase(function(){
  fetchUser(function(user){
    verifyPassword(user,function(username){
      generateToken(username,function(token){
        loaddash(token,function(){
          console.log('authentication complete')
        })
      })
    })
  })
})