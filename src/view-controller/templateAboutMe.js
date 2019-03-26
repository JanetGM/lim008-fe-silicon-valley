export const aboutMe = () => {
    const  sectionAboutMe = document.createElement('section');
    sectionAboutMe.classList.add('aboutMe');
    const tempSectionAboutMe = `
       <div class = "size-div about-page">
        <label>about me</label>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a ipsum aut ullam quod eos, fugiat, asperiores molestias accusamus veniam facilis autem optio magnam! Officia magnam minus eligendi fugiat corrupti!</p>
       </div>
    `;
    sectionAboutMe.innerHTML = tempSectionAboutMe;
    return sectionAboutMe;
}