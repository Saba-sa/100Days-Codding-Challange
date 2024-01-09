let city_name=document.querySelector('#searched_value'),
     btn=document.querySelector('button'),
     icon=document.querySelector('#weather-icon'),
     temperature=document.querySelector('.temp'),
     hum=document.querySelector('.humidity'),
     name=document.querySelector('h4'),
     des=document.querySelector('h5'),
     wind=document.querySelector('.speed'),
     p=    document.querySelectorAll('.container-detail p'),
     key='23caf82d64102dd30cdf8bb1013afe97',
     url=`https://api.openweathermap.org/data/2.5/weather?units=metric`;
    
    // ..function 
    const fet=async (city)=>{
        try {
            
        let reponse=await fetch(`${url}&q=${city}&appid=${key}`);
        let data=await reponse.json()
        let iconcode=data.weather[0].icon;
        icon.src=`http://openweathermap.org/img/w/${iconcode}.png`
        name.innerText=data.name;
        des.innerText=data.weather[0].description;
        temperature.innerText=`${Math.ceil(data.main.temp)}°C`;
        hum.innerText=`${data.main.humidity}%`;
        wind.innerText=`${data.wind.speed}km/h`;
        p.forEach((i)=>{
            i.style.border='2px solid #3badcf'
        }
        )
    } catch (error) {
       name.innerText='invalid city name'     
       icon.src=``
        des.innerText='';
        temperature.innerText=``;
        hum.innerText=``;
        wind.innerText=``;
p.forEach((i)=>{
    i.style.border='none'
}
)     
}
    }

    //event listners
    btn.addEventListener('click',()=>fet(city_name.value))
    document.addEventListener('DOMContentLoaded',()=>{
        fet('gilgit')
    })
city_name.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
return      fet(city_name.value)
    }
    return ;
})