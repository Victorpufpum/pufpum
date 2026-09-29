const translation = {
    en: {
        select : "Select a Language",
        title : "Welcome to my digital notebook!",
        par : "im Víctor",
    },
    es: {
        select : "Elegi un Idioma",
        title : "Bienvenid+ a mi cuaderno digital!",
        par : "Soy Víctor",
    } 
};


const LanguageSelectop = document.querySelector("select");
let h2 = document.getElementById("h2");
let title = document.getElementById("title");
let par = document.getElementById("par");

LanguageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})


const setLanguage = (language) => {
    {
        h2.innerText = translation[language].select;
        title.innerText = translation[language].title;
        par.innerText = translation[language].par;
    }
}


