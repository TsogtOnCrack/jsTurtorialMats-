let n = 100


const check = (num) =>{

    let ans = ""

    if(num % 3 == 0){
        ans += "Fizz"
    }
    if(num % 5 == 0){
        ans += "Buzz"
    }

    if(ans == ""){
        return num
    }else{
        return ans
    }
}

for(let i = 0; i < n+1; i ++){
    console.log(check(i))
}
