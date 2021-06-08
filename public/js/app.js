console.log("achieve your goals")
fetch('/weather?address=india').then((response)=>{
    response.json().then((dta)=>{
        console.log(dta)
    })

})
