console.log("connected")

const weatherForm=document.querySelector("form")

const search=document.querySelector("input")

const mes1=document.querySelector("#m1");

const mes2=document.querySelector("#m2");

weatherForm.addEventListener('submit',(e)=>{
    
    e.preventDefault()

    const location=search.value

    const loc="http://localhost:3000/weather/?address="+location;

   

 
    fetch(loc).then((response)=>{
    
        response.json().then((data)=>{
        mes1.textContent="loading......."
        mes2.textContent=""
    
            if(data.error)
        {
            //console.log(data.error)
            mes1.textContent=data.error;
            mes2.textContent=""
        }
    
        else{
            //console.log(data);
            mes1.textContent=data.location;
            mes2.textContent=data.forecastData;
        }

    })
})

    //console.log("done")
})
