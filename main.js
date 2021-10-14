const player1 = {
    name: 'Sub-zero',
    hp: 100,
    img: '',
    weapon: ['ice', 'snow'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

const player2 = {
    name: 'Liu-kang',
    hp: 100,
    img: '',
    weapon: ['leg bicycle'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

function createPlayer(className, playerName) {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $progressBar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerName;
    $progressBar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $image = document.createElement('img');
    $image.src = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif';
    $character.appendChild($image);

    const $arenas = document.querySelector('.arenas');
    $player.appendChild($progressBar);
    $player.appendChild($character);
    $arenas.appendChild($player);
}

createPlayer('player1', 'Sub-zero', 97);
createPlayer('player2', 'Liu-kang', 98);
