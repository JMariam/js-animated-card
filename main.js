const header = document.getElementById('header')
const title= document.getElementById('title')
const excerpts = document.getElementById('excerpts')
const profileImg = document.getElementById('profile-img')
const namee = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500);

function getData (){
    header.innerHTML = '<img src="./im1.jpg.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpts.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, placeat!'
    profileImg.innerHTML = '<img src="./Ellipse 4.png" alt="">'
    namee.innerHTML = 'John Doe'
    date.innerHTML = 'Feb 11, 2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}