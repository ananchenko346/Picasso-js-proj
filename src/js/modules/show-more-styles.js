import { getResource } from "./services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function () {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => alert(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach(i => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${i.src} alt="style">
                <h4>${i.title}</h4>
                <a href=${i.link}>Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;