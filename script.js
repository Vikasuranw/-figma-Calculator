
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('button');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerText;

            if (buttonText === 'x') {
                screenValue += '*';
                screen.value = screenValue;
            } else if (buttonText === 'DEL') {
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue;
            } else if (buttonText === '=') {
                try {
                    screen.value = eval(screenValue);
                    screenValue = screen.value;
                } catch (err) {
                    screen.value = 'Error';
                    screenValue = '';
                }
            } else if (buttonText === 'Reset') {
                screenValue = '';
                screen.value = '';
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        });
    });
});
