(() => {
    const box = document.getElementById('box');
    const btn = document.getElementById('btn');

    // операторы для привязки обработчика событий которые, 
    // будут передавать аргументы второй функции.
    box.addEventListener('mouseover', (event) => reactTo(event, 'Red'));
    box.addEventListener('mouseout', (event) => reactTo(event, 'Purple'));
    box.addEventListener('mousedown', (event) => reactTo(event, 'Green'));
    box.addEventListener('mouseup', (event) => reactTo(event, 'Blue'));
    btn.addEventListener('click', (event) => reactTo(event, 'Orange'));

    // функция для отображения типа событий 
    // изменение цвета фона первого абзаца
    const reactTo = (event, color) => {
        document.getElementById('box').style.background = color;
        document.getElementById('info').innerText = event.type;
    }
})();