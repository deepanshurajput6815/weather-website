console.log("achieve your goals")
fetch('http://localhost:3000/weather?address=india').then((response)=>{
    response.json().then((dta)=>{
        console.log(dta)
    })

})
