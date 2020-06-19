
$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    })
})

document.querySelector('.edit').addEventListener('click', () => {
   const chatBox = document.querySelector('.chat-box');
   const options = document.createElement('div');
   options.className = 'option'
   options.innerHTML = `
   <ul>
   <li><a href="">Edit</a></li>
   <li><a href="">Delete</a></li>
   </ul>
   `
   chatBox.appendChild(options)
   options.style.display = 'block'
   
   
})