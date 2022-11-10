let contadorId = 0;
const inputText = document.getElementsByClassName('form__control')[0]
const inputBuscar = document.getElementsByClassName('btn')[0]
const buscarFiltro = document.querySelector('#buscarInput')

inputBuscar.addEventListener('click', () => {
    let localitems = JSON.parse(localStorage.getItem('localItem'))
    if (localitems === null) {
        tasklist = []
    } else {
        tasklist = localitems;
    }
    tasklist.push(inputText.value)
    localStorage.setItem('localItem', JSON.stringify(tasklist))
    showlist();
})


function showlist(){
    
    contadorId++;
    let output = '';
    let tasklistshow = document.querySelector('.list__group')
    let localitems = JSON.parse(localStorage.getItem('localItem'))
    if (localitems === null) {
        tasklist = []
    } else {
        tasklist = localitems;
    }
    tasklist.forEach((data, index) => {
        contadorId++;
        output +=
            `
        <li id="${contadorId}">
            <label for="">
                <input type="checkbox">
                ${data}
            </label>
            <i class="fa-solid fa-trash-can" onclick="deleteItem(${index})"></i>
        </li>
        `
    });
    tasklistshow.innerHTML = output;

}
showlist()


function deleteItem(index){
    let localItems =  JSON.parse(localStorage.getItem('localItem'))
    tasklist.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(tasklist))
    showlist()
}

buscarFiltro.addEventListener('keyup', ()=>{
    const caracter = buscarFiltro.value.trim();
    buscarTarea(caracter);
})


const buscarTarea = (texto)=>{
    let arreglo = Array.from(lista__task.children)

    arreglo.filter(text => !text.textContent.toLowerCase().includes(texto)).forEach(cadena =>{
            cadena.classList.add('textoFiltrado')
        });
    arreglo.filter(text => text.textContent.toLowerCase().includes(texto)).forEach(cadena =>{
            cadena.classList.remove('textoFiltrado')
        });  
}