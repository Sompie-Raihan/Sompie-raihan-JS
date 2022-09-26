const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#cccc';
judul.innerHTML = 'Budi'; 

// const p1 = document.getElementsByTagName('p')[0];
// p1.style.backgroundColor = 'red';

const h1 = document.getElementsByClassName('h1')[0];
h1.style.backgroundColor = 'lightblue';

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'gray';

const p = document.querySelectorAll('p');

for ( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'brown';
}

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.color = 'yellow';