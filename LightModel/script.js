const container = document.getElementById("container");

function makeRows(rows, cols, color) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.setAttribute("id", '' + (c+1));
        // cell.innerText = (c + 1);
        cell.style.backgroundColor = color;
        cell.style.borderRadius = "50%"
        cell.style.width = "10px"
        cell.style.height = "10px"
        container.appendChild(cell).className = "grid-item";
    };
};

function getVals() {
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
    var color = document.getElementById("color").value;
    var fill = document.querySelector('#fill');
    
    if (fill.checked) {
        colorAll(color);
    }else if (row <= 22 && col <= 45 && row > 0 && col > 0) {
        setColor(row, col, color);
    } else {
        return
    }
}

function setColor(row, col, color) {
    id = posToIndex(row, col);
    dot = document.getElementById(id);
    dot.style.backgroundColor = color;
}

function posToIndex(rowPos, colPos) {
    var index = 0;
    rowPos = rowPos - 1;
    colPos = colPos - 1;
    for (c = 0; c < 990; c++) {
        if ((getPos(c).rowPos == rowPos) && (getPos(c).colPos == colPos)) {
            index = c + 1;
        };
    };
    return index;
}

function getPos(index) {
    var cols = 45;
    var rowPos = Math.floor(index / cols);
    var colPos = index % cols;
    return {
        rowPos,
        colPos
    };
}

function randAnimate(i) {
    dot = document.getElementById(i);
    dot.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randTimedLoop(i) {
       
    setTimeout(function () {
        randAnimate(i);
        i = i + 1; 
        if(i <= 990) {
            randTimedLoop(i);
        } 
    }, 1)
}

function colorAll(color) {
    for(i=1; i<=990; i++) {
        dot = document.getElementById(i);
        dot.style.backgroundColor = color;
    }
   
}

function randFillAnimate(i, color) {
    dot = document.getElementById(i);
    dot.style.backgroundColor = color;

    
}

function randStarsTimedLoop(i, color) {
       
    setTimeout(function () {
        randFillAnimate(i, color);
        
        i = i + (Math.floor(Math.random() * (990 - 1 + 1) + 1)); 
        if(i <= 990) {
            
            randStarsTimedLoop(i, color);
        } else {
            color = "#" + Math.floor(Math.random()*16777215).toString(16);
            i = 1;
            randStarsTimedLoop(i, color);
        } 
    }, 1)
}

function randFillTimedLoop(i, color) {
       
    setTimeout(function () {
        randFillAnimate(i, color);
        
        i = i + 1; 
        if(i <= 990) {
            
            randFillTimedLoop(i, color);
        } else {
            color = "#" + Math.floor(Math.random()*16777215).toString(16);
            i = 1;
            randFillTimedLoop(i, color);
        } 
    }, 1)
}



makeRows(22, 45, "#d8dee9");
//randTimedLoop(1);
// colorAll("red");
//randFillTimedLoop(1,"red");