import 'phaser';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Origami Defense');
    }

    preload ()
    {

    }

    create ()
    {
        
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Game
};

const game = new Phaser.Game(config);
