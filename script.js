let inp = document.querySelector("input");
let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    let value = parseInt(document.getElementById("input").value);
    let res = document.getElementById("result");

    // res.textContent = `hello`

    // alert(`${value}`)
    
    if(value < 1)
    {
        res.textContent = "Please enter a no. greater than 1."
        res.style.color = "maroon";
        res.style.fontSize = "25px"
    }
    else if(value == 1)
    {
        res.textContent = `${value} is not a prime no.`
        res.style.color = "red";
        res.style.fontSize = "25px" 
    }
    
    else{
        let isprime = false;
        for(let i = 2; i<= Math.sqrt(value); i++)
        {
            if(value % i === 0)
            {
                isprime = true;
                break;
            }
        }

        if(!isprime)
        {
            res.textContent = `${value} is a prime no.`
            res.style.color = "blue";
            res.style.fontSize = "25px"
        // alert(`${v}`)
        }
        else{
            res.textContent= `${value} is not a prime no.`
            res.style.color = "red";
            res.style.fontSize = "25px"
        // alert(`${v}`)
        }
    }

})