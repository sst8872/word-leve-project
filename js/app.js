import '../css/loader.css';
import '../css/style.css';
import '../css/navbar.css';
// import jsonData from './json';
import getSheetsLength from "./fetchSheetsLength";
import scrollAlarm from "./scrollAlarm";

let myData = [];

const posts = {
    postPerpage: 10,
    currentPage: 0,
    results: null
};
// let firstLoad = true;
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');


window.addEventListener('load', init);
wrapper.addEventListener('scroll', scrollAlarm);


function init(e) {
    // Grid wrapper displaying message
    let div = document.createElement('div');
    div.setAttribute('class', 'message wrapper');
    // div.innerText = 'Press start button';
    wrapper.appendChild(div);

    // Start button
    let button = document.createElement('button');
    button.type = button;
    button.setAttribute('class', 'start');
    button.textContent = "Start Study";
    button.addEventListener('click', () => getSheetsLength(loadJSON));
    wrapper.appendChild(button);


    // Game element
    let game = document.createElement('div');
    game.classList.add('game');
    wrapper.insertBefore(game, document.querySelector('.index'));
}

function loadJSON(sheetLength) {
    let urls = [];
    var sheetID = '1mgbYLvqlZ9FIRFbiIhg6C4SQZtHihCOME7f5m49Ze84';

    for (let sheetNum = 1; sheetNum <= sheetLength; sheetNum++) {
        let jsonURL = `https://spreadsheets.google.com/feeds/list/${sheetID}/${sheetNum}/public/values?alt=json`;
        urls = [...urls, jsonURL];
    }

    Promise.all(urls.map(url => {
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                let tempArr = [];
                let sheetName = data.feed.title.$t;
                data.feed.entry.forEach(item => {
                    let holder = {};
                    for (let key in item) {
                        if (key.substring(4) === 'english') {
                            holder.en = item[key].$t;
                        } else if (key.substring(4) === 'korean') {
                            holder.ko = item[key].$t;
                        }
                    }
                    tempArr = [...tempArr, holder];
                });
                return tempArr;
            })
    }))
        .then(result => {
            posts.results = result;
            loadPage(0);
            document.querySelector('.loader').style.display = 'none';
        });
}

function loadPage(page) {
    document.querySelector('.game').innerHTML = '';
    posts.currentPage = page;
    document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
    // if (firstLoad) {
    //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
    //     firstLoad = false;
    // } else {
    //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage);
    // }
    document.querySelector('.index').classList.remove('hidden');
    document.querySelector('.start').style.display = 'none';
    loadNav();
    loadNumbers();
    let myWords = shuffle(posts.results[page]);
    const game = document.querySelector('.game');
    myWords.forEach(word => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('tooltip-message');
        box.setAttribute('data-tooltip-message', word.en);
        box.innerText = word.en;
        box.addEventListener('mouseenter', function (e) {
            box.style.backgroundColor = "#4CAF50";
            box.innerText = word.ko;
            loadTooltips(e);
        });
        box.addEventListener('mouseleave', function (e) {
            box.style.backgroundColor = '#3b5998';
            box.innerText = word.en;

            const tooltipOutput = document.querySelector('.tooltip-output');
            tooltipOutput.style.display = 'none';
        });
        game.appendChild(box);
    });
    function add(a) {
        return a + 10;
    }


    function loadTooltips(event) {
        const tooltips = document.querySelectorAll('.tooltip-message');
        const tooltipOutput = document.querySelector('.tooltip-output');
        let myInterval;
        // clearInterval(myInterval);
        tooltipOutput.style.display = 'block';
        tooltipOutput.style.top = event.clientY + 5 + "px";
        tooltipOutput.style.left = event.clientX + 5 + "px";
        tooltipOutput.innerHTML = event.target.getAttribute("data-tooltip-message");
    }
}

function loadNumbers() {
    const numbers = document.querySelector('.numbers');
    numbers.innerHTML = '';
    posts.results.forEach((item, i) => {
        const span = document.createElement('span');
        span.classList.add('number');
        span.textContent = i + 1;
        span.addEventListener('click', function (e) {
            numbers.innerHTML = '';
            document.querySelector('.game').innerHTML = '';
            loadPage(parseInt(this.textContent) - 1);
        });
        numbers.appendChild(span);
    });
}

function loadNav() {
    document.querySelector('.navbar').classList.remove('hidden');
     document.querySelector('.day').textContent = `DAY-${parseInt(posts.currentPage) + 1} in ${posts.results.length}`;
     document.querySelector('.openbtn').addEventListener('click', function (e) {
            document.getElementById('mySidenav').style.width = '270px';
     });


    document.querySelector('.closebtn').addEventListener('click', function (e) {
            document.getElementById('mySidenav').style.width = '0';
     }, false);

     document.body.addEventListener('mouseleave', function (e) {
         document.getElementById('mySidenav').style.width = '0';
     })

    document.querySelector('.shuffleWords').addEventListener('click', function (e) {
        document.querySelector('.game').innerHTML = '';
        loadPage(posts.currentPage);
        document.getElementById('mySidenav').style.width = '0';
    });
}

prev.addEventListener('click', function (e) {
    if (posts.currentPage - 1 <= 0) {
        alert('Hey, No Negative Pages!');
        return;
    } else {
        document.querySelector('.game').innerHTML = '';
        posts.currentPage--;
        loadPage(posts.currentPage);
    }
});

next.addEventListener('click', function (e) {
    if (posts.currentPage + 1 >= posts.results.length) {
        alert('No More Pages!');
        return;
    } else {
        document.querySelector('.game').innerHTML = '';
        posts.currentPage++;
        loadPage(posts.currentPage);
        console.log(posts.currentPage);
    }
});


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
