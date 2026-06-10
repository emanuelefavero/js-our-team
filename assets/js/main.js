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

const FALLBACK_IMAGE = 'assets/img/new-user.png';
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

// STATE
let currentTeamMembers = [...teamMembers];

// ELEMENTS
const cardList = document.querySelector('.card-list');
const form = document.getElementById('new-member-form');

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

// UTILS
const getFormValues = (form) => {
  const formData = new FormData(form);

  return {
    name: formData.get('name').trim(),
    role: formData.get('role').trim(),
    email: formData.get('email').trim(),
    imageFile: formData.get('img'),
  };
};

const getImageUrl = (imageFile) => {
  if (imageFile.size === 0) return FALLBACK_IMAGE;

  return URL.createObjectURL(imageFile);
};

// RENDERING UTILS
const renderCardList = (members) => {
  cardList.innerHTML = getCardListTemplate(members);
};

// HANDLERS
const handleSubmit = (event) => {
  event.preventDefault();

  // Get form data
  const { name, role, email, imageFile } = getFormValues(event.currentTarget);

  // Validate
  if (!name || !role || !email) {
    alert('Please fill in all fields');
    return;
  }

  if (imageFile.size > MAX_IMAGE_SIZE) {
    alert('Image must be smaller than 5MB');
    return;
  }

  // Update state
  const newTeamMember = {
    name,
    role,
    email,
    img: getImageUrl(imageFile),
  };

  currentTeamMembers = [newTeamMember, ...currentTeamMembers];

  // Update UI
  renderCardList(currentTeamMembers);

  event.currentTarget.reset(); // Clear form
};

document.addEventListener('DOMContentLoaded', () => {
  renderCardList(currentTeamMembers);
  form.addEventListener('submit', handleSubmit);
});
