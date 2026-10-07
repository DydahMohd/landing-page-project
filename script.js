// NEXA LANDING PAGE — navigation and scroll interactions
// Mobile hamburger menu.
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');
toggle.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');
toggle.setAttribute('aria-expanded','false')}));
// Reveal elements as they enter the viewport.
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible'); observer. unobserve(e.target)}}),
{threshold:.12}); document.querySelectorAll('.reveal').forEach(el=>observer. observe(el));
// Highlight the active navigation item for the section in view.
const sections=document.querySelectorAll('main section[id]');
const links=document.querySelectorAll('.nav-links a');
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),
{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>sectionObserver.observe(s));
