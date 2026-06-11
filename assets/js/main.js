// STATE
let currentTeamMembers = [...teamMembers];

// ELEMENTS
const cardList = document.querySelector('.card-list');
const form = document.getElementById('new-member-form');

// RENDERING
const renderCardList = (members) => {
  cardList.innerHTML = getCardListTemplate(members);
};

// HANDLERS
/**
 * Handles the new member form submission
 */
const handleSubmit = (event) => {
  event.preventDefault();

  const { name, role, email, imageFile } = getFormValues(event.currentTarget);

  if (!name || !role || !email) {
    alert('Please fill in all fields');
    return;
  }

  if (imageFile.size > MAX_IMAGE_SIZE) {
    alert('Image must be smaller than 5MB');
    return;
  }

  const newTeamMember = {
    name,
    role,
    email,
    img: getImageUrl(imageFile),
  };

  currentTeamMembers = [newTeamMember, ...currentTeamMembers];
  renderCardList(currentTeamMembers);

  event.currentTarget.reset(); // Clear form
};

// INIT
document.addEventListener('DOMContentLoaded', () => {
  renderCardList(currentTeamMembers);
  form.addEventListener('submit', handleSubmit);
});
