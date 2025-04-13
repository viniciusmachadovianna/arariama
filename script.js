const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click',()=>{
    const tema = document.documentElement.getAttribute("data-tema");
    btnTema.querySelector('img').src=`assets/icons/${tema}.svg`;
    let proxTema=tema==="claro"?"escuro":"claro";
    document.documentElement.setAttribute("data-tema", proxTema);
})