// forEach Loop

const myArray = [
    {
        "languageName": "JavaScript",
        "languageFileName": "js"
    },
    {
        "languageName": "Java",
        "languageFileName": "java"
    },
    {
        "languageName": "HTML",
        "languageFileName": "html"
    },
    {
        "languageName": "CSS",
        "languageFileName": "css"
    },
    {
        "languageName": "Python",
        "languageFileName": "py"
    }
]


myArray.forEach( (item) => {
    console.log(`${item.languageFileName} is extension of ${item.languageName} language.`);
    
})