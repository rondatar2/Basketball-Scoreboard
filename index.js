const homePoint = document.getElementById('home-points-text')
const guestPoint = document.getElementById('guest-points-text')
const min = document.getElementById('minute')
const sec = document.getElementById('second')
const homeOnePointBtn = document.getElementById('home-one-point-btn')
const homeTwoPointBtn = document.getElementById('home-two-point-btn')
const homeThreePointBtn = document.getElementById('home-three-point-btn')
const guestOnePointBtn = document.getElementById('guest-one-point-btn')
const guestTwoPointBtn = document.getElementById('guest-two-point-btn')
const guestThreePointBtn = document.getElementById('guest-three-point-btn')
const quarter = document.getElementById('quarter')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const reset = document.getElementById('new')

//Home
homeOnePointBtn.addEventListener('click', function(){
    homePoint.textContent++
    limits(homePoint, homeOnePointBtn)
    lead(homePoint, guestPoint)
});
homeTwoPointBtn.addEventListener('click', function(){
    homePoint.textContent = Number(homePoint.textContent) + 2
    limits(homePoint, homeTwoPointBtn)
    lead(homePoint, guestPoint)
});
homeThreePointBtn.addEventListener('click', function(){
    homePoint.textContent = Number(homePoint.textContent) + 3
    limits(homePoint, homeThreePointBtn)
    lead(homePoint, guestPoint)
});

//Guest
guestOnePointBtn.addEventListener('click', function(){
    guestPoint.textContent++
    limits(guestPoint, guestOnePointBtn)
    lead(homePoint, guestPoint)
});
guestTwoPointBtn.addEventListener('click', function(){
    guestPoint.textContent = Number(guestPoint.textContent) + 2
    limits(guestPoint, guestTwoPointBtn)
    lead(homePoint, guestPoint)
});
guestThreePointBtn.addEventListener('click', function(){
    guestPoint.textContent = Number(guestPoint.textContent) + 3
    limits(guestPoint, guestThreePointBtn)
    lead(homePoint, guestPoint)
});

//limitation
function limits(points, button, opposite){
    if (points.textContent.length > 2){
        points.style.fontSize = '70px'
    }
    if (points.textContent > 998){
        button.style.pointerEvents = 'none'
        points.textContent = 999
        alert('Maximum of 999')
    }
}

//lead
function lead(home, guest){
    if (Number(home.textContent) > Number(guest.textContent)){
        home.style.borderColor = '#9AABD8'
        guest.style.borderColor = '#080001'
    }
    else if (Number(home.textContent) < Number(guest.textContent)){
        guest.style.borderColor = '#9AABD8'
        home.style.borderColor = '#080001'
    }
    else{
        home.style.borderColor = '#080001'
        guest.style.borderColor = '#080001'
    }
}

//quarter
quarter.addEventListener('click', function(){
    if (quarter.textContent == '1st Quarter'){
        quarter.textContent = '2nd Quarter'
    }
    else if (quarter.textContent == '2nd Quarter'){
        quarter.textContent = '3rd Quarter'
    }
    else if (quarter.textContent == '3rd Quarter'){
        quarter.textContent = '4th Quarter'
    }
    else {
        quarter.textContent = '1st Quarter'
    }
})

//timer
var isPaused = true
let time = 719
var timer = setInterval(() => {
    if (!isPaused && time >= 0){
        min.innerHTML = `${parseInt(time / 60, 10)}:`;
        sec.innerHTML = parseInt(time % 60, 10);
        time--
    }
    if (time < 0){
        alert("Time's Up!!!")
        time = 719
        isPaused = true
    }
}, 1000)

pause.addEventListener('click', (e) =>{
    e.preventDefault()
    isPaused = true
})

play.addEventListener('click', (e) => {
    e.preventDefault()
    isPaused = false
})
reset.addEventListener('click', (e) => {
    e.preventDefault()
    min.textContent = '12:'
    sec.innerHTML = '00'
    time = 719
    isPaused = true
    homePoint.textContent = 0
    guestPoint.textContent = 0
    homePoint.style.borderColor = '#080001'
    guestPoint.style.borderColor = '#080001'
})