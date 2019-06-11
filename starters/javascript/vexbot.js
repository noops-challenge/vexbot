let canvas;
let ctx;
let appWidth;
let appHeight;

//let colors = ['#ff00a2']; //try just one color
let colors = ['#ff00a2','#00baff','#ff6c00', '#f1f1f1']; //try a few colors

// called by NOOPBOT on window.onload
function start_app() {

  // size canvas to window
  sizeCanvas();

  //set up a ticker to refresh page automatically.
  let speed = 600; // how often screen refreshes, in milliseconds.
  let ticker = NOOPBOT_TICK_SETUP(draw, speed);

  //fire a draw event.
  draw();

  //redraw when canvas is clicked.
  canvas.addEventListener('click', draw);
}

function sizeCanvas() {
  appWidth = window.innerWidth;
  appHeight = window.innerHeight;
  canvas = document.getElementById('canvas');
  ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor:'#f1f1f1' });
}

function draw() {
  //get the data!
  NOOPBOT_FETCH({
    API: 'vexbot',
    count: 500,
    width: appWidth,
    height: appHeight,
    magnitude: 24,
    connected: 1
  }, drawSet);
}

function drawSet(responseJson) {
  //clean the canvas. comment out to let them build up.
  //NOOPBOT_SETUP_CANVAS({ canvas: canvas, bgColor:NOOPBOT_DECIDE(colors) });

  let { vectors } = responseJson;
  vectors.forEach(function(vector) {
    drawVector(ctx, vector);
  })
}

function drawVector(ctx, points) {

  // randomly choose fill color and alpha
  ctx.strokeStyle = NOOPBOT_DECIDE(colors);
  ctx.globalAlpha = NOOPBOT_RANDOM(0,100)/100;
  ctx.lineWidth = NOOPBOT_RANDOM(1,2);
  let {a, b} = points;

  // draw line
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);

  // stroke line
  ctx.stroke();

}

// listen if browser changes size.
window.onresize = function(event){
  sizeCanvas();
  draw();
};
