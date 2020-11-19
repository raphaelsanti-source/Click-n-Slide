var ifWonInter
var ifHighInter
var shuffleInter
let stringo = document.cookie
let tab3 = []
let tab4 = []
let tab5 = []
let tab6 = []
class Tile {
    constructor(_number, _orderX, _orderY, _order) {
        this.size = _number
        this.num = _order
        this.side = 600 / _number + "px"
        this.imgPosX = -600 / _number * _orderY + "px"
        this.imgPosY = -600 / _number * _orderX + "px"
    }
    buildOne() {
        let single = document.createElement("div")
        single.className = "tile"
        single.style.height = this.side
        single.style.width = this.side
        if (this.num != this.size ** 2) {
            let acterImg = document.getElementById("activeImg").innerHTML
            switch (acterImg) {
                case "1":
                    single.style.backgroundImage = "url('img/1.gif')"
                    break
                case "2":
                    single.style.backgroundImage = "url('img/2.gif')"
                    break
                case "3":
                    single.style.backgroundImage = "url('img/3.gif')"
                    break
            }
            single.style.backgroundRepeat = "no-repeat"
            single.style.backgroundPositionX = this.imgPosX
            single.style.backgroundPositionY = this.imgPosY
            single.innerHTML = "<p style='display: none;'>" + this.num + "</p>"
        } else {
            single.innerHTML = "<p style='display: none;'>blank</p>"
        }
        return single
    }
}
class Panel {
    constructor() {
        this.timer = document.createElement("div")
        this.timer.id = "timer"
        this.timer_num = document.createElement("div")
        this.timer_num.id = "timer_num"
        this.timers = document.createElement("div")
        this.timers.display = "none"
        this.timers.id = "timers"
        this.timers.style.display = "none"
        this.timers.innerHTML = "00:00:00:000"
        this.counter = document.createElement("div")
        this.counter.id = "counter"
        this.counter.innerHTML = "Ilość ruchów: 0"
        this.area = document.createElement("div")
        this.area.id = "area"
        this.prize = document.createElement("div")
        this.prize.id = "overlay"
        this.prize.style.top = screen.height / 2 - 175 + "px"
        this.prize.style.left = screen.width / 2 - 250 + "px"
        this.prize.style.display = "none"
        this.timer.appendChild(this.timer_num)
        this.timer.appendChild(this.timers)
    }
    buildGame() {
        ui.appendChild(this.timer)
        ui.appendChild(this.counter)
        ui.appendChild(this.area)
        ui.appendChild(this.prize)
    }
    /*
    changeActiveImg() {
        activeImg = this.activeImg
    }
    */
}
function random(min, max) {
    return min + Math.floor((max - min) * Math.random())
}
function refresh(positions, area) {
    area.innerHTML = ""
    positions.forEach((row) => {
        row.forEach((column) => {
            area.appendChild(column)
        })
    })
}
function highNoon(gameTime, firstDate) {
    let timer1 = document.getElementById("timer_num")
    let timer2 = document.getElementById("timers")
    let newHour = new Date(Date.now() - firstDate)
    //gameTime = ((newHour.getHours() - 1) + ":" + newHour.getMinutes() + ":" + newHour.getSeconds() + ":" + newHour.getMilliseconds())
    if (newHour.getHours() - 1 < 10) {
        gameTime += "0" + newHour.getHours() - 1 + ":"
    } else {
        gameTime += newHour.getHours() + ":"
    }
    if (newHour.getMinutes() < 10) {
        gameTime += "0" + newHour.getMinutes() + ":"
    } else {
        gameTime += newHour.getMinutes() + ":"
    }
    if (newHour.getSeconds() < 10) {
        gameTime += "0" + newHour.getSeconds() + ":"
    } else {
        gameTime += newHour.getSeconds() + ":"
    }
    if (newHour.getMilliseconds() < 10) {
        gameTime += "00" + newHour.getMilliseconds()
    } else if (newHour.getMilliseconds() < 100) {
        gameTime += "0" + newHour.getMilliseconds()
    } else {
        gameTime += newHour.getMilliseconds()
    }
    let new_czas = ""
    for (i = 0; i < gameTime.length; i++) {
        let char = gameTime.charAt(i)
        switch (char) {
            case "0":
                new_czas += "<img src='cyferki/c0.png'>"
                break
            case "1":
                new_czas += "<img src='cyferki/c1.png'>"
                break
            case "2":
                new_czas += "<img src='cyferki/c2.png'>"
                break
            case "3":
                new_czas += "<img src='cyferki/c3.png'>"
                break
            case "4":
                new_czas += "<img src='cyferki/c4.png'>"
                break
            case "5":
                new_czas += "<img src='cyferki/c5.png'>"
                break
            case "6":
                new_czas += "<img src='cyferki/c6.png'>"
                break
            case "7":
                new_czas += "<img src='cyferki/c7.png'>"
                break
            case "8":
                new_czas += "<img src='cyferki/c8.png'>"
                break
            case "9":
                new_czas += "<img src='cyferki/c9.png'>"
                break
            case ":":
                new_czas += "<img src='cyferki/colon.png'>"
                break
        }
    }
    timer1.innerHTML = new_czas
    timer2.innerHTML = gameTime
}
function ifWon(a, positions, winning, winCondition, gameTime, firstDate, moves) {
    ifWonInter = setInterval(ifWonTimer, 1, a, positions, winning, winCondition, gameTime, moves)
    ifHighInter = setInterval(ifHighTimer, 1, gameTime, firstDate)
    function ifHighTimer(gameTime, firstDate) {
        highNoon(gameTime, firstDate)
    }
    function ifWonTimer(a, positions, winning, winCondition, gameTime, moves) {
        winCondition = 0
        for (i = 0; i < a; i++) {
            for (j = 0; j < a; j++) {
                //let control1ST = winning[i][j]
                //let control2ND = positions[i][j].innerText
                //console.log(control1ST, control2ND + " takie jest")
                if (winning[i][j] == positions[i][j]) {
                    winCondition += 1
                }
            }
        }
        console.log(winCondition)
        if (winCondition == (a * a)) {
            clearInterval(ifHighInter)
            clearInterval(ifWonInter)
            let won = document.getElementById("overlay")
            let time = document.getElementById("timers").innerHTML
            let movesAmmount = document.getElementById("counter").innerHTML.slice(14)
            won.innerHTML = ""
            won.style.display = "block"
            //won.innerHTML = "<div style='display: flex; flex-direction: column; justify-content: center; align-items: center;'><h1>Kozak!</h1><br><h2>Ilość ruchów: " + movesAmmount + "<h2><h2>Twój czas:</h2><h2>" + time + "</h2><form><label for='nick'>Podaj swój nick:</label><br><input type='text' name='nick'><br><input type='submit'></form></div>"
            let zapasowy = document.createElement("div")
            zapasowy.id = "zapasowy"
            let kox = document.createElement("h1")
            kox.innerHTML = "Kozak!"
            zapasowy.appendChild(kox)
            let twojruch = document.createElement("h2")
            twojruch.innerHTML = "Ilość ruchów: " + movesAmmount
            zapasowy.appendChild(twojruch)
            let twojczas = document.createElement("h2")
            twojczas.innerHTML = "Twój czas:<br>" + time
            zapasowy.appendChild(twojczas)
            let twojform = document.createElement("form")
            let labelnick = document.createElement("label")
            labelnick.for = "nick"
            labelnick.innerHTML = "Podaj swój nick"
            let twojnick = document.createElement("input")
            twojnick.type = "text"
            twojnick.name = "nick"
            twojnick.id = "twojnick"
            let brka = document.createElement("br")
            let sendform = document.createElement("button")
            sendform.type = "submit"
            sendform.onclick = function () {
                won.style.display = "none"
                let nickvalue = document.getElementById("twojnick").value
                if (nickvalue !== "") {
                    console.log("jest ok")
                    if (document.cookie === "") {
                        document.cookie = "scores=" + "," + a + "|" + encodeURIComponent(nickvalue) + "|" + time + "|" + movesAmmount
                    } else {
                        let nadpis = document.cookie
                        document.cookie = nadpis + "," + a + "|" + encodeURIComponent(nickvalue) + "|" + time + "|" + movesAmmount
                    }
                } else {
                    console.log("nie podales nicku")
                }
            }
            sendform.innerHTML = "Wyślij"
            twojform.appendChild(labelnick)
            twojform.appendChild(brka)
            twojform.appendChild(twojnick)
            zapasowy.appendChild(twojform)
            zapasowy.appendChild(sendform)
            won.appendChild(zapasowy)
        }
    }
}
function cookiesParse(cookietab, tab3, tab4, tab5, tab6) {
    for (i = 0, third = 0, fourth = 0, fifth = 0, sixth = 0; i < cookietab.length; i++) {
        let obj = { nick: cookietab[i][1], time: cookietab[i][2], moves: cookietab[i][3] }
        switch (cookietab[i][0]) {
            case "3":
                tab3[third] = obj
                third++
                break
            case "4":
                tab4[fourth] = obj
                fourth++
                break
            case "5":
                tab5[fifth] = obj
                fifth++
                break
            case "6":
                tab6[sixth] = obj
                sixth++
                break
        }
    }
    //00:00:00:000
    tab3.sort(function (a, b) {
        return parseFloat(a.time.replace(/:/g, "")) - parseFloat(b.time.replace(/:/g, ""));
    });
    tab4.sort(function (a, b) {
        return parseFloat(a.time.replace(/:/g, "")) - parseFloat(b.time.replace(/:/g, ""));
    });
    tab5.sort(function (a, b) {
        return parseFloat(a.time.replace(/:/g, "")) - parseFloat(b.time.replace(/:/g, ""));
    });
    tab6.sort(function (a, b) {
        return parseFloat(a.time.replace(/:/g, "")) - parseFloat(b.time.replace(/:/g, ""));
    });
    function postawSeTablice(tablica, numer) {
        let tabelka = document.createElement("table")
        let trhname = document.createElement("tr")
        let thtitle = document.createElement("th")
        thtitle.innerHTML = "THE BEST OF 10 FOR" + numer + "x" + numer
        thtitle.colSpan = "3"
        trhname.appendChild(thtitle)
        tabelka.appendChild(trhname)
        let trh = document.createElement("tr")
        let th1 = document.createElement("th")
        th1.innerHTML = "Nick"
        let th2 = document.createElement("th")
        th2.innerHTML = "Czas"
        let th3 = document.createElement("th")
        th3.innerHTML = "Ruchy"
        trh.appendChild(th1)
        trh.appendChild(th2)
        trh.appendChild(th3)
        tabelka.appendChild(trh)
        if (tablica.length < 10) {
            for (j = 0; j < tablica.length; j++) {
                let tr = document.createElement("tr")
                let td1 = document.createElement("td")
                td1.innerHTML = decodeURIComponent(tablica[j].nick)
                let td2 = document.createElement("td")
                td2.innerHTML = tablica[j].time
                let td3 = document.createElement("td")
                td3.innerHTML = tablica[j].moves
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tabelka.appendChild(tr)
            }
        } else {
            for (j = 0; j < 10; j++) {
                let tr = document.createElement("tr")
                let td1 = document.createElement("td")
                td1.innerHTML = decodeURIComponent(tablica[j].nick)
                let td2 = document.createElement("td")
                td2.innerHTML = tablica[j].time
                let td3 = document.createElement("td")
                td3.innerHTML = tablica[j].moves
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tabelka.appendChild(tr)
            }
        }
        let cel = document.getElementById("change")
        cel.appendChild(tabelka)
    }
    postawSeTablice(tab3, 3)
    postawSeTablice(tab4, 4)
    postawSeTablice(tab5, 5)
    postawSeTablice(tab6, 6)
}
function move(a, positions, winning, winCondition, gameTime, firstDate, moves) {
    area.addEventListener('click', (event) => {
        const target = event.target
        let x, y
        positions.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                if (column === target) {
                    x = rowIndex
                    y = columnIndex
                }
            })
        });
        let blankX, blankY
        positions.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                if (column.innerHTML === '<p style="display: none;">blank</p>') {
                    blankX = rowIndex
                    blankY = columnIndex
                }
            })
        });
        let ifallowed = false
        if (y === blankY) {
            if (x + 1 === blankX || x - 1 === blankX) {
                ifallowed = true
            }
        }
        if (x === blankX) {
            if (y + 1 === blankY || y - 1 === blankY) {
                ifallowed = true
            }
        }
        if (ifallowed == true) {
            const temporary = positions[x][y]
            positions[x][y] = positions[blankX][blankY]
            positions[blankX][blankY] = temporary
            refresh(positions, area)
            moves += 1
            counter.innerHTML = "Ilość ruchów: " + moves
        }
    })
    firstDate = new Date(Date.now())
    //console.log(firstDate)
    ifWon(a, positions, winning, winCondition, gameTime, firstDate, moves)
}
function start(a, positions, winning, winCondition, gameTime, firstDate, moves) {
    clearInterval(ifWonInter)
    clearInterval(ifHighInter)
    clearInterval(shuffleInter)
    shuffleInter = setInterval(shuffleTimer, 1, a, positions)
    let timerStop = 0
    let lastH = 0
    let lastK = 0
    function shuffleTimer(a, positions) {
        let blankH, blankK
        positions.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                if (column.innerHTML === '<p style="display: none;">blank</p>') {
                    blankH = rowIndex
                    blankK = columnIndex
                }
            })
        });
        let h = random(0, a)
        let k = random(0, a)
        while (!((k === blankK && (h + 1 === blankH || h - 1 === blankH) || (h === blankH && (k + 1 === blankK || k - 1 === blankK)))) || (h !== lastH || k !== lastK)) {
            h = random(0, a)
            k = random(0, a)
            lastH = h
            lastK = k
        }
        //console.log("ok")
        const temporary = positions[h][k]
        positions[h][k] = positions[blankH][blankK]
        positions[blankH][blankK] = temporary
        refresh(positions, area)
        timerStop++
        if (timerStop == a ** (a + 2)) {
            clearInterval(shuffleInter)
            move(a, positions, winning, winCondition, gameTime, firstDate, moves)
        }
    }
}
class Game {
    constructor(_size) {
        this.size = _size
        this.positions = []
        this.winning = []
        this.winCondition = 0
        this.gameTime = 0
        this.firstDate = 0
        this.moves = 0
    }
}
function splitter(n, _what) {
    let many = 0
    for (i = 0; i < n; i++) {
        _what.positions[i] = []
        _what.winning[i] = []
        for (j = 0; j < n; j++) {
            many += 1
            let oneTile = new Tile(n, i, j, many)
            let single = oneTile.buildOne()
            _what.positions[i][j] = single
            _what.winning[i][j] = single
            area.appendChild(single)
        }
    }
    console.log(_what.positions)
    console.log(_what.winning)
}
function tileSet(n) {

    return () => {
        ui.innerHTML = ""
        let newPanel = new Panel()
        newPanel.buildGame()
        let newGame = new Game(n)
        splitter(n, newGame)
        start(newGame.size, newGame.positions, newGame.winning, newGame.winCondition, newGame.gameTime, newGame.firstDate, newGame.moves)
    }
}
function genrateButtons() {
    for (i = 3; i < 7; i++) {
        let but = document.createElement("button")
        but.innerHTML = i + "x" + i
        but.onclick = tileSet(i)
        buttons.appendChild(but)
    }
}
function hall() {
    let records = document.createElement("div")
    let ramka = document.createElement("div")
    let record = document.createElement("button")
    let close = document.createElement("button")
    let headline = document.createElement("h1")
    let change = document.createElement("div")
    change.id = "change"
    headline.innerHTML = "Hala Sław"
    headline.style.color = "whitesmoke"
    ramka.style.display = "flex"
    ramka.style.flexDirection = "column"
    ramka.style.justifyContent = "center"
    ramka.style.alignItems = "center"
    close.innerHTML = "Zamknij"
    close.style.width = "100px"
    close.onclick = function () {
        records.style.display = "none"
    }
    records.style.display = "none"
    record.innerHTML = "Hala Sław"
    record.style.width = "100px"
    record.onclick = function () {
        records.style.display = "block"
    }
    records.id = "hala"

    let tablet = document.createElement("table")

    document.body.appendChild(record)
    records.appendChild(ramka)
    ramka.appendChild(headline)
    ramka.appendChild(change)
    ramka.appendChild(close)
    document.body.appendChild(records)
}
function deleteCookies() {
    var allCookies = document.cookie.split(';');

    // The "expire" attribute of every cookie is  
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT" 
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires="
            + new Date(0).toUTCString();

}
let slider = document.createElement("div")
slider.id = "slider"
let arrowLeft = document.createElement("div")
let arrowRight = document.createElement("div")
arrowLeft.className = "arrow"
arrowLeft.innerHTML = '<i class="fas fa-arrow-left"></i>'
arrowLeft.onclick = function () {
    let target = document.getElementById("activeImg")
    switch (target.innerHTML) {
        case "1":
            document.querySelector("#img4").scrollIntoView({ behavior: "auto" })
            document.querySelector("#img3").scrollIntoView({ behavior: "smooth" })
            target.innerHTML = "3"
            break
        case "2":
            document.querySelector("#img1").scrollIntoView({ behavior: "smooth" })
            target.innerHTML = "1"
            break
        case "3":
            document.querySelector("#img2").scrollIntoView({ behavior: "smooth" })
            target.innerHTML = "2"
            break
    }
}
arrowRight.className = "arrow"
arrowRight.innerHTML = '<i class="fas fa-arrow-right"></i>'
arrowRight.onclick = function () {
    let target = document.getElementById("activeImg")
    switch (target.innerHTML) {
        case "1":
            document.querySelector("#img1").scrollIntoView({ behavior: "auto" })
            document.querySelector("#img2").scrollIntoView({ behavior: "smooth" })
            target.innerHTML = "2"
            break
        case "2":
            document.querySelector("#img3").scrollIntoView({ behavior: "smooth" })
            target.innerHTML = "3"
            break
        case "3":
            document.querySelector("#img4").scrollIntoView({ behavior: "smooth" })
            target.innerHTML = "1"
            break
    }
}
let sample = document.createElement("div")
sample.id = "sample"
let images = document.createElement("div")
images.id = "images"
let img1 = document.createElement("div")
img1.id = "img1"
let img2 = document.createElement("div")
img2.id = "img2"
let img3 = document.createElement("div")
img3.id = "img3"
let img4 = document.createElement("div")
img4.id = "img4"
images.appendChild(img1)
images.appendChild(img2)
images.appendChild(img3)
images.appendChild(img4)
sample.appendChild(images)
slider.appendChild(arrowLeft)
slider.appendChild(sample)
slider.appendChild(arrowRight)
/*let cookiedel = document.createElement("button")
cookiedel.style.width = "150px"
cookiedel.innerHTML = "Usuń ciasteczka"*/
//cookiedel.onclick = deleteCookies()
let buttons = document.createElement("div")
buttons.id = "buttons"
document.body.appendChild(slider)
document.body.appendChild(buttons)
let ui = document.createElement("div")
ui.id = "ui"
document.body.appendChild(ui)
let divActImg = document.createElement("div")
divActImg.innerHTML = "1"
divActImg.id = "activeImg"
divActImg.style.display = "none"
document.body.appendChild(divActImg)
genrateButtons()
hall()
//document.body.appendChild(cookiedel)
if (stringo !== "") {
    let tab = stringo.split(';').map(stringo => stringo.split('='))
    let stringo2 = tab[0][1]
    let cookietab = stringo2.split(',').map(stringo2 => stringo2.split('|'))
    cookiesParse(cookietab, tab3, tab4, tab5, tab6)
}