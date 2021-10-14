const player1 = {
    name: 'Sub-zero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice', 'snow'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

const player2 = {
    name: 'Liu-kang',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['leg bicycle'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

function createPlayer(className, playerObj) {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObj.hp;
    $progressBar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;
    $progressBar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $image = document.createElement('img');
    $image.src = playerObj.img;
    $character.appendChild($image);

    const $arenas = document.querySelector('.arenas');
    $player.appendChild($progressBar);
    $player.appendChild($character);
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
