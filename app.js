function dragDrop() {
    let placeholders = document.querySelectorAll('.placeholder')
    let button = document.querySelector('.button')

    for (const placeholder of placeholders) {
        placeholder.addEventListener('dragover', dragover)
        placeholder.addEventListener('dragenter', dragenter)
        placeholder.addEventListener('dragleave', dragleave)
        placeholder.addEventListener('drop', dragdrop)
    }
    
    function dragstart(event) {
        event.target.classList.add('hold', 'active');
        setTimeout(() => event.target.classList.add('hide'), 0)
    }
    
    function dragend(event) {
        event.target.classList.remove('hold', 'hide', 'active');

    }
    
    function dragover(event) {
        event.preventDefault()
    }
    
    function dragenter(event) {
        event.target.classList.add('hovered')
    }
    
    function dragleave(event) {
        event.target.classList.remove('hovered')
    }
    
    function dragdrop(event) {
        let activeElement = document.querySelector('.active')
            event.target.append(activeElement)
            event.target.classList.remove('hovered')
        }

    button.addEventListener('click', addItem);

    function addItem() {
        let newItem = document.createElement('p')
        let textInput = document.querySelector('.textInput')
        newItem.draggable = true
        newItem.textContent = textInput.value
        placeholders[0].append(newItem)
        newItem.addEventListener('dragstart', dragstart)
        newItem.addEventListener('dragend', dragend);
        newItem.className = 'item'
        textInput.value = ''
    }
}    

dragDrop()