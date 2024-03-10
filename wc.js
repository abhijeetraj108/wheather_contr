// console.log("abhi")
// let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=patna&appid=6c6ec567b81d1b26778830c4feec55b8"

const apiKey = "&appid=6c6ec567b81d1b26778830c4feec55b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let tem = document.querySelector(".ws")
let ws = document.querySelector(".humidity")
let btn = document.querySelector(".btn")
let inp = document.querySelector(".in input")


let temp = document.querySelector(".temp")
let humidity = document.querySelector(".humidity")
let hum = document.querySelector(".temp")
let cont = document.querySelector(".container")

btn.addEventListener("click",()=>{
    let city = inp.value
    data(city);
    cont.style.display="block"
})


async function data(city){
    console.log(city)
    console.log(apiUrl+city+apiKey)
    let res =await fetch(apiUrl+city+apiKey);
    // console.log(res)
    let d = await res.json();
    // console.log(d)
    tem.innerHTML=Math.round(d.main.temp)+`°C`
    ws.innerHTML=d.wind.speed+"km/h"
    hum.innerHTML=d.main.humidity + "%"
    inp.value="";
}

// console.log("hey")
// data();