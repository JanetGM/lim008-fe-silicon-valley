export const projectPage = () => {
    const  sectionContact = document.createElement('section');
    sectionContact.classList.add('contactPage');
    const tempSectionContact = 
     ` <div>
        <label>projects page</label>
        <p>ciatis a ipsum aut ullam quod eos, fugiat, asperiores molestias accusamus veniam facilis autem optio magnam! Officia magnam minus eligendi fugiat corrupti!</p>
       </div>
     `;
     sectionContact.innerHTML = tempSectionContact;
     return sectionContact;
 }