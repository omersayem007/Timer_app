function tick()
{
var d = new Date();
document.getElementById("clock").innerHTML = d.getMinutes()+ ":" +d.getSeconds();
}
setInterval(tick,1000);