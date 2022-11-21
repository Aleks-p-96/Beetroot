'use strict';

// 1.Створити сторінку, що показує нумерований список пісень:

const playList = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },
    
    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },
    
    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },

    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },
    
    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },
    
    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },
    
    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }

    ];
let divPlaylist = document.querySelector('.playlist');
let ol = document.createElement('ol');

for (let item of playList) {
    let ul = document.createElement('ul');
    let li = document.createElement('li')
    let author = document.createElement('li');
    let song = document.createElement('li');
    author.innerHTML = `Author: ${item.author}`;
    song.innerHTML = `Song: ${item.song}`;
    ol.append(li);
    li.append(ul);
    ul.append(author,song)
}
divPlaylist.append(ol);

// 2.Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає:

let openBtn = document.getElementById('btn-open'),
    closeBtn = document.getElementById('btn-close'),
    modalWindow = document.querySelector('.modal-window');

openBtn.onclick = function() {
    modalWindow.classList.remove('not-displayed');
}

closeBtn.onclick = function() {
    modalWindow.classList.add('not-displayed')
}

// 3.Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір:

const lightColors = ['red', 'yellow', 'green']
let lights = document.querySelectorAll('.traffic-light__elem ');
let lightsButton = document.querySelector('.traffic-button');
lightsButton.onclick = function() {
    for (let i = 0; i < lights.length; i++) {
        if (lights[i].classList.contains('active')) {
            console.log(lights[i]);
            console.log(lightColors[i]);
            lights[i].classList.remove('active');
            lightsButton.classList.remove(lightColors[i])
            if (i == lights.length - 1) {
                i = -1;
            }
            lightsButton.classList.add(lightColors[i + 1])
            lights[i + 1].classList.add('active');
            return;
        }
    }
}
