var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var size = 5;
var cellSize;

window.onload = () =>
{
   canvas = <HTMLCanvasElement>document.getElementById('canvas');
   ctx = canvas.getContext("2d");
   ctx.lineWidth = 5;
   ctx.strokeStyle = "black";
   cellSize = canvas.width / size;
   drawGrid();
}

function drawGrid()
{
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(2.5, 2.5);
    ctx.lineTo(canvas.width - 2.5, 2.5);
    ctx.stroke();
    ctx.lineTo(canvas.width - 2.5, canvas.height - 2.5);
    ctx.stroke();
    ctx.lineTo(2.5, canvas.height - 2.5);
    ctx.stroke();
    ctx.lineTo(2.5, 2.5);
    ctx.stroke();

    for (var x = 0; x <= canvas.width; x = x + cellSize)
    {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (var y = 0; y <= canvas.height; y = y + cellSize)
    {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    ctx.closePath();
}