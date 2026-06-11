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
