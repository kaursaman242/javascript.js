// 5. Login Simulation

// Make a function login(username, password, callback)
// If username = "admin" and password = 123, call callback("Login Success").
// Otherwise callback("Login Failed")

const login=(username,password,callback)=>{
    if (username==="admin"&& password===123) {
      console.log("Login Success!")
    }else{
        console.log("Login Failed!")
    }
    callback()
}

const result=()=>{
  
}
login("admin",123 ,result)