const stations = [

    {"id":  0, "x": 0, "y": 0, "type": "A", "train": false, "side": "Buda", "district":  0},
    {"id":  1, "x": 2, "y": 0, "type": "B", "train": false, "side": "Buda", "district":  1},
    {"id":  2, "x": 4, "y": 0, "type": "D", "train": false, "side": "Buda", "district":  2},
    {"id":  3, "x": 6, "y": 0, "type": "D", "train": false, "side": "Pest", "district":  2},
    {"id":  4, "x": 7, "y": 0, "type": "B", "train": false, "side": "Pest", "district":  3},
    {"id":  5, "x": 9, "y": 0, "type": "C", "train": false, "side": "Pest", "district":  4},
    {"id":  6, "x": 0, "y": 1, "type": "D", "train": false, "side": "Buda", "district":  1},
    {"id":  7, "x": 1, "y": 1, "type": "B", "train": false, "side": "Buda", "district":  1},
    {"id":  8, "x": 5, "y": 1, "type": "A", "train": false, "side": "Buda", "district":  2},
    {"id":  9, "x": 8, "y": 1, "type": "C", "train": false, "side": "Pest", "district":  3},
    {"id": 10, "x": 9, "y": 1, "type": "A", "train": false, "side": "Pest", "district":  3},
    {"id": 11, "x": 2, "y": 2, "type": "D", "train": false, "side": "Buda", "district":  1},
    {"id": 12, "x": 4, "y": 2, "type": "D", "train": false, "side": "Buda", "district":  2},
    {"id": 13, "x": 5, "y": 2, "type": "D", "train": false, "side": "Buda", "district":  3},
    {"id": 14, "x": 6, "y": 2, "type": "C", "train": false, "side": "Pest", "district":  3},
    {"id": 15, "x": 9, "y": 2, "type": "D", "train": true , "side": "Pest", "district":  4},
    {"id": 16, "x": 0, "y": 3, "type": "C", "train": false, "side": "Buda", "district":  5},
    {"id": 17, "x": 2, "y": 3, "type": "B", "train": false, "side": "Buda", "district":  5},
    {"id": 18, "x": 3, "y": 3, "type": "C", "train": false, "side": "Buda", "district":  6},
    {"id": 19, "x": 7, "y": 3, "type": "A", "train": false, "side": "Pest", "district":  7},
    {"id": 20, "x": 8, "y": 3, "type": "D", "train": false, "side": "Pest", "district":  7},
    {"id": 21, "x": 0, "y": 4, "type": "B", "train": false, "side": "Buda", "district":  5},
    {"id": 22, "x": 3, "y": 4, "type": "A", "train": false, "side": "Buda", "district":  6},
    {"id": 23, "x": 4, "y": 4, "type": "B", "train": false, "side": "Buda", "district":  6},
    {"id": 24, "x": 5, "y": 4, "type": "C", "train": false, "side": "Pest", "district":  6},
    {"id": 25, "x": 6, "y": 4, "type": "A", "train": true , "side": "Pest", "district":  6},
    {"id": 26, "x": 9, "y": 4, "type": "A", "train": false, "side": "Pest", "district":  7},
    {"id": 27, "x": 0, "y": 5, "type": "A", "train": false, "side": "Buda", "district":  5},
    {"id": 28, "x": 2, "y": 5, "type": "C", "train": false, "side": "Buda", "district":  5},
    {"id": 29, "x": 5, "y": 5, "type": "D", "train": false, "side": "Pest", "district":  6},
    {"id": 30, "x": 6, "y": 5, "type": "?", "train": false, "side": "Pest", "district":  6},
    {"id": 31, "x": 9, "y": 5, "type": "B", "train": false, "side": "Pest", "district":  7},
    {"id": 32, "x": 1, "y": 6, "type": "C", "train": false, "side": "Buda", "district":  5},
    {"id": 33, "x": 3, "y": 6, "type": "D", "train": true , "side": "Buda", "district":  6},
    {"id": 34, "x": 6, "y": 6, "type": "B", "train": false, "side": "Pest", "district":  6},
    {"id": 35, "x": 7, "y": 6, "type": "D", "train": false, "side": "Pest", "district":  7},
    {"id": 36, "x": 8, "y": 6, "type": "C", "train": true , "side": "Pest", "district":  7},
    {"id": 37, "x": 0, "y": 7, "type": "B", "train": false, "side": "Buda", "district":  9},
    {"id": 38, "x": 3, "y": 7, "type": "A", "train": false, "side": "Buda", "district": 10},
    {"id": 39, "x": 4, "y": 7, "type": "B", "train": false, "side": "Buda", "district": 10},
    {"id": 40, "x": 6, "y": 7, "type": "B", "train": false, "side": "Pest", "district": 10},
    {"id": 41, "x": 9, "y": 7, "type": "A", "train": false, "side": "Pest", "district": 11},
    {"id": 42, "x": 1, "y": 8, "type": "A", "train": false, "side": "Buda", "district":  9},
    {"id": 43, "x": 2, "y": 8, "type": "B", "train": false, "side": "Buda", "district":  9},
    {"id": 44, "x": 5, "y": 8, "type": "C", "train": false, "side": "Buda", "district": 10},
    {"id": 45, "x": 8, "y": 8, "type": "D", "train": false, "side": "Pest", "district": 11},
    {"id": 46, "x": 0, "y": 9, "type": "D", "train": false, "side": "Buda", "district":  8},
    {"id": 47, "x": 2, "y": 9, "type": "C", "train": false, "side": "Buda", "district":  9},
    {"id": 48, "x": 3, "y": 9, "type": "A", "train": true , "side": "Buda", "district": 10},
    {"id": 49, "x": 6, "y": 9, "type": "D", "train": false, "side": "Buda", "district": 10},
    {"id": 50, "x": 7, "y": 9, "type": "A", "train": false, "side": "Pest", "district": 11},
    {"id": 51, "x": 8, "y": 9, "type": "C", "train": false, "side": "Pest", "district": 11},
    {"id": 52, "x": 9, "y": 9, "type": "B", "train": false, "side": "Pest", "district": 12}
];

const lines = [
    {"id":0,"name":"M1","color":"Yellow","start":19},
    {"id":1,"name":"M2","color":"Red","start":28},
    {"id":2,"name":"M3","color":"Blue","start":3},
    {"id":3,"name":"M4","color":"Green","start":39}
];

const state = {
    player: '',
    round: 0,
    lineOrder: [],
    currentLine: null,
    deck: [],
    card: null,
    cardsDrawn: 0,
    segments: [],
    selected: null,
    scores: [],
    trainCount: 0,
    time: 0,
    timer: null,
    segmentDrawnThisTurn: false
};

let canvas = null;
let ctx = null;

const get = id => document.querySelector(id);

function show(screen) {
    ['menu','rules','game','end'].forEach(s => {
        get(`#${s}-screen`).style.display = s===screen ? 'block' : 'none';
    });
}

function showMessage(msg) {
    const existing = get('#message-box');
    if(existing) existing.remove();
    
    const box = document.createElement('div');
    box.id = 'message-box';
    box.textContent = msg;
    document.body.appendChild(box);
    
    setTimeout(() => box.remove(), 2000);
}

function makeDeck() {
    return [
        {letter:'A',platform:'side'},
        {letter:'B',platform:'side'},
        {letter:'C',platform:'side'},
        {letter:'D',platform:'side'},
        {letter:'Joker',platform:'side'},
        {letter:'A',platform:'center'},
        {letter:'B',platform:'center'},
        {letter:'C',platform:'center'},
        {letter:'D',platform:'center'},
        {letter:'Joker',platform:'center'}
    ];
}

function shuffle(arr) {
    const a = [...arr];
    for(let i=a.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
}

function randomLines() {
    return shuffle([0,1,2,3]);
}

function initCanvas() {
    canvas = get('#lines-canvas');
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext('2d');
    drawDanube();
}

function drawDanube() {
    if(!ctx) return;
    
    ctx.strokeStyle = 'Blue';
    ctx.lineWidth = 7;
    ctx.globalAlpha = 0.3;
    
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(250, 200);
    ctx.lineTo(250, 350);
    ctx.lineTo(300, 400);
    ctx.lineTo(350, 450);
    ctx.lineTo(350, 500);
    ctx.stroke();
    
    ctx.globalAlpha = 1.0;
}

function redrawAllLines() {
    if(!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDanube();
    state.segments.forEach(seg => {
        const f = stations.find(s => s.id === seg.from);
        const t = stations.find(s => s.id === seg.to);
        
        const x1 = f.x * 50 + 25;
        const y1 = f.y * 50 + 25;
        const x2 = t.x * 50 + 25;
        const y2 = t.y * 50 + 25;
        
        ctx.strokeStyle = seg.color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    });
}

function createBoard() {
    const board = get('#board');
    board.innerHTML = '';
    
    initCanvas();
    
    for(let y=0; y<10; y++) {
        for(let x=0; x<10; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);
        }
    }
    
    stations.forEach(s => {
        const cell = board.children[s.y*10 + s.x];
        const st = document.createElement('div');
        st.className = 'station';
        st.dataset.id = s.id;
        st.textContent = s.type==='?' ? 'Deák tér' : s.type;
        if(s.train) st.classList.add('train');
        
        const startLine = lines.find(l => l.start === s.id);
        if(startLine) {
            st.style.background = startLine.color;
            if(startLine.name==='M1') st.style.color = 'black';
        }
        
        st.addEventListener('click', () => clickStation(s.id));
        cell.appendChild(st);
    });
}

function startGame() {
    const name = get('#player-name').value.trim();
    if(!name) {
        showMessage('Please enter your name!');
        return;
    }
    
    state.player = name;
    state.round = 0;
    state.lineOrder = randomLines();
    state.segments = [];
    state.scores = [];
    state.trainCount = 0;
    state.time = 0;
    
    get('#player-name-display').textContent = name;
    createBoard();
    startRound();
    startTimer();
    show('game');
}

function startRound() {
    if(state.round >= 4) {
        endGame();
        return;
    }
    
    const lineId = state.lineOrder[state.round];
    state.currentLine = lines[lineId];
    state.deck = shuffle(makeDeck());
    state.cardsDrawn = 0;
    state.card = null;
    state.selected = null;
    state.segmentDrawnThisTurn = false;
    
    get('#current-line').textContent = state.currentLine.name;
    get('#current-line').style.color = state.currentLine.color;
    get('#round-num').textContent = state.round + 1;
    get('#cards-count').textContent = '0';
    get('#current-card').textContent = '-';
    
    get('#draw-btn').disabled = false;
    
    let endBtn = get('#end-round-btn');
    if(!endBtn) {
        endBtn = document.createElement('button');
        endBtn.id = 'end-round-btn';
        endBtn.textContent = 'End Round';
        endBtn.addEventListener('click', endRound);
        get('#draw-btn').parentNode.insertBefore(endBtn, get('#draw-btn').nextSibling);
    }
}

function drawCard() {
    if(state.deck.length === 0) return;
    
    if(state.cardsDrawn >= 8) {
        showMessage('8 cards drawn! Please end round.');
        return;
    }
    
    state.card = state.deck.pop();
    state.cardsDrawn++;
    state.segmentDrawnThisTurn = false;
    
    get('#current-card').textContent = state.card.letter==='Joker' ? '🃏' : state.card.letter;
    get('#cards-count').textContent = state.cardsDrawn;
    
    if(state.cardsDrawn >= 8) {
        get('#draw-btn').disabled = true;
        showMessage('Last card! Draw segment or end round.');
    }
}

function clickStation(id) {
    if(!state.card) {
        showMessage('Draw a card first!');
        return;
    }
    
    if(state.segmentDrawnThisTurn) {
        showMessage('Already drew a segment this turn! Draw next card.');
        return;
    }
    
    if(!state.selected) {
        if(canStart(id)) {
            state.selected = id;
            get(`[data-id="${id}"]`).classList.add('selected');
        } else {
            showMessage('Cannot start from this station!');
        }
    } else {
        if(canDraw(state.selected, id)) {
            addSegment(state.selected, id);
            state.segmentDrawnThisTurn = true;
            clearSelect();
            
            if(state.cardsDrawn < 8) {
                showMessage('Segment drawn! Draw next card.');
            }
        } else {
            clearSelect();
            if(canStart(id)) {
                state.selected = id;
                get(`[data-id="${id}"]`).classList.add('selected');
            } else {
                showMessage('Invalid segment!');
            }
        }
    }
}

function canStart(id) {
    const segs = state.segments.filter(s => s.line === state.currentLine.id);
    
    if(segs.length === 0) {
        return id === state.currentLine.start;
    }
    
    return isEnd(id, state.currentLine.id);
}

function isEnd(id, lineId) {
    const segs = state.segments.filter(s => s.line === lineId);
    if(segs.length === 0) return id === lines.find(l=>l.id===lineId).start;
    
    const conn = {};
    segs.forEach(s => {
        conn[s.from] = (conn[s.from]||0) + 1;
        conn[s.to] = (conn[s.to]||0) + 1;
    });
    
    return conn[id] === 1;
}

function canDraw(from, to) {
    if(from === to) return false;
    
    const f = stations.find(s => s.id === from);
    const t = stations.find(s => s.id === to);
    
    if(!matchCard(t)) return false;
    if(!validDir(f, t)) return false;
    if(segExists(from, to)) return false;
    if(hasLoop(from, to)) return false;
    if(passThru(f, t)) return false;
    
    return true;
}

function matchCard(s) {
    if(state.card.letter === 'Joker') return true;
    if(s.type === '?') return true;
    return s.type === state.card.letter;
}

function validDir(f, t) {
    const dx = Math.abs(t.x - f.x);
    const dy = Math.abs(t.y - f.y);
    return dx===0 || dy===0 || dx===dy;
}

function segExists(from, to) {
    return state.segments.some(s =>
        (s.from===from && s.to===to) || (s.from===to && s.to===from)
    );
}

function hasLoop(from, to) {
    const visited = state.segments
        .filter(s => s.line === state.currentLine.id)
        .flatMap(s => [s.from, s.to]);
    return visited.includes(to);
}

function passThru(f, t) {
    const dx = t.x - f.x;
    const dy = t.y - f.y;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    
    if(steps === 0) return false;
    
    const sx = dx / steps;
    const sy = dy / steps;
    
    for(let i=1; i<steps; i++) {
        const x = Math.round(f.x + sx*i);
        const y = Math.round(f.y + sy*i);
        if(stations.find(s => s.x===x && s.y===y)) return true;
    }
    return false;
}

function addSegment(from, to) {
    state.segments.push({
        from, to,
        line: state.currentLine.id,
        color: state.currentLine.color
    });
    
    redrawAllLines();
    
    const ts = stations.find(s => s.id === to);
    if(ts.train) {
        const alreadyVisited = state.segments.filter(seg => 
            (seg.from === to || seg.to === to) && 
            state.segments.indexOf(seg) < state.segments.length - 1
        ).length > 0;
        
        if(!alreadyVisited) {
            state.trainCount++;
            updateTrainSlider();
        }
    }
}

function updateTrainSlider() {
    const trainPoints = [0, 1, 2, 4, 6, 8, 11, 14, 17, 21, 25];
    const spans = document.querySelectorAll('#train-slider span');
    
    spans.forEach((span, index) => {
        if(index <= state.trainCount) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    });
    
    const points = state.trainCount < trainPoints.length ? trainPoints[state.trainCount] : 25;
    get('#train-points').textContent = points;
}

function clearSelect() {
    state.selected = null;
    document.querySelectorAll('.station.selected').forEach(s => {
        s.classList.remove('selected');
    });
}

function endRound() {
    const scoreDetail = calcRoundScore();
    state.scores.push(scoreDetail);
    updateScore();
    
    state.round++;
    startRound();
}

function calcRoundScore() {
    const segs = state.segments.filter(s => s.line === state.currentLine.id);
    const visitedStations = new Set();
    segs.forEach(s => {
        visitedStations.add(s.from);
        visitedStations.add(s.to);
    });

    const districts = new Set();
    visitedStations.forEach(stationId => {
        const station = stations.find(s => s.id === stationId);
        if(station) {
            districts.add(station.district);
        }
    });
    const PK = districts.size;
    
    const districtCounts = {};
    visitedStations.forEach(stationId => {
        const station = stations.find(s => s.id === stationId);
        if(station) {
            districtCounts[station.district] = (districtCounts[station.district] || 0) + 1;
        }
    });
    const PM = Math.max(...Object.values(districtCounts), 0);
    
    let PD = 0;
    segs.forEach(seg => {
        const fromStation = stations.find(s => s.id === seg.from);
        const toStation = stations.find(s => s.id === seg.to);
        if(fromStation && toStation) {
            if(fromStation.side !== toStation.side) {
                PD++;
            }
        }
    });
    
    const FP = (PK * PM) + PD;
    return { FP, PK, PM, PD };
}

function updateScore() {
    const lastScore = state.scores[state.scores.length-1];
    if(lastScore) {
        const detail = `FP = (PK(${lastScore.PK}) × PM(${lastScore.PM})) + PD(${lastScore.PD}) = ${lastScore.FP}`;
        get('#round-score').textContent = detail;
    }
    
    const total = state.scores.reduce((a,b) => a + b.FP, 0);
    get('#total-score').textContent = total;
}

function startTimer() {
    state.timer = setInterval(() => {
        state.time++;
        const m = Math.floor(state.time/60);
        const s = state.time%60;
        get('#timer').textContent = `${m}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}

function stopTimer() {
    if(state.timer) clearInterval(state.timer);
}

function endGame() {
    stopTimer();
    
    const sumFP = state.scores.reduce((a,b) => a + b.FP, 0);
    
    const trainPoints = [0, 1, 2, 4, 6, 8, 11, 14, 17, 21, 25];
    const PP = state.trainCount < trainPoints.length ? trainPoints[state.trainCount] : 25;
    
    const stationLines = {};
    state.segments.forEach(seg => {
        if(!stationLines[seg.from]) stationLines[seg.from] = new Set();
        if(!stationLines[seg.to]) stationLines[seg.to] = new Set();
        stationLines[seg.from].add(seg.line);
        stationLines[seg.to].add(seg.line);
    });
    
    let P2 = 0, P3 = 0, P4 = 0;
    Object.values(stationLines).forEach(lineSet => {
        if(lineSet.size === 2) P2++;
        if(lineSet.size === 3) P3++;
        if(lineSet.size === 4) P4++;
    });
    
    const finalScore = sumFP + PP + (2 * P2) + (5 * P3) + (9 * P4);
    
    get('#end-player').textContent = state.player;
    get('#end-score').textContent = finalScore;
    get('#end-time').textContent = get('#timer').textContent;
    show('end');
}

get('#start-btn').addEventListener('click', startGame);
get('#rules-btn').addEventListener('click', () => show('rules'));
get('#back-btn').addEventListener('click', () => show('menu'));
get('#draw-btn').addEventListener('click', drawCard);
get('#menu-btn').addEventListener('click', () => {
    stopTimer();
    show('menu');
});

show('menu');