let user = prompt('İsminizi bahşeder misiniz') || 'gizemli';
let date = new Date();
let utcDay = date.getDay();
let day;
let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

document.querySelector('.user').innerHTML += `${user[0].toUpperCase() + user.slice(1)}`;

setTime();

function setTime() {
    let updateDate = new Date();

    document.querySelector('.time>h1').innerHTML = `
        ${updateDate.getHours()}
        :${updateDate.getMinutes()}:
        ${updateDate.getSeconds()} 
        ${days[updateDate.getDay() - 1]}`;
}

setInterval(setTime, 1000);