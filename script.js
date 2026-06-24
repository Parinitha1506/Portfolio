/* --------------------------
ROLE TYPING EFFECT
-------------------------- */

const roles=[

"AI Engineer",

"Machine Learning Engineer",

"Data Scientist",

"Generative AI Developer",

"Full Stack Developer"

];

let roleIndex=0;

let charIndex=0;

let deleting=false;

const role=document.getElementById(
"role"
);

function typeRole(){

const current=

roles[roleIndex];

if(!deleting){

role.innerHTML=

current.substring(
0,
charIndex++
);

if(
charIndex>
current.length
){

deleting=true;

setTimeout(
typeRole,
1400
);

return;

}

}

else{

role.innerHTML=

current.substring(
0,
charIndex--
);

if(
charIndex===0
){

deleting=false;

roleIndex++;

if(
roleIndex>=roles.length
){

roleIndex=0;

}

}

}

setTimeout(

typeRole,

deleting
?
50
:
100

);

}

typeRole();



/* --------------------------
SCROLL REVEAL
-------------------------- */

const revealElements=

document.querySelectorAll(
".reveal"
);

function reveal(){

revealElements.forEach(

(el)=>{

const top=

el.getBoundingClientRect()
.top;

const visible=

window.innerHeight
-
120;

if(
top
<
visible
){

el.classList.add(
"active"
);

}

}

);

}

window.addEventListener(

"scroll",

reveal

);

reveal();



/* --------------------------
MOUSE GLOW
-------------------------- */

const cursor=

document.getElementById(
"cursor"
);

document.addEventListener(

"mousemove",

(e)=>{

cursor.style.left=

e.clientX
+
"px";

cursor.style.top=

e.clientY
+
"px";

}

);





/* --------------------------
3D TILT CARDS
-------------------------- */

const cards=

document.querySelectorAll(
".card,.project"
);

cards.forEach(

(card)=>{

card.addEventListener(

"mousemove",

(e)=>{

const rect=

card.getBoundingClientRect();

const x=

e.clientX
-
rect.left;

const y=

e.clientY
-
rect.top;

const rotateY=

(
x
/
rect.width
-
0.5
)
*
20;

const rotateX=

(
0.5
-
y
/
rect.height
)
*
20;

card.style.transform=

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

}

);

card.addEventListener(

"mouseleave",

()=>{

card.style.transform=

`
perspective(1000px)
rotateX(0)
rotateY(0)
translateY(0)
`;

}

);

}

);



/* --------------------------
NAV ACTIVE LINK
-------------------------- */

const sections=

document.querySelectorAll(
"section"
);

const navLinks=

document.querySelectorAll(
"nav a"
);

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(

(section)=>{

const top=

section.offsetTop
-
200;

if(
pageYOffset
>=
top
){

current=

section.getAttribute(
"id"
);

}

}

);

navLinks.forEach(

(link)=>{

link.classList.remove(
"active"
);

if(

link
.getAttribute(
"href"
)
===
"#"
+
current

){

link.classList.add(
"active"
);

}

}

);

}

);



/* --------------------------
SMOOTH BUTTON EFFECT
-------------------------- */

const buttons=

document.querySelectorAll(
".btn,button"
);

buttons.forEach(

(btn)=>{

btn.addEventListener(

"mouseenter",

()=>{

btn.style.transform=

"translateY(-6px) scale(1.03)";

}

);

btn.addEventListener(

"mouseleave",

()=>{

btn.style.transform=

"translateY(0) scale(1)";

}

);

}

);



/* --------------------------
CONTACT FORM
-------------------------- */

const form=

document.querySelector(
"form"
);

if(form){

form.addEventListener(

"submit",

(e)=>{

e.preventDefault();

alert(

"Message sent successfully."

);

form.reset();

}

);

}



/* --------------------------
PARALLAX HERO
-------------------------- */

window.addEventListener(

"scroll",

()=>{

const hero=

document.querySelector(
".hero"
);

if(hero){

hero.style.transform=

`translateY(${
window.scrollY
*
0.15
}px)`;

}

}

);



/* --------------------------
PRELOADER FADE
-------------------------- */

window.addEventListener(

"load",

()=>{

document.body.style.opacity=1;

});

document.body.style.opacity=0;

document.body.style.transition=

"opacity .8s";


/* =========================== */
/* INTERNSHIP CARD ANIMATION */
/* ADD BELOW OLD JS */
/* =========================== */

const internCards =
document.querySelectorAll(
".intern-card"
);

const internObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(
entry.isIntersecting
){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

}

);

},

{
threshold:0.2
}

);

internCards.forEach(

(card)=>{

card.style.opacity="0";

card.style.transform=
"translateY(50px)";

card.style.transition=
"all .8s ease";

internObserver.observe(card);

}

);


/* =========================== */
/* HOVER TILT EFFECT */
/* =========================== */

internCards.forEach(

(card)=>{

card.addEventListener(
"mousemove",

(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX
-
rect.left;

const y =
e.clientY
-
rect.top;

const rotateY =
(x
/
rect.width
-
0.5)
*
12;

const rotateX =
(
0.5
-
y
/
rect.height
)
*
12;

card.style.transform=
`rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

}

);

card.addEventListener(
"mouseleave",

()=>{

card.style.transform=
"rotateX(0) rotateY(0)";

}

);

}

);