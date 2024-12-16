const button = document.querySelectorAll('.button')
const body = document.querySelector('body')


button.forEach( (button) => {
    // console.log(button);
    button.addEventListener('click', (event) => {
        // console.log(event);
        // console.log(event.target.id);
        const key = event.target.id
        switch (key) {
            case 'purple':
                body.style.backgroundColor = event.target.id
                break;
            case 'gray':
                body.style.backgroundColor = event.target.id
                break;
            case 'orange':
                body.style.backgroundColor = event.target.id
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id
                break;   
            default:body.style.backgroundColor = 'black'
                break;
        }
        
    })
});