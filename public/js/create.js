let button1 = document.getElementsByClassName('check1');
let button2 = document.getElementsByClassName('check2');
let departements = document.getElementsByClassName('departement');

const poste = document.getElementById('poste');

const box1 = document.getElementsByClassName('box1')[0];
const box2 = document.getElementsByClassName('box2')[0];
const box3 = document.getElementsByClassName('box3')[0];

for (const element of button1) {
    element.addEventListener('click', () => {
        box1.classList.toggle('d-none');
        box2.classList.toggle('d-none');
    });
};

for (const element of button2) {
    element.addEventListener('click', () => {
        box2.classList.toggle('d-none');
        box3.classList.toggle('d-none');
        for (const departement of departements) {
            departement.classList.add('d-none');
            if (departement.id === poste.value) {
                departement.classList.remove('d-none');
            }
        }
    });
};
