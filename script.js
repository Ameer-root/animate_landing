let starts = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let morning = document.querySelector('.logo');


window.onscroll = function () {
    let value = scrollY;
    starts.style.left =value + 'px';
    moon.style.top = value*3 + 'px';
    mountains3.style.top = value + 'px';
    mountains4.style.top = value/5 + 'px';
    river.style.top = value/4 + 'px';
    boat.style.top = value/4 + 'px';
    boat.style.left = value/2 + 'px';
    morning.style.fontSize = value + 'px';
    morning.style.transform = `translateY(${-value}px)`;
    if(value >= 122)
    {
        morning.style.transform = `translateY(${-90}px)`;

    }

    if(value > 153)
    {
        morning.style.fontSize = 150 + 'px';

    }

    // if(value > 250)
    // {
    //     morning.style.display = 'none';
    // }
    if(value>=218)
    {
        document.querySelector('.container').style.background = 'linear-gradient(#2f5976,#10001f)';
    }
    else
    {
        document.querySelector('.container').style.background = 'linear-gradient(#200016,#10001f)';
      
    }



}