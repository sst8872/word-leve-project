import '../css/style.css';
import jsonData from './json';

const posts = {
    postPerpage: 10,
    currentPage: 1,
    results: null
};
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');


window.addEventListener('load', init);

function init(e) {
    // Grid wrapper displaying message
    let div = document.createElement('div');
    div.setAttribute('class', 'message wrapper');
    div.innerText = 'Press start button';
    wrapper.appendChild(div);

    // Start button
    let button = document.createElement('button');
    button.type = button;
    button.setAttribute('class', 'start');
    button.textContent = "Start Study";
    button.addEventListener('click', loadJSON);
    wrapper.appendChild(button);

    // Game element
    let game = document.createElement('div');
    game.classList.add('game');
    wrapper.appendChild(game);
}

function loadJSON() {
    let temp =[...[...jsonData]];
    let result = temp.map(arr => {
        return arr.map(([a,b]) => {
            return { en: a, ko: b };
        });
    });
    posts.results = result;
    console.log(posts.results);
    loadPage(0);
}

function loadPage(page) {
    posts.currentPage = page;
    document.querySelector('.index').classList.remove('hidden');
    document.querySelector('.start').style.display = 'none';
    message("Check the Word Meaning");
    let myWords = shuffle(posts.results[page]);
    const game = document.querySelector('.game');
    myWords.forEach(word => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerText = word.en;
        box.addEventListener('mouseenter', function (e) {
            box.style.backgroundColor = "#4CAF50";
            box.innerText = word.ko;
        });
        box.addEventListener('mouseleave', function (e) {
            box.style.backgroundColor = '#3b5998';
            box.innerText = word.en;
        })
        game.appendChild(box);
    });

    prev.addEventListener('click', function (e) {
        document.querySelector('.game').innerHTML = '';
        posts.currentPage -= 1;
        console.log('prev', posts.currentPage);
        // loadPage(posts.currentPage);
    });

    next.addEventListener('click', function (e) {
        document.querySelector('.game').innerHTML = '';
        posts.currentPage += 1;
        loadPage(posts.currentPage);
    });
}

function message(output) {
    document.querySelector('.message').innerHTML = output;
}


function shuffle (arr) {
    var n = arr.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

// let myWords = [
//     { en: "measure", ko: "법안" },
//     { en: "disease", ko: "질병" },
//     { en: "vehicle", ko: "차량" },
//     { en: "warn", ko: "경고하다" },
//     { en: "persuade", ko: "설득하다" },
//     { en: "freezing", ko: "동결" },
//     { en: "wipe", ko: "닦다" },
//     { en: "severe", ko: "심한" },
//     { en: "muscle", ko: "근육" },
//     { en: "crop", ko: "곡물" },
//     { en: "amazing", ko: "놀라운" },
//     { en: "agriculture", ko: "농업" },
//     { en: "long", ko: "갈망하다" },
//     { en: "leak", ko: "새다" },
//     { en: "pulse", ko: "맥박" },
//     { en: "military", ko: "군" },
//     { en: "approach", ko: "접근" },
//     { en: "pity", ko: "불쌍한" },
//     { en: "aware", ko: "알고 있는" },
//     { en: "guilty", ko: "죄 있는" },
//     { en: "innocent", ko: "순진한" },
//     { en: "pot", ko: "냄비" },
//     { en: "port", ko: "항구" },
//     { en: "porter", ko: "짐꾼" },
//     { en: "import", ko: "수입하다" },
//     { en: "transport", ko: "운송하다" },
//     { en: "support", ko: "지원하다" },
//     { en: "portable", ko: "휴대 가능한" },
//     { en: "potable", ko: "마실 수 있는" },
//     { en: "leap", ko: "뛰다" },
//     { en: "reap", ko: "수확하다" },
// ]
