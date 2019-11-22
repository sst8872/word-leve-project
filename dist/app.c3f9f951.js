// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/navbar.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/json.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var jsonData = [[["measure", "법안"], ["disease", "질병"], ["vehicle", "차량"], ["warn", "경고하다"], ["persuade", "설득"], ["freezing", "동결"], ["wipe", "닦음"], ["severe", "심한"], ["muscle", "근육"], ["crop", "수확고"], ["amazing", "놀랄 만한"], ["agriculture", "농업"], ["long", "긴"], ["leak", "새는 곳"], ["pulse", "펄스"], ["military", "군"], ["approach", "접근, 접근법, 진입, 가까이가는 길, 친근 책, 착륙 진입, 닥치다, 가까이 가다, 다가 가다, 접근시키다, 착수하다, 연구하다, 다가오다, 가깝다,들이 닥치다"], ["pity", "동정"], ["aware", "인식"], ["guilty", "저지른"], ["innocent", "순진한"], ["pot", "냄비"], ["port", "포트"], ["porter", "문지기"], ["import", "수입"], ["transport", "수송"], ["support", "지원하다"]], [["tidy", "깔끔한"], ["neat", "산뜻한"], ["associate", "동무"], ["permanent", "영구적 인"], ["settle", "치르다"], ["treasure", "보물"], ["fare", "요금"], ["condemn", "비난"], ["slight", "근소한"], ["atmosphere ?", "분위기?"], ["nod", "목례"], ["mobile", "변하기 쉬운"], ["swear", "저주"], ["award", "장학금"], ["fault ?", "잘못?"], ["fatal", "치명적인"], ["scratch", "할퀴다"], ["firm ??", "회사 ??"], ["goat ?", "염소?"], ["alarm", "경보"], ["flat", "플랫"], ["spill ?", "엎지르다 ?"], ["dumb", "우둔한"], ["depict", "들을 도시"], ["degrade", "디그레이"], ["detect ?", "감지?"], ["ascend", "오르다"], ["descend", "내려 가다"], ["population ?", "인구?"], ["popular ?", "인기?"], ["wander", "방황"]], [["bruise", "타박상"], ["murder", "살인"], ["share", "공유"], ["injure", "해치다"], ["dawn", "새벽"], ["complain", "불평하다"], ["stand", "대"], ["responsibility", "책임"], ["amount", "양"], ["conduct", "행위"], ["threat", "위협"], ["badly", "심하게"], ["closely", "면밀히"], ["deaf", "귀머거리"], ["contact", "접촉"], ["merchandise", "상품"], ["merchant", "상인"], ["search", "검색"], ["ignore", "무시하다"], ["district", "지구"], ["delicious", "맛있는"], ["organization", "조직"], ["depend", "의존하다"], ["independence", "독립"], ["backward", "뒤로"], ["inward", "내심"], ["toward", "...쪽으로"], ["outward", "외부"], ["forward", "앞으로"], ["envious", "부러워"], ["enviable", "부러워"], ["ethics", "윤리학"], ["ethical", "윤리적"]], [["desperate", "필사적"], ["fury", "격노"], ["burden", "부담"], ["spare", "여윈"], ["participate", "참가하다"], ["hasty", "급한"], ["divorce", "이혼"], ["secure", "안전한"], ["acknowledge", "인정하다"], ["volunteer", "지원자"], ["accept", "동의하기"], ["quality", "품질"], ["quantity", "수량"], ["vote", "투표"], ["divide", "분할"], ["individual", "개인"], ["deposit", "예금"], ["serious", "진지한"], ["force", "힘"], ["apparent", "명백한"], ["treatment", "치료"], ["aid", "도움"], ["treatment", "치료"], ["join", "붙다"], ["disabled", "비활성화"], ["disgrace", "불명예"], ["disorder", "무질서"], ["discard", "포기"], ["disrespectful", "무례한"], ["disharmony", "불일치"], ["discontinue", "폐하다"], ["wind", "바람"], ["wound", "상처"]], [["drastic", "격렬한"], ["locate", "위치하고 있다"], ["chase", "추적"], ["spot", "자리"], ["save", "저장하기"], ["contaminate", "오염시키다"], ["solid", "고체"], ["deal", "거래"], ["fairy", "요정"], ["deaf", "귀머거리"], ["property", "속성"], ["fame", "명성"], ["altogether", "전부"], ["tradition", "전통"], ["heavily", "무겁게"], ["drop", "하락"], ["celebrate", "세상에 알리다"], ["surround", "둘러 싸다"], ["order", "주문"], ["cancer", "암"], ["argue", "논하다"], ["uniform", "제복"], ["unique", "독특한"], ["unit", "단위"], ["union", "노동 조합"], ["reunion", "재결합"], ["unite", "함께 가지다"], ["unity", "통일"], ["attach", "붙이다"], ["detach", "떼다"]], [["gravity", "중량"], ["cancel", "취소"], ["overcome", "이기다"], ["method", "방법"], ["heal", "고치다"], ["employ", "고용"], ["tendency", "경향"], ["intention", "의향"], ["medicine", "의학"], ["medical", "의료"], ["organization", "조직"], ["relate deny", "거부하다"], ["equipment", "장비"], ["admit ?", "들이다, 넣다, 허락하다, 수용하다, 여지가있다, 들어갈 수단이되다, 접근 할 수단이되다, 인접하다 ?"], ["determine", "결정"], ["witness", "증거"], ["destruction", "파괴"], ["mental", "지적인"], ["current", "흐름"], ["proper", "적절한"], ["recently", "최근에"], ["faith", "신앙"], ["exterior", "외부"], ["escape", "탈출"], ["extent", "범위"], ["explorer", "탐침"], ["explode", "터지다"], ["desert", "사막"], ["sow", "암퇘지"], ["sew", "꿰매다"], ["saw", "보았다"]], [["horizon", "수평선"], ["stand", "대"], ["peel", "껍질"], ["calm", "고요한"], ["dare", "도전"], ["devote", "바치다"], ["murder", "살인"], ["scenery", "풍경"], ["amount", "양"], ["rapid", "빠른"], ["scent", "냄새"], ["nowadays", "요즘"], ["resemblance", "유사"], ["reduce", "줄이다"], ["eraser", "지우개"], ["sore", "아픈"], ["factor", "인자"], ["contain", "함유하다, 포함하다"], ["permit", "허가"], ["global", "글로벌"], ["misleading", "오도하는"], ["misplace", "잘못 놓다"], ["mischance", "불행"], ["misfortune", "불행"], ["mistrust", "불신"], ["misunderstand", "오해하다"], ["misdeed", "악행"], ["misfire", "불발"], ["misspell", "철자가 틀리다"], ["last", "마지막"], ["latest", "최근"], ["lately", "최근"]], [["embarrass", "부끄러운"], ["heedless", "주의없이"], ["grumble", "불평하다"], ["military", "군"], ["voyage", "항해"], ["dot", "점"], ["depend", "의존하다"], ["independence", "독립"], ["concerned", "걱정"], ["crucial", "결정적인"], ["possess", "붙잡다"], ["capacity", "생산 능력"], ["recognize", "인식하다"], ["modern", "현대"], ["climate ?", "기후 ?"], ["pollution", "타락"], ["generous", "풍부한"], ["separate", "갈라진"], ["continent", "대륙"], ["exhibit", "전시회"], ["mention", "언급하다"], ["grain", "곡물"], ["prosper", "번영"], ["prevent", "막다"], ["prepare", "준비하다"], ["prefer", "취하다"], ["previous", "이전"], ["precious", "귀한"], ["increase", "증가하다"], ["decrease", "감소"], ["consider", "치다"], ["considerable", "많은"], ["considerate", "배려"]], [["drastic", "격렬한"], ["sigh", "한숨"], ["main", "본관"], ["destination", "목적지"], ["destiny", "운명"], ["sweat", "땀"], ["purpose", "목적"], ["hold", "보류"], ["handle", "핸들"], ["weigh", "달다"], ["contend", "다투다"], ["record", "기록"], ["tongue", "혀"], ["urgent", "긴급한"], ["anxious", "근심"], ["anxiety", "걱정"], ["species", "종"], ["familiar", "익숙한"], ["planet", "행성"], ["commercial", "상업용"], ["bucket", "버킷"], ["arrange", "배열하다"], ["belong", "있다"], ["scream", "비명"], ["operate", "작동"], ["cooperation", "협력"], ["influence", "영향"], ["fluid", "유동체"], ["influenza", "인플루엔자"], ["fluent", "유창한"], ["robbery", "강도"], ["mean", "평균"], ["means", "방법"]], [["immediate", "즉시"], ["grief", "고통"], ["despite", "무례"], ["approach", "접근, 접근법, 진입, 가까이가는 길, 친근 책, 착륙 진입, 닥치다, 가까이 가다, 다가 가다, 접근시키다, 착수하다, 연구하다, 다가오다, 가깝다,들이 닥치다"], ["chemistry", "화학"], ["gradual", "점진적"], ["cultivate", "기르다"], ["view", "전망"], ["punish", "벌하다"], ["appeal", "항소"], ["pretend ?", "척?"], ["nervous", "불안해하는, 불안한, 떨리는"], ["consume", "바싹 여위다"], ["oppose", "대들다"], ["race", "경주"], ["avoid", "기피"], ["preserve ?", "보호하다 ?"], ["emphasize", "강조하다"], ["positive ?", "긍정적?"], ["figure", "그림"], ["mechanical", "기계적"], ["lessen", "적게 하다"], ["organ", "오르간"], ["confuse", "휘두르다"], ["community", "커뮤니티"], ["consult", "찾다"], ["compose", "짓다"], ["quit", "떠나다"], ["bald", "노골적인"], ["bold", "대담한"]], [["exhaust", "배출"], ["opportunity", "기회"], ["fundamental", "근본적인"], ["navigation", "항해"], ["capable", "유능한"], ["origin", "유래"], ["average", "평균"], ["notice", "주의"], ["author", "저자"], ["overhead", "간접비"], ["fashionable", "유행"], ["form", "형태"], ["polar", "극선"], ["laboratory", "실험실"], ["stream", "흐름"], ["lean", "기대다"], ["legend", "전설"], ["advertise", "공시 하다"], ["delay", "지연"], ["route", "노선"], ["peninsula", "반도"], ["edge", "가장자리"], ["civil", "예의 바른"], ["civilization", "문명"], ["terrible", "무서운"], ["focus", "초점"], ["impureccc", "불순"], ["imply", "암시"], ["improve", "돌리다"], ["conceive", "배다"], ["perceive", "지각하다"], ["deceive", "속이다"]], [["bomb", "폭탄"], ["enable", "가능하게하다"], ["seldom", "드물게"], ["free", "비어 있는"], ["exactly", "바로 그거죠"], ["carefree", "평온한"], ["rather", "차라리"], ["seldom", "드물게"], ["accustom", "익숙한"], ["contrary", "반대로"], ["construct", "구성하다"], ["entire", "완전한"], ["festive", "축제"], ["pharmacy", "조제"], ["room", "방"], ["risk", "위험"], ["profit", "이익"], ["climb", "상승"], ["fascinate", "홀리다"], ["forgive", "용서하다"], ["content", "함유량"], ["instruct", "지시하다"], ["interior", "내부"], ["instrument", "악기"], ["incident ?", "사건?"], ["insist", "주장"], ["investment", "투자"], ["invade", "침입하다"], ["income", "수입"], ["install ?", "설치 ?"], ["row ?", "행?"], ["raw ???", "익지 않는 ???"], ["loosen", "늦추다"]], [["endure", "견디다"], ["declare", "알리다"], ["claim", "청구"], ["junior", "후진"], ["clap", "박수"], ["beverage", "마실 것"], ["grant", "부여"], ["sparrow", "참새"], ["combat", "전투"], ["present", "선물"], ["explanation", "설명"], ["fix", "고치다"], ["delight", "기쁨"], ["structure", "구조"], ["theory", "이론"], ["strict ?", "엄격한?"], ["store", "저장"], ["clue", "실마리"], ["praise ?", "칭찬?"], ["comfort", "위로"], ["meal", "식사"], ["sideboard", "찬장"], ["bulletin", "회보"], ["consent", "동의"], ["resent", "화내다"], ["sensible", "현명한"], ["sensitive", "민감한"], ["sensation", "감각"], ["sentiment", "감정"], ["abroad", "널리"], ["aboard", "배로"], ["broad", "넓은"], ["board", "판"]], [["decorate", "장식하다"], ["fit", "적당한"], ["float ?", "플로트?"], ["entertain", "즐겁게 하다"], ["soil", "흙"], ["seek", "찾다. 목표물 탐색"], ["watchful", "주의 깊은"], ["greet", "인사"], ["bone", "뼈"], ["ray", "레이"], ["capture", "포착"], ["achieve", "이루다"], ["rude", "거친"], ["flame", "불꽃"], ["brilliant ?", "훌륭한 ?"], ["rude", "거친"], ["flame", "불꽃"], ["brilliant", "훌륭한"], ["philosopher", "철학자"], ["mammal", "포유류"], ["male", "남성"], ["female", "여자"], ["whisper ?", "속삭임?"], ["press", "프레스"], ["pressure", "압력"], ["depress", "내리 누르다"], ["express", "표현하다"], ["oppress", "억압하다"], ["suppress", "막다"], ["impression", "인상"], ["arms", "무기"], ["borrow", "취하다"], ["lend", "빌려주 다"]], [["tidy", "깔끔한"], ["neat", "산뜻한"], ["associate", "동무"], ["permanent", "영구적 인"], ["settle", "치르다"], ["treasure", "보물"], ["fare", "요금"], ["condemn", "비난"], ["slight", "근소한"], ["atmosphere ?", "분위기?"], ["nod", "목례"], ["mobile", "변하기 쉬운"], ["swear", "저주"], ["award", "장학금"], ["fault ?", "잘못?"], ["fatal", "치명적인"], ["scratch", "할퀴다"], ["firm ??", "회사 ??"], ["goat ?", "염소?"], ["alarm", "경보"], ["flat", "플랫"], ["spill ?", "엎지르다 ?"], ["dumb", "우둔한"], ["depict", "들을 도시"], ["degrade", "디그레이"], ["detect ?", "감지?"], ["ascend", "오르다"], ["descend", "내려 가다"], ["population ?", "인구?"], ["popular ?", "인기?"], ["wander", "방황"]], [["laundry", "세탁"], ["delicious", "맛있는"], ["trait", "특성"], ["personality", "인격"], ["noble", "고귀한"], ["ignoble", "하등의"], ["pregnancy ?", "임신?"], ["provide", "제공"], ["temperature ?", "온도?"], ["anniversary", "기념일"], ["lawn", "잔디"], ["leave", "떠나다. 남기다. 맡기다. 출발하다"], [false, "그릇된"], ["assist", "돕다"], ["dish", "요리"], ["education", "교육"], ["judge", "판사"], ["challenge", "도전"], ["combination", "콤비네이션"], ["guard", "가드"], ["rebuild", "다시"], ["restore", "복원"], ["resign", "사직하다"], ["repute ?", "평판?"], ["retire", "은퇴"], ["republic", "공화국"], ["reaction", "반응"], ["refresh", "새롭게 하다"], ["greed", "욕심"], ["apply ?", "적용?"]], [["candidate", "후보자"], ["rural", "시골의"], ["urban", "도시의"], ["department", "부서"], ["devil", "악마"], ["controversy", "논쟁"], ["role", "역할"], ["evil", "악"], ["humble", "겸손한"], ["garage", "차고"], ["narrate", "말하다"], ["annual", "일년생 식물"], ["withdraw (?)", "철수 (?)"], ["mature", "성숙한"], ["overlook", "간과"], ["moisture", "수분"], ["concentration", "농도"], ["advantage", "이점"], ["undertake", "맡다"], ["relieve", "펴다"], ["research", "연구"], ["remarkable", "주목할 만한"], ["refuse", "폐물"], ["reply", "댓글"], ["reject", "받지 않다"], ["remove", "없애다"], ["rely", "의존"], ["ripe", "익은"], ["conscious (X)", "의식 (X)"], ["conscience", "양심"]], [["meadow", "목초지"], ["jewel", "보석"], ["worth", "가치"], ["plain", "평원"], ["pale", "창백한"], ["landscape", "경치"], ["nightmare", "악몽"], ["slip", "슬립"], ["monster", "괴물"], ["deliver", "배달"], ["labor (?)", "노동 (?)"], ["wrap", "덮개"], ["satellite", "위성"], ["blame", "비난"], ["colony", "식민지"], ["torrent (?)", "토런트 (?)"], ["defeat", "패배"], ["wheat", "밀"], ["timely", "시기 적절한"], ["situation", "상태"], ["tide (?)", "조수 (?)"], ["recycle", "재활용"], ["represent", "말하다"], ["repair", "수리"], ["reflect", "비추다"], ["renew", "고쳐 쓰다"], ["reward", "보상"], ["reserve", "비축"], ["restrict", "얽매다"], ["compare", "비교"], ["ensure", "안전하게 하다"], ["insure", "안전하게 하다"]], [["gaze", "시선"], ["accuse (?)", "비난 (?)"], ["pierce", "내뚫다"], ["deserve", "받을 만하다"], ["diameter", "직경"], ["charge", "요금"], ["release", "해제"], ["gain", "이득"], ["polite (?)", "공손한 (?)"], ["typical", "전형적인"], ["burglary", "주거 침입"], ["owe", "지고 있다"], ["indicate", "가리키다"], ["fuel", "연료"], ["purchase", "매수"], ["limit", "한도"], ["sentence (?)", "문장 (?)"], ["upset", "당황"], ["right", "권리"], ["funeral (?)", "장례식 (?)"], ["available (?)", "가능 (?)"], ["psychology", "심리학"], ["critical", "위독한"], ["eventually (?)", "결국 (?)"], ["-lect", "-lect"], ["collect", "수집"], ["recollect", "생각해 내다"], ["election", "선거"], ["select", "고르다"], ["confer", "봉하다"], ["infer", "미루다"], ["offer", "제공"]], [["coward (?)", "겁쟁이 (?)"], ["thrive (?)", "번창 (?)"], ["raise", "올리다"], ["period", "기간"], ["guarantee", "보증"], ["puzzle", "퍼즐"], ["dignity (?)", "품위 (?)"], ["crisis", "위기"], ["valid (?)", "유효 (?)"], ["native", "원주민"], ["interest", "관심"], ["bull", "황소"], ["goose", "거위"], ["silly", "바보"], ["end", "종료"], ["concise", "간결한"], ["frank", "솔직한"], ["weapon (?)", "무기 (?)"], ["bleed", "피"], ["fee", "회비"], ["lingual", "언어"], ["mall", "쇼핑 센터"], ["conquer", "억누르다"], ["obey", "순종"], ["conflict", "충돌"], ["tempo", "속도"], ["contemporary", "현대의"], ["temporary", "일시적인"], ["pill", "알약"], ["fill", "가득 따르다"], ["society", "사회"], ["social", "사회적인"]], [["sorrow", "슬픔"], ["degree", "정도"], ["tern", "세 개 한 세트"], ["adult", "성인"], ["electric", "전기 같은"], ["material", "재료"], ["appoint", "정하다"], ["effort", "노력"], ["pour", "붓다"], ["regulation", "규제"], ["attack", "공격"], ["fair", "공정한"], ["distinguish", "드러내다"], ["graduation", "졸업"], ["publish", "게시"], ["flood", "홍수"], ["poverty", "가난"], ["curious (?)", "궁금한 (?)"], ["lack", "결핍"], ["bright", "선명한"], ["major", "주요한"], ["aim (?)", "목표 (?)"], ["arrow", "화살"], ["subside", "앉다"], ["suburban", "교외의"], ["substance (?)", "물질 (?)"], ["submarine", "잠수함"], ["desire", "욕구"], ["physical", "물리적 인"], ["physics", "물리학"], ["physicist", "물리학 자"], ["physician", "내과 의사"]], [["mass", "질량"], ["fold", "겹"], ["work", "작업"], ["navy (?)", "해군 (?)"], ["compensation (?)", "보상 (?)"], ["reside", "살다"], ["protect (?)", "보호 (?)"], ["contend", "다투다"], ["occur", "나오다"], ["anxiety", "걱정"], ["local (?)", "로컬 (?)"], ["despair", "절망"], ["reasonable", "합리적인"], ["bucket", "버킷"], ["occasional", "가끔"], ["convince (?)", "설득 (?)"], ["counsel", "조언"], ["article", "조"], ["gather", "모으다"], ["scream", "비명"], ["differ", "다르다"], ["dump", "덤프"], ["drug", "약"], ["correct", "옳은"], ["rectangle", "직사각형"], ["direct", "곧장"], ["direction", "방향"], ["erect", "세우다"], ["election", "선거"], ["royal", "왕실의"], ["loyal", "충성스러운"], ["deadly", "치명적인"]], [["endeavor", "노력"], ["caution", "주의"], ["account", "계정"], ["arrest", "체포"], ["rid", "구하다"], ["curriculum", "과정"], ["halt (?)", "정지 (?)"], ["impact (?)", "충격 (?)"], ["genre", "유형"], ["nationality", "국적"], ["merely", "단지"], ["engage", "끌다"], ["regard", "관련"], ["regardless", "에 관계없이"], ["root", "뿌리"], ["overseas", "해외로"], ["overwhelm", "압도하다"], ["stink", "악취"], ["eager", "심한"], ["lest (?)", "않을까 (?)"], ["drill", "송곳"], ["discount", "할인"], ["slide", "미끄러지 다"], ["glide", "활주"], ["ancient", "고대"], ["ancestor", "선조"], ["advance (?)", "미리 (?)"], ["enhance (?)", "향상 (?)"], ["command", "명령"], ["comment", "논평"], ["demand", "수요"], ["recommend", "권하다"]], [["bruise", "타박상"], ["classify", "나누다"], ["turn", "회전"], ["wild", "야생"], ["ax", "도끼"], ["commit (?)", "커밋 (?)"], ["career", "직업"], ["will (n)", "것이다 (N)"], ["naked (?)", "알몸 (?)"], ["earthquake", "지진"], ["sprain", "삠"], ["pulp", "펄프"], ["horn", "뿔"], ["indeed (?)", "참 (?)"], ["billion", "십억"], ["bud", "싹"], ["bystander", "방관자"], ["ash", "금연 건강 증진 협회"], ["ashtray", "재떨이"], ["section", "부분"], ["grandeur", "장관"], ["canyon", "깊은 협곡"], ["dominant", "우성"], ["surgeon", "외과 의사"], ["arctic (?)", "북극 (?)"], ["antarctic", "남극의"], ["astronaut", "우주 비행사"], ["astronomy", "천문학"], ["astrology", "점성학"], ["disaster", "재앙"], ["hardship", "고난"], ["hardness", "경도"], ["politician", "정치가"]], [["bravery", "용감"], ["brutal", "잔인한"], ["assume", "취하다"], ["consequence", "결과"], ["fulfill", "다하다"], ["harm", "해"], ["ordinary", "보통주"], ["emigrant (?)", "이민 (?)"], ["leather (?)", "가죽 (?)"], ["dynasty", "왕조"], ["column", "기둥"], ["soul", "영혼"], ["notable", "주목할 만한"], ["trace (?)", "추적 (?)"], ["grateful", "기분 좋은"], ["alive", "살아 있는"], ["raid", "RAID"], ["pet", "착한 애"], ["fruitless", "보람 없는"], ["breakdown", "고장"], ["yacht", "요트"], ["dilemma", "양도 논법"], ["amuse (?)", "즐겁게 (?)"], ["audience", "청중"], ["auditorium", "강당"], ["audible", "들리는"], ["inaudible", "알아들을 수 없는"], ["jealous", "질투심 많은"], ["zealous", "열광적 인"], ["fell", "되다"]], [["breed", "일으키다"], ["alert", "경보"], ["run", "운영"], ["bid (?)", "입찰 (?)"], ["bend", "굽히다"], ["remote", "먼"], ["diet", "다이어트"], ["shelf (?)", "선반 (?)"], ["merit (?)", "장점 (?)"], ["temper (?)", "성질 (?)"], ["formal", "형식적인"], ["fantasy", "공상"], ["typhoon", "태풍"], ["bow", "활"], ["unlikely", "있을 것 같지 않게"], ["uncertain", "불확실한"], ["unchangeable", "불변"], ["flavor", "맛"], ["parallel", "평행"], ["square", "광장"], ["evergreen", "상록수"], ["biology", "생물학"], ["biography", "전기"], ["autography", "autography"], ["biochemistry", "생화학"], ["antibiotic", "항생 물질"], ["disinterested", "사심 없는"], ["uninterested", "무관심한"], ["observe", "관찰"], ["moral", "사기"], ["morale", "사기"]], [["designate", "가리키다"], ["fatigue", "피로"], ["head", "머리"], ["feed", "먹이다"], ["bride (?)", "신부 (?)"], ["bridegroom", "신랑"], ["stick", "스틱"], ["chop", "촙"], ["mushroom", "버섯"], ["dinosaur", "공룡"], ["refer", "보내다"], ["official", "공무원"], ["spirit", "정신"], ["coal (?)", "석탄 (?)"], ["dreadful", "무서운"], ["facility", "시설"], ["trial", "시도"], ["fiction", "소설"], ["survey", "서베이"], ["fable (?)", "우화 (?)"], ["concrete", "콘크리트"], ["party", "파티"], ["conclude", "끝내다"], ["include", "포함"], ["exclude", "들어오지 못하게 하다"], ["disclose", "드러내다"], ["enclose", "넣다"], ["blow", "타격"], ["brow", "이마"], ["add", "더하다"], ["edit", "편집하다"]], [["launch (?)", "출시 (?)"], ["trap (?)", "트랩 (?)"], ["face", "얼굴"], ["glacier", "빙하"], ["tropic", "회귀선"], ["ideal", "이상"], ["alien", "외계인"], ["excel", "뛰어나다"], ["folk", "사람들"], ["strip", "조각"], ["seed", "씨"], ["stare (?)", "응시 (?)"], ["horror", "공포"], ["finance", "재원"], ["feature", "특색"], ["shy", "수줍은"], ["range", "범위"], ["copper", "구리"], ["worship (?)", "예배 (?)"], ["frame (?)", "프레임 (?)"], ["gigantic", "거인 같은"], ["singular", "단수형"], ["fin-", "지느러미-"], ["final", "결정적인"], ["infinite", "무한의"], ["finale", "종악장"], ["definite", "명확한"], ["confine", "가두다"], ["decline", "쇠퇴"], ["incline", "경사"], ["practicable", "실행할 수 있는"], ["practical", "실용적인"]], [["domestic (?)", "국내 (?)"], ["splendid", "화려한"], ["count", "카운트"], ["jury", "배심"], ["venture", "투기"], ["leisurely", "여유 있는"], ["essence", "본질"], ["volume", "음량"], ["lift", "승강기"], ["liable", "책임"], ["straw", "빨대"], ["certify", "인증"], ["expert", "전문가"], ["tax", "세"], ["chief", "주요한"], ["awful", "무서운"], ["architecture (?)", "건축물 (?)"], ["beast (?)", "짐승 (?)"], ["mercy", "자비"], ["gene", "유전자"], ["genetics", "유전학"], ["gender (?)", "성 (?)"], ["transgender", "트랜스 젠더"], ["generate", "일으키다"], ["generalize", "일반화"], ["affect (?)", "영향을 미치다 (?)"], ["affection (?)", "애정 (?)"], ["effective", "유효한"], ["efficient (?)", "효율적인 (?)"], ["cause", "원인"]], [["pursue", "추구"], ["endow", "재산을 증여하다"], ["fire", "불"], ["fund", "축적"], ["complex (?)", "복잡한 (?)"], ["tiny", "작은"], ["cottage", "시골집"], ["adore", "경앙하다, 경모하다, 숭배하다, 아주 좋아하다"], ["nevertheless (?)", "그럼에도 불구하고 (?)"], ["parachute", "낙하산"], ["mount", "산"], ["echo", "에코"], ["cabin", "선실"], ["documentary", "기록한 것"], ["cheat", "사기"], ["barely", "간신히"], ["bare", "없는"], ["scarce (?)", "부족 (?)"], ["rare", "드문"], ["evaluate", "평가"], ["biography", "전기"], ["autograph", "자필"], ["autobiography", "자서전"], ["telegraph", "전신"], ["calligraphy", "달필"], ["paragraph", "절"], ["logograph", "logograph"], ["hardly", "애써서"], ["value", "값"], ["valueless", "가치 없는"], ["priceless", "값을 매길 수없는"], ["invaluable", "헤아릴"]], [["deplore", "비탄하다"], ["split", "스플릿"], ["match", "시합"], ["marvel", "마블"], ["goods", "상품"], ["passage", "통로"], ["actually", "사실은"], ["virtually (?)", "사실상 (?)"], ["telescope", "망원경"], ["microscope", "현미경"], ["beam", "빔"], ["notate", "표기하기"], ["penny", "페니"], ["spread", "전파"], ["widespread", "펼친"], ["trunk", "트렁크, 몸뚱이"], ["league", "리그"], ["twin", "쌍"], ["volcano", "화산"], ["pearl", "진주"], ["fragrant (?)", "향기 (?)"], ["deck", "갑판"], ["cone", "원뿔"], ["bamboo", "대나무"], ["legitimate", "본격적인"], ["legal", "적법한"], ["illegal", "불법"], ["through (?)", "을 통해 (?)"], ["thoroughly (?)", "철저하게 (?)"], ["foundation", "기초"]], [["tribe", "부족"], ["vehicle", "차량"], ["bar", "바"], ["baggage", "수하물"], ["statesman", "정치가"], ["millionaire", "백만 장자"], ["dusty (?)", "먼지 (?)"], ["brand", "상표"], ["ladder", "사다리"], ["mine", "나의 것"], ["tomb", "무덤"], ["hawk", "매"], ["imperial (?)", "제국 (?)"], ["empire (?)", "제국 (?)"], ["selfish", "이기적인"], ["specialize", "전문"], ["beneficial", "유익한"], ["oral", "경구"], ["liberal", "많은"], ["liberty", "자유"], ["dispute", "분쟁"], ["debate (?)", "토론 (?)"], ["refute", "반박하다"], ["literacy (?)", "능력 (?)"], ["literal", "오자"], ["literary", "문호"], ["object", "목적"], ["objective", "객관적인"], ["subject", "제목"], ["subjective (?)", "주관적 (?)"]], [["departure", "출발"], ["logic", "논리"], ["agent", "에이전트"], ["gallon", "갤런"], ["string (?)", "문자열 (?)"], ["gallery", "갤러리"], ["customs", "세관"], ["bible", "성경"], ["peach", "복숭아"], ["boom", "팔"], ["compass", "나침반"], ["sake", "때문"], ["crew", "크루"], ["mat", "매트"], ["pedal", "페달"], ["slogan", "슬로건"], ["geology", "지질학"], ["circumstance (?)", "상황 (?)"], ["estate", "재산"], ["establish (?)", "설정 (?)"], ["statue (?)", "동상 (?)"], ["status (?)", "상태 (?)"], ["stable (?)", "안정적인 (?)"], ["constant", "일정한"], ["institution (?)", "기관 (?)"], ["constitution (?)", "체질 (?)"], ["substitution (?)", "대체 (?)"], ["industry", "산업"], ["neglect (?)", "방치 (?)"]], [["detail", "세부 묘사"], ["thrust", "추력"], ["boundary (?)", "경계 (?)"], ["motto", "금언"], ["idiot", "백치"], ["rehearsal", "암송"], ["bulb", "구근"], ["cemetery", "묘지"], ["rib", "늑골"], ["sneeze", "재채기"], ["stripe", "줄무늬"], ["beep", "삑 하는 소리"], ["ideology", "관념론"], ["needle", "바늘"], ["apron", "앞치마"], ["ditch (?)", "도랑 (?)"], ["leopard", "표범"], ["suspect", "용의자"], ["suspicious", "의심 많은"], ["prospect", "전망"], ["spectacle", "안경"], ["specific (?)", "특정 (?)"], ["perspective (?)", "관점 (?)"], ["inspect", "검사"], ["despise (?)", "멸시 (?)"], ["aspect", "양상"], ["involve", "감다"], ["evolve", "진화"], ["revolution", "혁명"], ["resolute", "굳게 결심 한"], ["solution (?)", "해결책 (?)"]], [["afford", "형편이되다"], ["partial", "일부의"], ["envelope", "봉투"], ["chew", "씹다"], ["gray (?)", "회색 (?)"], ["bargain", "싸게 사는 물건"], ["fine", "좋아"], ["extreme", "극단"], ["pioneer", "개척자"], ["attempt", "시도"], ["fossil", "화석"], ["sphere", "구체"], ["bear", "곰"], ["emergency", "비상 사태"], ["particle", "입자"], ["sculpture", "조각"], ["score", "점수"], ["ashamed", "부끄러워"], ["demon", "악마"], ["digest", "요람"], ["textile (?)", "섬유 (?)"], ["rational", "합리적"], ["compassion", "측은히 여김"], ["sympathy", "공감"], ["passion", "열정"], ["antipathy", "반감"], ["elementary", "초보적인"], ["element (?)", "요소 (?)"], ["respond", "응창 성가"], ["correspond", "해당"]], [["decade (?)", "열개의 (?)"], ["illustrate", "설명"], ["riddle", "수수께끼"], ["behalf (?)", "대신 (?)"], ["arithmetic (?)", "산수 (?)"], ["eternal", "영원한"], ["nutrition", "영양물 섭취"], ["prior", "이전에"], ["trend", "경향"], ["holy", "거룩한"], ["border (?)", "경계 (?)"], ["suitable", "적당한"], ["ambitious", "거창한"], ["vessel", "용기"], ["loan", "차관"], ["modesty", "겸손"], ["still", "아직도"], ["overtake", "추월"], ["shallow", "얕은"], ["ceiling (?)", "천장 (?)"], ["jellyfish", "해파리"], ["aisle", "통로"], ["shed", "오두막"], ["manual", "설명서"], ["manage", "꾸리다"], ["manufacture", "제조"], ["sum", "합집합"], ["summary", "요약"], ["defense", "방어"], ["offense", "위반"]], [["tolerate", "참다"], ["housekeeper", "가정부"], ["entrant", "참가자"], ["bough", "큰 가지"], ["hydrogen", "수소"], ["alike", "서로 같은"], ["wastebasket", "휴지통"], ["barn", "외양간"], ["attic (?)", "다락방 (?)"], ["witch", "마녀"], ["wizard (?)", "마법사 (?)"], ["cannon (?)", "대포 (?)"], ["barley", "보리"], ["hitch (?)", "히치 (?)"], ["salmon", "연어"], ["diploma", "졸업 증서"], ["chef", "요리사"], ["dock", "독"], ["eyebrow", "눈썹"], ["mill", "밀"], ["treetop", "나무 꼭대기"], ["panel", "패널"], ["liver", "간"], ["antique", "고대 미술"], ["antedate", "고대하다"], ["anterior", "전의, 앞의"], ["anticipate", "앞서다"], ["violence", "폭력"], ["violation", "위반"], ["intellect", "지력"], ["intelligent", "지능형"]], [["choke", "초크"], ["starfish", "불가사리"], ["gull", "갈매기"], ["dragonfly", "잠자리"], ["hummingbird", "벌새"], ["vicious", "나쁜"], ["luxury", "사치"], ["optimist", "낙천주의 자"], ["pessimist", "비관론자"], ["layer", "층"], ["wellbeing", "안녕"], ["affair (?)", "외도 (?)"], ["resort", "의지"], ["appetite", "식욕"], ["imitate", "본뜨다"], ["sword", "검"], ["staff", "직원"], ["game", "경기"], ["stupid", "바보"], ["stuff", "물건"], ["slice", "일부분"], ["even", "조차"], ["odd", "이상한"], ["diminish", "줄다"], ["minimum", "최저한의"], ["minute", "분"], ["minor", "미성년자"], ["fume", "연기"], ["perfume", "향수"]], [["rag", "조각"], ["cell", "세포, 전지"], ["portray", "그리다"], ["beforehand", "미리"], ["masterpiece", "걸작"], ["cherish", "소중히 하다"], ["adhere", "준수"], ["pastime", "오락"], ["admiral", "해군 대장"], ["widow", "과부"], ["notion (?)", "개념 (?)"], ["bloom (?)", "꽃 (?)"], ["senior", "연장자"], ["melancholy", "우울"], ["fancy", "공상"], ["fierce", "맹렬한"], ["mud", "진흙"], ["priest", "성직자"], ["pine", "소나무"], ["jar", "항아리"], ["nap", "선잠"], ["fiber", "섬유"], ["filter", "필터"], ["simulate", "시뮬레이션"], ["indifferent", "무관심한"], ["similar", "비슷한"], ["simultaneous (?)", "동시 (?)"], ["spontaneous", "자발적인"], ["source", "출처"], ["resource", "자원"]], [["skip", "건너 뛰기"], ["cart", "카트"], ["hoop", "테두리"], ["razor", "면도칼"], ["dismay", "당황"], ["incentive", "자극"], ["context", "문맥"], ["carbon", "탄소"], ["grab", "붙잡다"], ["choir", "성가대"], ["micro", "마이크로"], ["crack", "갈라진 금"], ["shift", "시프트"], ["oak", "오크 나무"], ["cue", "큐"], ["Jew", "유태인"], ["freshman", "신입생"], ["oblige", "...하지 않을 수 없게하다"], ["swing", "그네"], ["spear", "창"], ["frontier", "국경 지방"], ["reed", "갈대"], ["toll", "희생"], ["sour (?)", "시어 (?)"], ["skylark", "종달새"], ["exist", "있다"], ["resist", "견디다"], ["consist", "이루어져 있다"], ["occupy", "차지하다"], ["occupation (?)", "직업 (?)"]], [["ridiculous", "어리석은"], ["analyze", "분석"], ["novel", "소설"], ["variety", "종류"], ["vertical", "수직선"], ["capital", "자본"], ["lord (?)", "주 (?)"], ["weep", "울다"], ["inner", "안의"], ["outer", "밖의"], ["media", "미디어"], ["cotton", "면"], ["equate", "같게 하다"], ["quack", "돌팔이 의사"], ["mate", "항해사"], ["veteran", "재향 군인"], ["rifle", "소총"], ["spice", "기미"], ["versus", "대"], ["mustache", "수염"], ["beard", "수염"], ["shave", "깎다"], ["frost (?)", "서리 (?)"], ["advocate", "변호사"], ["vocal", "보컬"], ["voice", "목소리"], ["vocabulary", "어휘"], ["prove", "알다"], ["approve", "승인"]]];
var _default = jsonData;
exports.default = _default;
},{}],"js/scrollAlarm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function scrollAlarm(e) {
  var res = this.scrollHeight - this.scrollTop === this.clientHeight;

  if (!this.scrollTop) {
    document.querySelector('.scroll-top').style.visibility = 'visible';
  } else if (res) {
    document.querySelector('.scroll-bottom').style.visibility = 'visible';
  } else {
    document.querySelector('.scroll-top').style.visibility = 'hidden';
    document.querySelector('.scroll-bottom').style.visibility = 'hidden';
  }
}

var _default = scrollAlarm;
exports.default = _default;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

require("../css/style.css");

require("../css/navbar.css");

var _json = _interopRequireDefault(require("./json"));

var _scrollAlarm = _interopRequireDefault(require("./scrollAlarm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var posts = {
  postPerpage: 10,
  currentPage: 0,
  results: null
};
var firstLoad = true;
var prev = document.querySelector('.previous');
var next = document.querySelector('.next');
window.addEventListener('load', init);
wrapper.addEventListener('scroll', _scrollAlarm.default);

function init(e) {
  // Grid wrapper displaying message
  var div = document.createElement('div');
  div.setAttribute('class', 'message wrapper'); // div.innerText = 'Press start button';

  wrapper.appendChild(div); // Start button

  var button = document.createElement('button');
  button.type = button;
  button.setAttribute('class', 'start');
  button.textContent = "Start Study";
  button.addEventListener('click', loadJSON);
  wrapper.appendChild(button); // Game element

  var game = document.createElement('div');
  game.classList.add('game');
  wrapper.insertBefore(game, document.querySelector('.index'));
}

function loadJSON() {
  var temp = _toConsumableArray(_json.default).concat();

  var result = temp.map(function (arr) {
    return arr.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];

      return {
        en: a,
        ko: b
      };
    });
  });
  posts.results = result;
  loadPage(0);
}

function loadPage(page) {
  document.querySelector('.game').innerHTML = '';
  posts.currentPage = page;

  if (firstLoad) {
    document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
    firstLoad = false;
  } else {
    document.querySelector('.numday').innerHTML = parseInt(posts.currentPage);
  }

  document.querySelector('.index').classList.remove('hidden');
  document.querySelector('.start').style.display = 'none';
  loadNav();
  loadNumbers();
  var myWords = shuffle(posts.results[page]);
  var game = document.querySelector('.game');
  myWords.forEach(function (word) {
    var box = document.createElement('div');
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
      var tooltipOutput = document.querySelector('.tooltip-output');
      tooltipOutput.style.display = 'none';
    });
    game.appendChild(box);
  });

  function add(a) {
    return a + 10;
  }

  function loadTooltips(event) {
    var tooltips = document.querySelectorAll('.tooltip-message');
    var tooltipOutput = document.querySelector('.tooltip-output');
    var myInterval; // clearInterval(myInterval);

    tooltipOutput.style.display = 'block';
    tooltipOutput.style.top = event.clientY + 5 + "px";
    tooltipOutput.style.left = event.clientX + 5 + "px";
    tooltipOutput.innerHTML = event.target.getAttribute("data-tooltip-message");
  }
}

function loadNumbers() {
  var numbers = document.querySelector('.numbers');
  numbers.innerHTML = '';
  posts.results.forEach(function (item, i) {
    var span = document.createElement('span');
    span.classList.add('number');
    span.textContent = i + 1;
    span.addEventListener('click', function (e) {
      numbers.innerHTML = '';
      document.querySelector('.game').innerHTML = '';
      loadPage(this.textContent);
    });
    numbers.appendChild(span);
  });
}

function loadNav() {
  document.querySelector('.navbar').classList.remove('hidden');
  document.querySelector('.day').textContent = "DAY-".concat(parseInt(posts.currentPage), " in ").concat(posts.results.length);
  document.querySelector('.openbtn').addEventListener('click', function (e) {
    document.getElementById('mySidenav').style.width = '270px';
  });
  document.querySelector('.closebtn').addEventListener('click', function (e) {
    document.getElementById('mySidenav').style.width = '0';
  }, false);
  document.body.addEventListener('mouseleave', function (e) {
    document.getElementById('mySidenav').style.width = '0';
  });
  document.querySelector('.shuffleWords').addEventListener('click', function (e) {
    document.querySelector('.game').innerHTML = '';
    loadPage(posts.currentPage);
    document.getElementById('mySidenav').style.width = '0';
  });
}

prev.addEventListener('click', function (e) {
  document.querySelector('.game').innerHTML = '';
  posts.currentPage--;
  loadPage(posts.currentPage);
  console.log(posts.currentPage);
});
next.addEventListener('click', function (e) {
  document.querySelector('.game').innerHTML = '';
  posts.currentPage++;
  loadPage(posts.currentPage);
  console.log(posts.currentPage);
});

function shuffle(arr) {
  var n = arr.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
} // let myWords = [
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
},{"../css/style.css":"css/style.css","../css/navbar.css":"css/navbar.css","./json":"js/json.js","./scrollAlarm":"js/scrollAlarm.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56069" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map