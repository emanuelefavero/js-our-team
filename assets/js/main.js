// DATA
const teamMembers = [
  {
    name: 'Marco Bianchi',
    role: 'Designer',
    email: 'marcobianchi@team.com',
    img: 'assets/img/male1.png',
  },
  {
    name: 'Laura Rossi',
    role: 'Front-end Developer',
    email: 'laurarossi@team.com',
    img: 'assets/img/female1.png',
  },
  {
    name: 'Giorgio Verdi',
    role: 'Back-end Developer',
    email: 'giorgioverdi@team.com',
    img: 'assets/img/male2.png',
  },
  {
    name: 'Marta Ipsum',
    role: 'SEO Specialist',
    email: 'martarossi@team.com',
    img: 'assets/img/female2.png',
  },
  {
    name: 'Roberto Lorem',
    role: 'SEO Specialist',
    email: 'robertolorem@team.com',
    img: 'assets/img/male3.png',
  },
  {
    name: 'Daniela Amet',
    role: 'Analyst',
    email: 'danielaamet@team.com',
    img: 'assets/img/female3.png',
  },
];

// ELEMENTS
const cardList = document.querySelector('.card-list');

// TEMPLATES
const getCardTemplate = ({ name, role, email, img }) => {
  return /*html*/ `
    <li class="card">
      <img src="${img}" alt="${name}" />
      <div class="content">
        <h2>${name}</h2>
        <p>${role}</p>
        <a href="mailto:${email}">${email}</a>
      </div>
    </li>
  `;
};

const getCardListTemplate = (members) => {
  let template = '';

  for (const member of members) {
    template += getCardTemplate(member);
  }

  return template;
};

// RENDERING
const renderCardList = (members) => {
  cardList.innerHTML = getCardListTemplate(members);
};

document.addEventListener('DOMContentLoaded', () =>
  renderCardList(teamMembers),
);
