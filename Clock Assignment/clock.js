setInterval(()=>{
    dt=new Date();
    Htime=dt.getHours();
    Mtime=dt.getMinutes();
    Stime=dt.getSeconds();
    Hourot=30*Htime+Mtime/2;
    Minrot=6*Mtime;
    Secrot=6*Stime;
    Time= Htime+":"+Mtime+":"+Stime;
    hour.style.transform=`rotate(${Hourot}deg)`;
    min.style.transform=`rotate(${Minrot}deg)`;
    sec.style.transform=`rotate(${Secrot}deg)`;
    document.getElementsByTagName('h1')[0].innerText=Time;
},1000);