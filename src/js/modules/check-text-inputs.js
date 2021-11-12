const checkTextInputs = (selector) => {
    const textInp = document.querySelectorAll(selector);

    textInp.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;