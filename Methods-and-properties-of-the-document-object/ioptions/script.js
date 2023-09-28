(() => {
    // обработчик событий для отправки формы и загрузки окна
    const list = document.getElementById('list');
    list.addEventListener('change', () => reactTo(list, event));
    list.addEventListener('load', () => reactTo(list, event));
})();

// обработчик событий, который будет отображать выбранное событие 
// и текущий список в абзаце.
const reactTo = (list, event) => {
    const info = document.getElementById('list');
    let index = list.options.selectedIndex;
    let city = list.options[index].value;
    info.innerHTML = `${event.type}<br>Selected: `;
    info.innerHTML += `${city}<br>Index: ${index}`;
}