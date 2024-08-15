
const toggleButton = document.querySelector('.toggle');
const contentPT = document.querySelector('#contentPT');
const contentUS = document.querySelector('#contentUS');


toggleButton.addEventListener('click', function() {     
    toggleButton.classList.toggle('active');
});

toggleButton.addEventListener('click', function() {     
    if(contentUS.style.display ==='block'){
        contentUS.style.display ='none';
    } else{
        contentUS.style.display ='block';
    }
    if (contentPT.style.display ==='none'){
        contentPT.style.display ='block';
    } else{
        contentPT.style.display ='none';
    }
});