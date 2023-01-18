'use strict'
document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('search-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            findFilms(undefined, e.target)
        })
    }
})



function findFilms(page = 1, form) {
    let titleField = form.querySelector('input[type=search]'),
        typeField = form.querySelector('select[name=type]');

    if (titleField.value.length === 0) {
        return;
    }

    axios({
        url: form.action, //e.target.getAttribute('action')
        method: form.method, //e.target.getAttribute('method')
        params: {
            s: titleField.value,
            type: typeField.value,
            page: page
        },
        responseType: 'json'
    })
        .then((res) => {
            let resultsBlock = document.getElementById('search-results');
            if (!resultsBlock) {
                return;
            }

            resultsBlock.innerHTML = '';
            removePagination();

            if (res.data.Error) {
                resultsBlock.innerHTML = res.data.Error
            } else if (res.data.Search && res.data.totalResults) {
                for (let i = 0; i < res.data.Search.length; i++) {
                    resultsBlock.append(createFilmItem(res.data.Search[i]));
                }

                addListenerToDetailsBtn(resultsBlock,res.data.Search);
                createPagination(res.data.totalResults, page);
                addListenerToPaginationItems();

            }
            // console.log(res.data)
        })
        .catch(() => resultsBlock.innerHTML = 'Error!')
}

function createFilmItem(item) {
    let el = document.createElement('div'),
        elPosterBlock = document.createElement('div'),
        elPosterImage = document.createElement('img'),
        elTitle = document.createElement('h4'),
        elYear = document.createElement('h4'),
        elButton = document.createElement('span');
        elDetails = document.createElement('p');

    el.classList.add('film-item');
    elPosterBlock.classList.add('film-item__block-image');
    elPosterImage.classList.add('film-item__image');
    elTitle.classList.add('film-item__title');
    elYear.classList.add('film-item__year');
    elButton.classList.add('film-item__button');
    elDetails.classList.add('film-item__details');


    elPosterImage.src = (item.Poster === 'N/A') ? 'assets/img/without-poster.jpg' : item.Poster;
    elPosterBlock.append(elPosterImage);
    elTitle.innerHTML = 'Name: ' + item.Title;
    elYear.innerHTML = 'Year: ' + item.Year ?? '-';
    elButton.innerHTML = 'ShowDetails';
    elButton.dataset.filmId = item.imdbID;

    el.append(elPosterBlock)
    el.append(elTitle)
    el.append(elYear)
    el.append(elButton)
    el.append(elDetails)

    return el
}

function createPagination(amount, currentPage) {
    let ul = document.getElementById('search-pagination');
    if(!ul) {
        return;
    }

    ul.innerHTML = '';

    for(let i = 0; i < amount/10; i++) {
        let el = document.createElement('li');
        el.innerHTML = i + 1;
        if (el.innerHTML == currentPage) {
            el.classList.add('active-page');
        }
        ul.append(el)
    }
}

function removePagination() {
    let ul = document.getElementById('search-pagination');
    ul.innerHTML = '';
}

function addListenerToPaginationItems() {
    let ulItems = document.querySelectorAll('#search-pagination li');
        form = document.getElementById('search-form');

    if(ulItems.length === 0) {
        return;
    }

    ulItems.forEach(item => {
        // console.log(item.classList.contains('active-page'));
        if (!item.classList.contains('active-page')) {
            item.addEventListener('click', (e) => {
                findFilms(e.target.innerText, form)
            })
        }
    })
}

function addListenerToDetailsBtn(block, array) {
    let detailsButtons = document.querySelectorAll('.film-item__button');

    if(detailsButtons.length === 0) {
        return;
    }

    detailsButtons.forEach(btn => btn.addEventListener('click', showFilmDetails))
}

function showFilmDetails () {
    let form = document.getElementById('search-form'),
        infoBtn = this,
        filmInfo = this.nextSibling;
        if (infoBtn.classList.contains('active')) {
            filmInfo.innerHTML = '';
            infoBtn.classList.remove('active')
            infoBtn.innerHTML = 'Show Details'
            return;
        }
    axios({
        url: form.action,
        method: form.method,
        params: {
            i: this.dataset.filmId,
            plot: 'short'
        },
        responseType: 'json'
    })
    .then (res => {
        console.log(res);
        if (filmInfo.classList.contains('film-item__details')) {
            filmInfo.innerHTML = res.data.Plot
            infoBtn.innerHTML = 'Close Details'
            infoBtn.classList.add('active')
        }
    })
    .catch ( () => {
        filmInfo.innerHTML = 'Error!'
    })
}