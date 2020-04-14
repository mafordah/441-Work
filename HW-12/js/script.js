var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var orbs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var velocity = 160;
var orbPower = false;

var game = new Phaser.Game(config);


function preload (){
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('orb', 'assets/wizball.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}


function create (){
    // Background
    this.add.image(400, 300, 'sky');

    // Add Platforms
    platforms = this.physics.add.staticGroup();

    // Platforms
    // Ground
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    // Little
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(325, 100, 'ground');


    // Player
    player = this.physics.add.sprite(100, 450, 'dude');
    // Player physics
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Animation
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    // Input
    cursors = this.input.keyboard.createCursorKeys();

    // Stars
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {
        // Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.6));
        child.setGravityY(Phaser.Math.FloatBetween(-300, -100));
    });

    bombs = this.physics.add.group();

    orbs = this.physics.add.group();


    // Score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    // Collisions
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(orbs, platforms);


    // Collect
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

    this.physics.add.collider(player, orbs, hitOrb, null, this);

}


function update (){
    // Movement
    if (gameOver){
        return;
    }

    if (cursors.left.isDown){
        player.setVelocityX(-velocity);

        player.anims.play('left', true);
    } else if (cursors.right.isDown){
        player.setVelocityX(velocity);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.space.isDown && player.body.touching.down){
        player.setVelocityY(-330);
    }
}


function collectStar (player, star){
    star.disableBody(true, true);

    // Update score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0){
        // New Stars
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

        var orb = orbs.create(x, 0, 'orb');
        orb.setBounce(1);
        orb.setCollideWorldBounds(true);
        orb.setVelocity(Phaser.Math.Between(-200, 200), 10);
        orb.setGravityY(-200);
        orb.allowGravity = true;

    }
}

function hitBomb (player, bomb){
  // Check for orb power
  if (orbPower == true){
    //distroy bombs
    score += 100;
    scoreText.setText('Score: ' + score);
    bomb.disableBody(true, true);

  } else {
    //bombs distroy player
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
  }
}


function hitOrb (player, orb){
    orbPower = true;
    orb.disableBody(true, true);
    player.setTint(0x12af2d);

    velocity = 300;

    // Add Timer
    this.time.addEvent({
    delay: 8000,
    callback: ()=>{
        orbEnd();
    },
    })
}

function orbEnd (){
  // end orbPower
  orbPower = false;
  velocity = 160;
  player.clearTint();
}
