// credit to the original svg file https://www.vectorstock.com/royalty-free-vector/flat-with-shadow-icon-and-mobile-application-kiss-vector-6341903

var master = gsap.timeline({repeat: -1 }); 
var couple = document.querySelector('#couple');
var girl = document.querySelector('#girl');
var boy = document.querySelector('#boy');
var heart = document.querySelector('#heart');
var ground = document.querySelector('#ground');
var background = document.body;
var light = document.querySelector('#triangle-light');

master
  .add(setup())
  .add(darkness(), 'lightsOff+=1')
  .add(girlKiss(), 'girlStuff+=0.2')
  .add(boyStuff(), 'girlStuff+=2')
  .add(heartStuff(), 'heartStuff-=1')
  .add(lightsOn(), 'heartStuff+=1')
  .add(backToStart(),'lightsOn+=1' )

function setup() {
  var tl = gsap.timeline()
    .set(couple, { autoAlpha: 1 })
    .set(boy.querySelector('#boy-arm'), {  transformOrigin: '0% 10%', rotation: "+=40" })
    .set(girl.querySelector('#girl-earring'), { scaleY: '0.7' })
    .set(girl.querySelector('#girl-leg-1'), { rotation: '+=75' })
    .set(girl.querySelector('#girl-arm'), { transformOrigin: '100% 0%', rotation: '-=60' })
    .set(girl.querySelector('#girl-body'), { transformOrigin: '0% 75%', rotation: '+=20' })
    .set(heart, { transformOrigin: '50% 50%', y: '+=100', scale: 0.5 });

  return tl;
}

function darkness() {
  var tl = gsap.timeline()
    .to(background, { duration: 1, backgroundColor: '#241a22' })
    .to(boy.querySelector('#boy-arm'), { duration: 0.5, rotation: 0 }, 1)
  
  return tl;
}

function girlKiss() {
  var tl = gsap.timeline()
    .to(girl.querySelector('#girl-arm'), { duration: 1, rotation: 0 })
    .to(girl.querySelector('#girl-body'), { duration: 0.5, transformOrigin: '0% 75%', rotation: 0 })
    .to(girl.querySelector('#girl-eye'), { duration: 0.5, transformOrigin: '0% 50%', scaleY: 0.1 }, 1.25)
    .to(girl.querySelector('#girl-leg-1'), { duration: 1.5, rotation: 0, ease: "back.out(3)" }, 1.25);

  return tl;
}

function boyStuff() {
  var tl = gsap.timeline()
  .to(boy.querySelector('#boy-eye'), { duration: 0.5, transformOrigin: '0% 50%', scaleY: 0.1 });
  return tl;
}

function heartStuff() {
  var tl = gsap.timeline()
  .to('#heart', { duration: 3, autoAlpha: 1, y: 0, scale: 1, ease: "elastic.out(1,0.3)" });
  return tl;
}

function lightsOn() {
  var tl = gsap.timeline()
    .to(light, { duration: 0.25, autoAlpha: 1 }, 0)
    .to(ground, { duration: 0.25, fill: '#F8E5C5' }, 0)  
    .to(girl.querySelector('#girl-eye'), { duration: 0.5, scaleY: 1 }, 0.5)
    .to(boy.querySelector('#boy-eye'), { duration: 0.5, scaleY: 1 }, 1)
    .to(girl.querySelector('#girl-body'), { duration: 0.5, rotation: '+=20' })
    .to(girl.querySelector('#girl-leg-1'), { duration: 1, rotation: '+=75' }, "-=0.75")
    .to(girl.querySelector('#girl-arm'), { duration: 1, rotation: '-=60' }, "-=1.25")
    .to('#heart', { duration: 1.5, autoAlpha: 0, scale: 0.5, y: -100, ease: "elastic.in(1,0.7)" }, "-=2")
    .to(girl.querySelector('#girl-head'), { duration: 1, transformOrigin: "40% 50%", rotation: '-=30' }, "-=0.25")
    .to(boy.querySelector('#boy-arm'), { duration: 1,  rotation: "+=40" })
 
  return tl;
}

function backToStart() {
  var tl = gsap.timeline()
   .to(background, { duration: 1, backgroundColor: '#e37254' })
   .to(light, { duration: 0.5, autoAlpha: 0 }, '-=1')
   .to(ground, { duration: 0.25, fill: '#5c5757' }, 0) 
   .to(girl.querySelector('#girl-head'), { duration: 1, rotation: 0 }, "-=0.5")
  
  return tl;
}