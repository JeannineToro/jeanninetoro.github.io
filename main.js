document.getElementById('id-sun').onclick = function(){

    document.getElementById('page').classList.remove('dark-mode');
    document.getElementById('id-moon').classList.remove('active');
    this.classList.add('active');
}

document.getElementById('id-moon').onclick = function(){

    document.getElementById('page').classList.add('dark-mode');
    document.getElementById('id-sun').classList.remove('active');
    this.classList.add('active');
}

const boton = document.getElementById("boton");

const base = document.getElementById("base");

const animaciones = document.getElementById("animaciones");

const sublime = document.getElementById("sublime");

const visual = document.getElementById("visual");

const git = document.getElementById("git");

boton.onclick = nuevaClase;

function nuevaClase(){

	base.classList.add("mostrar");
	animaciones.classList.remove("quitar");
	animaciones.classList.add("numero");
	sublime.classList.remove("quitar");
	sublime.classList.add("numero");
	visual.classList.remove("quitar");
	visual.classList.add("numero");
	git.classList.remove("quitar");
	git.classList.add("numero");
}

function isElementInViewport(el){

    var rect = el.getBoundingClientRect();

    return (

        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var items = document.querySelectorAll(".timeLine li");

    function callbackFunc(){

        for (var i = 0; i < items.length; i++){

            if (isElementInViewport(items[i])){

                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
