let a;
let date;
let h;
let m;
let s;
let ap = "AM";
let h_rotate;
let m_rotate;
let s_rotate;
const options = {weekday:'long', year:'numeric', month:'long',day:'numeric'};

setInterval( function(){
  a = new Date();
  date = a.toLocaleDateString(undefined,options);
  h = checkTime(a.getHours())
  m = checkTime(a.getMinutes());
  s = checkTime(a.getSeconds());
  h>=12 ? (ap = "PM") : (ap = "AM");
  h_rotate = h*360/12 + ((m * 360/60)/12) ;
  m_rotate= (m * 360/60) + (s* 360/60)/60;
  s_rotate = s * 360/60;
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " "+ ap;
  document.getElementById('day').innerHTML = date;
  document.getElementById('hour').style.transform = "rotate("+ h_rotate + "deg)";
  document.getElementById('minute').style.transform = "rotate(" + m_rotate + "deg)";
  document.getElementById('second').style.transform = "rotate(" + s_rotate + "deg)";
},1000);

function checkTime(x){
  if(x<10){
    x = "0" + x;
  }
  return x;
}

var particles = Particles.init({
	selector: '.background',
  color: ['#777777','#D3D3D3'],
  connectParticles: true
});
