// ============================================================
// KANDINSKY — COMPOSIÇÃO EM MOVIMENTO
// Releitura interativa em p5.js
//
// O movimento do cursor interfere na composição.
// Não existem instruções, pontuação ou clique.
// ============================================================


let circles = [];
let triangles = [];
let squares = [];
let lines = [];
let bars = [];
let arcs = [];

let texture;


// ============================================================
// SETUP
// ============================================================

function setup() {

  createCanvas(1200, 800);

  angleMode(RADIANS);

  randomSeed(12);

  texture = createGraphics(width, height);

  createTexture();

  createComposition();
}


// ============================================================
// TEXTURA DO PAPEL
// ============================================================

function createTexture() {

  texture.background(238, 236, 218);

  texture.noStroke();

  for (let i = 0; i < 18000; i++) {

    let x = random(width);
    let y = random(height);

    let v = random(190, 240);

    texture.fill(
      v,
      v - random(0, 5),
      v - random(5, 15),
      random(4, 14)
    );

    texture.ellipse(
      x,
      y,
      random(0.3, 1.4),
      random(0.3, 1.4)
    );
  }
}


// ============================================================
// COMPOSIÇÃO
// ============================================================

function createComposition() {

  circles = [];
  triangles = [];
  squares = [];
  lines = [];
  bars = [];
  arcs = [];


  // ==========================================================
  // CÍRCULOS
  // ==========================================================

  circles.push({
    x: 145,
    y: 160,
    r: 122,
    color: [8, 7, 9],
    inner: [91, 55, 125],
    innerR: 53,
    halo: [230, 80, 75],
    haloSize: 1.7,
    type: "large"
  });


  circles.push({
    x: 263,
    y: 326,
    r: 43,
    color: [215, 32, 25],
    halo: [245, 190, 30],
    haloSize: 1.45,
    type: "normal"
  });


  circles.push({
    x: 113,
    y: 610,
    r: 45,
    color: [245, 194, 28],
    halo: [80, 120, 210],
    haloSize: 1.65,
    type: "normal"
  });


  circles.push({
    x: 445,
    y: 700,
    r: 43,
    color: [30, 95, 175],
    halo: [245, 205, 30],
    haloSize: 1.55,
    type: "normal"
  });


  circles.push({
    x: 788,
    y: 145,
    r: 23,
    color: [35, 65, 150],
    halo: [90, 130, 210],
    haloSize: 1.45,
    type: "normal"
  });


  circles.push({
    x: 865,
    y: 680,
    r: 38,
    color: [105, 62, 155],
    type: "normal"
  });


  circles.push({
    x: 1020,
    y: 710,
    r: 61,
    color: [105, 123, 116],
    type: "normal"
  });


  circles.push({
    x: 930,
    y: 450,
    r: 43,
    color: [38, 78, 155],
    type: "normal"
  });


  circles.push({
    x: 650,
    y: 93,
    r: 18,
    color: [105, 105, 125],
    type: "small"
  });


  circles.push({
    x: 582,
    y: 205,
    r: 11,
    color: [215, 40, 55],
    type: "small"
  });


  circles.push({
    x: 876,
    y: 252,
    r: 34,
    color: [190, 110, 125],
    type: "small"
  });


  // ==========================================================
  // TRIÂNGULOS
  // ==========================================================

  triangles.push({
    x: 755,
    y: 305,
    originalX: 755,
    originalY: 305,
    size: 275,
    angle: 0,
    color: [245, 226, 230],
    stroke: [35, 35, 35],
    type: "large"
  });


  triangles.push({
    x: 725,
    y: 115,
    originalX: 725,
    originalY: 115,
    size: 66,
    angle: 0,
    color: [242, 198, 22],
    stroke: [242, 198, 22],
    type: "small"
  });


  triangles.push({
    x: 1035,
    y: 635,
    originalX: 1035,
    originalY: 635,
    size: 105,
    angle: 0,
    color: [218, 166, 28],
    stroke: [205, 160, 20],
    type: "small"
  });


  // ==========================================================
  // QUADRADOS
  // ==========================================================

  squares.push({
    x: 983,
    y: 58,
    size: 20,
    currentSize: 20,
    color: [244, 219, 78]
  });


  squares.push({
    x: 1085,
    y: 142,
    size: 17,
    currentSize: 17,
    color: [25, 25, 25]
  });


  squares.push({
    x: 1080,
    y: 240,
    size: 22,
    currentSize: 22,
    color: [215, 45, 55]
  });


  squares.push({
    x: 1005,
    y: 288,
    size: 19,
    currentSize: 19,
    color: [25, 25, 25]
  });


  squares.push({
    x: 1118,
    y: 720,
    size: 35,
    currentSize: 35,
    color: [170, 20, 30]
  });


  // ==========================================================
  // LINHAS
  // ==========================================================

  lines.push({
    x1: 370,
    y1: 665,
    x2: 1115,
    y2: 95,
    weight: 4,
    movement: 0.0006
  });


  lines.push({
    x1: 95,
    y1: 500,
    x2: 1135,
    y2: 500,
    weight: 2,
    movement: -0.0003
  });


  lines.push({
    x1: 615,
    y1: 800,
    x2: 850,
    y2: 25,
    weight: 2,
    movement: 0.0005
  });


  lines.push({
    x1: 450,
    y1: 630,
    x2: 1120,
    y2: 360,
    weight: 4,
    movement: -0.0004
  });


  lines.push({
    x1: 505,
    y1: 60,
    x2: 1160,
    y2: 650,
    weight: 2,
    movement: 0.0003
  });


  // ==========================================================
  // BARRAS
  // ==========================================================

  bars.push({
    x: 860,
    y: 225,
    length: 470,
    width: 23,
    angle: -0.45,
    color: [235, 232, 214]
  });


  bars.push({
    x: 465,
    y: 510,
    length: 360,
    width: 25,
    angle: -0.65,
    color: [230, 228, 210]
  });


  // ==========================================================
  // ARCOS
  // ==========================================================

  arcs.push({
    x: 515,
    y: 195,
    w: 210,
    h: 280,
    start: PI * 1.05,
    end: PI * 1.72,
    weight: 2
  });


  arcs.push({
    x: 420,
    y: 360,
    w: 190,
    h: 110,
    start: PI * 1.05,
    end: PI * 1.65,
    weight: 5
  });


  arcs.push({
    x: 620,
    y: 430,
    w: 190,
    h: 150,
    start: PI,
    end: TWO_PI,
    weight: 2
  });


  arcs.push({
    x: 770,
    y: 470,
    w: 170,
    h: 110,
    start: PI,
    end: TWO_PI,
    weight: 2
  });
}


// ============================================================
// DRAW
// ============================================================

function draw() {

  image(texture, 0, 0);

  drawBars();

  drawArcs();

  drawLines();

  drawCircles();

  drawTriangles();

  drawSquares();

  drawDecorativeElements();
}


// ============================================================
// CÍRCULOS
// ============================================================

function drawCircles() {

  for (let c of circles) {

    let d = dist(
      mouseX,
      mouseY,
      c.x,
      c.y
    );


    if (d < 250) {

      let strength = map(
        d,
        0,
        250,
        0.025,
        0,
        true
      );

      c.x += (mouseX - c.x) * strength;
      c.y += (mouseY - c.y) * strength;
    }


    if (c.halo) {

      noStroke();

      for (let i = 16; i > 0; i--) {

        let factor =
          1 + (i / 16) * (c.haloSize - 1);

        let alpha =
          map(i, 16, 1, 3, 22);

        fill(
          c.halo[0],
          c.halo[1],
          c.halo[2],
          alpha
        );

        ellipse(
          c.x,
          c.y,
          c.r * 2 * factor,
          c.r * 2 * factor
        );
      }
    }


    noStroke();

    fill(
      c.color[0],
      c.color[1],
      c.color[2]
    );

    ellipse(
      c.x,
      c.y,
      c.r * 2,
      c.r * 2
    );


    if (c.inner) {

      fill(
        c.inner[0],
        c.inner[1],
        c.inner[2]
      );

      ellipse(
        c.x,
        c.y,
        c.innerR * 2,
        c.innerR * 2
      );
    }
  }
}


// ============================================================
// TRIÂNGULOS — FUGA SEM SAIR DA TELA
// ============================================================

function drawTriangles() {

  for (let t of triangles) {

    let d = dist(
      mouseX,
      mouseY,
      t.x,
      t.y
    );


    if (d < 500) {

      let force = map(
        d,
        0,
        500,
        1,
        0,
        true
      );


      let angle = atan2(
        t.y - mouseY,
        t.x - mouseX
      );


      let speed = force * 16;


      t.x += cos(angle) * speed;
      t.y += sin(angle) * speed;


      t.angle += 0.015 * force;
    }


    // Mantém o triângulo dentro da tela

    let margin = t.size * 0.5;


    t.x = constrain(
      t.x,
      margin,
      width - margin
    );


    t.y = constrain(
      t.y,
      margin,
      height - margin
    );


    push();

    translate(
      t.x,
      t.y
    );

    rotate(t.angle);


    fill(
      t.color[0],
      t.color[1],
      t.color[2]
    );

    stroke(
      t.stroke[0],
      t.stroke[1],
      t.stroke[2]
    );

    strokeWeight(2);


    triangle(
      0,
      -t.size / 2,

      -t.size / 2,
      t.size / 2,

      t.size / 2,
      t.size / 2
    );


    pop();
  }
}


// ============================================================
// QUADRADOS — CRESCIMENTO E RETORNO
// ============================================================

function drawSquares() {

  rectMode(CENTER);


  for (let s of squares) {

    let d = dist(
      mouseX,
      mouseY,
      s.x,
      s.y
    );


    // ========================================================
    // CRESCIMENTO
    // ========================================================

    if (d < 400) {

      let growth = map(
        d,
        0,
        400,
        3.0,
        0.05,
        true
      );


      s.currentSize += growth;
    }


    // ========================================================
    // RETORNO AO TAMANHO ORIGINAL
    // ========================================================
    //
    // Quando o cursor sai da área de influência,
    // o quadrado retorna suavemente ao tamanho inicial.
    //

    else {

      s.currentSize = lerp(
        s.currentSize,
        s.size,
        0.035
      );


      // Evita que fique infinitamente próximo,
      // mas nunca exatamente no tamanho original.

      if (abs(s.currentSize - s.size) < 0.05) {
        s.currentSize = s.size;
      }
    }


    // ========================================================
    // DESENHO
    // ========================================================

    fill(
      s.color[0],
      s.color[1],
      s.color[2]
    );

    stroke(30);

    strokeWeight(1);


    rect(
      s.x,
      s.y,
      s.currentSize,
      s.currentSize
    );
  }
}


// ============================================================
// BARRAS
// ============================================================

function drawBars() {

  for (let b of bars) {

    push();

    translate(
      b.x,
      b.y
    );

    rotate(b.angle);


    fill(
      b.color[0],
      b.color[1],
      b.color[2]
    );

    stroke(20);

    strokeWeight(2);

    rectMode(CENTER);

    rect(
      0,
      0,
      b.length,
      b.width
    );


    for (
      let x = -b.length / 2 + 25;
      x < b.length / 2;
      x += 55
    ) {

      if (
        floor(
          (x + b.length / 2) / 55
        ) % 2 == 0
      ) {

        fill(20);

        rect(
          x,
          0,
          17,
          b.width
        );
      }
    }


    pop();
  }
}


// ============================================================
// LINHAS — ROTAÇÃO CONTÍNUA
// ============================================================

function drawLines() {

  for (let i = 0; i < lines.length; i++) {

    let l = lines[i];


    let centerX =
      (l.x1 + l.x2) / 2;

    let centerY =
      (l.y1 + l.y2) / 2;


    let mouseDistance = dist(
      mouseX,
      mouseY,
      centerX,
      centerY
    );


    let baseRotation =
      sin(
        frameCount * 0.01 +
        i * 1.3
      ) * 0.035;


    let influence = map(
      mouseDistance,
      0,
      550,
      0.12,
      0,
      true
    );


    let cursorRotation =
      influence *
      sin(
        frameCount * 0.018 +
        i
      );


    let rotation =
      baseRotation +
      cursorRotation;


    push();

    translate(
      centerX,
      centerY
    );

    rotate(rotation);


    stroke(20);

    strokeWeight(l.weight);


    line(
      l.x1 - centerX,
      l.y1 - centerY,

      l.x2 - centerX,
      l.y2 - centerY
    );


    pop();
  }
}


// ============================================================
// ARCOS
// ============================================================

function drawArcs() {

  noFill();

  stroke(35);

  for (let a of arcs) {

    strokeWeight(a.weight);

    arc(
      a.x,
      a.y,
      a.w,
      a.h,
      a.start,
      a.end
    );
  }
}


// ============================================================
// ELEMENTOS DECORATIVOS
// ============================================================

function drawDecorativeElements() {

  // ==========================================================
  // GRADE À DIREITA
  // ==========================================================

  stroke(25);

  strokeWeight(1);

  for (let i = 0; i < 4; i++) {

    line(
      1080 + i * 25,
      325,
      1080 + i * 25,
      430
    );
  }


  for (let i = 0; i < 4; i++) {

    line(
      1055,
      350 + i * 25,
      1155,
      350 + i * 25
    );
  }


  // ==========================================================
  // PEQUENAS LINHAS NO ALTO
  // ==========================================================

  line(
    485,
    55,
    485,
    220
  );

  line(
    460,
    105,
    510,
    105
  );

  line(
    460,
    185,
    510,
    185
  );


  // ==========================================================
  // PEQUENOS QUADRADOS
  // ==========================================================

  noStroke();

  fill(30);

  rect(
    1090,
    100,
    15,
    15
  );


  fill(110);

  rect(
    1040,
    130,
    15,
    15
  );


  // ==========================================================
  // CÍRCULO COM ANEL
  // ==========================================================

  noFill();

  stroke(20);

  strokeWeight(3);

  ellipse(
    755,
    265,
    55,
    55
  );


  stroke(220, 40, 40);

  strokeWeight(2);

  ellipse(
    755,
    265,
    42,
    42
  );


  // ==========================================================
  // PEQUENOS ARCOS INFERIORES
  // ==========================================================

  stroke(70);

  strokeWeight(1);

  noFill();

  for (let i = 0; i < 4; i++) {

    arc(
      570 + i * 70,
      610,
      75,
      70,
      PI,
      TWO_PI
    );
  }


  // ==========================================================
  // PEQUENAS LINHAS PARALELAS
  // ==========================================================

  stroke(30);

  for (let i = 0; i < 4; i++) {

    line(
      650 + i * 8,
      680,
      760 + i * 8,
      560
    );
  }
}