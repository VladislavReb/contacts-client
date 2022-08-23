const list = document.querySelector('.contacts');

export const renderContact = ({name, tel}) => {
  const contact = document.createElement('li');
  contact.classList.add('contact');

  contact.innerHTML = `
    <h2 class='contact__title'>
      ${name}
    </h2>
    <a href='tel:+380111111111'>
      ${tel}
    </a>
`;
  list.append(contact);
};