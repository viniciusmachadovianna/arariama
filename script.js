const btnTema = document.getElementById('btnTema');
document.documentElement.setAttribute("data-tema", window.matchMedia('(prefers-color-scheme: light)').matches ? "claro" : "escuro");
btnTema.querySelector('img').src=`assets/icons/${window.matchMedia('(prefers-color-scheme: light)').matches ? "escuro" : "claro"}.svg`;

btnTema.addEventListener('click',()=>{
    const tema = document.documentElement.getAttribute("data-tema");
    btnTema.querySelector('img').src=`assets/icons/${tema}.svg`;
    let proxTema=tema==="claro"?"escuro":"claro";
    document.documentElement.setAttribute("data-tema", proxTema);
})
