export const contactPage = () => {
   const  sectionContact = document.createElement('section');
   sectionContact.classList.add('contactPage');
   const tempSectionContact = 
    ` <div class="contact-page">
       <label>contact page</label>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a ipsum aut ullam quod eos, fugiat, asperiores molestias accusamus veniam facilis autem optio magnam! Officia magnam minus eligendi fugiat corrupti!</p>
      </div>
    `;
    sectionContact.innerHTML = tempSectionContact;
    return sectionContact;
}