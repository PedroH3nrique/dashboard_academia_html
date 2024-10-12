const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

/*botoes para ativar form*/
const cds = document.getElementById('cd_clt')
const mtr = document.getElementById('mtr')
const avl = document.getElementById('avl')
const agd = document.getElementById('agd')
const pgr = document.getElementById('pgr')

/*home sendo desativado */
const home = document.getElementById('home')

/* forms que serão ativados */
const progressos = document.getElementById('progressos')
const cadastrar_cliente = document.getElementById('cadastrar_cliente')
const matriculas = document.getElementById('matriculas')
const avaliacoes = document.getElementById('avaliacoes')
const agenda = document.getElementById('agenda')

cds.onclick = function(){

    progressos.style.display = 'none'
    cadastrar_cliente.style.display = 'block'
    matriculas.style.display = 'none'
    avaliacoes.style.display = 'none'
    agenda.style.display = 'none'
    home.style.display = 'none'

}

mtr.onclick = function(){

    progressos.style.display = 'none'
    cadastrar_cliente.style.display = 'none'
    matriculas.style.display = 'block'
    avaliacoes.style.display = 'none'
    agenda.style.display = 'none'
    home.style.display = 'none'

}

agd.onclick = function(){

    progressos.style.display = 'none'
    cadastrar_cliente.style.display = 'none'
    matriculas.style.display = 'none'
    avaliacoes.style.display = 'none'
    agenda.style.display = 'block'
    home.style.display = 'none'

}

avl.onclick = function(){
    
    progressos.style.display = 'none'
    cadastrar_cliente.style.display = 'none'
    matriculas.style.display = 'none'
    avaliacoes.style.display = 'block'
    agenda.style.display = 'none'
    home.style.display = 'none'

}

pgr.onclick = function(){

    progressos.style.display = 'block'
    cadastrar_cliente.style.display = 'none'
    matriculas.style.display = 'none'
    avaliacoes.style.display = 'none'
    agenda.style.display = 'none'
    home.style.display = 'none'

}


menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(element => {
    element.addEventListener('click', () => {
        if (activeItem) {
            activeItem.removeAttribute('id');
        }

        element.setAttribute('id', 'active');
        activeItem = element;

    });
});
