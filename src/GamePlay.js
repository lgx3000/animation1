
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/fondo1.png");
        me.load.image('piso',"assets/images/piso.png");
        me.load.image('cab1',"assets/images/cab1.png");
		me.load.spritesheet("crow","assets/images/crow.png",68.5,109);
		me.load.spritesheet("dra","assets/images/dra.png",762.75,300);
		me.load.spritesheet("scor","assets/images/scor.png",241,208);
		me.load.spritesheet("man","assets/images/man.png",88.25,66);
		
    },
    create: function() {
		var me=this;
		

       	me.fo=me.game.add.sprite(0, 0, 'background');
       	me.fo2=me.game.add.sprite(1054, 0, 'background');
       	me.fo3=me.game.add.sprite(2108, 0, 'background');

       	me.dra=me.game.add.sprite(-750,220,"dra");
		me.dra.animations.add("left",[2,3,2,3,2,3,2,3,2,0,1,0],2,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.dra.animations.play("left");

       	me.pi=me.game.add.sprite(0, 500, 'piso');
       	me.pi1=me.game.add.sprite(1130, 500, 'piso');
       	me.pi11=me.game.add.sprite(2260, 500, 'piso');
		
		me.crow= me.game.add.sprite(0,150,"crow");
		me.crow.animations.add("right",[0,1,2,3],8,true);
		me.crow.animations.play("right");


		me.crow2= me.game.add.sprite(0,20,"crow");
		me.crow2.animations.add("right",[0,1,2,3],10,true);
		me.crow2.animations.play("right");
		
		me.man=me.game.add.sprite(100,450,"man");
		me.man.animations.add("left",[3,2,1,0],9,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("left");

		me.cab1=me.game.add.sprite(0, 535, 'cab1');
		me.cab2=me.game.add.sprite(1135, 535, 'cab1');
		me.cab3=me.game.add.sprite(2270, 535, 'cab1');

		me.man2=me.game.add.sprite(125,450,"man");
		me.man2.animations.add("left",[3,2,1,0],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man2.animations.play("left");

		me.scor=me.game.add.sprite(150,540,"scor");
		me.scor.animations.add("left",[5,4,3,2,1,0],14,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.scor.animations.play("left");

		me.scor1=me.game.add.sprite(200,540,"scor");
		me.scor1.animations.add("left",[5,4,3,2,1,0],14,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.scor1.animations.play("left");

		me.scor2=me.game.add.sprite(250,540,"scor");
		me.scor2.animations.add("left",[5,4,3,2,1,0],14,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.scor2.animations.play("left");
    },
    update: function() {
		var me=this;
		me.dra.x+=1;
		me.crow.x+=3;
		me.crow2.x+=5;
		me.man.x+=2;
		me.man2.x+=3;
		me.scor.x+=3;
		me.scor1.x+=5;
		me.scor2.x+=4;
		me.fo.x-=0.2;
		me.fo2.x-=0.2;
		me.fo3.x-=0.2;
		me.pi.x-=0.5;
		me.pi1.x-=0.5;
		me.pi11.x-=0.5;
		me.cab1.x-=0.5;
		me.cab2.x-=0.5;
		me.cab3.x-=0.5;
		if(me.dra.x>=me.game.world.width){
			me.dra.x=-720;
			me.pi11.x=1130;
			me.cab3.x=1130;
			}
		if(me.pi.x>=me.game.world.width){
			me.pi.x=-100;
			}
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			me.scor2.x=-100;	
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			me.crow2.x=-100;
			me.scor1.x=-100;			
			}
		if(me.man2.x>=me.game.world.width){
			me.man2.x=-100;
			}
		if(me.scor.x>=me.game.world.width){
			me.scor.x=-150;
			}  
    }
}

var game = new Phaser.Game(1360, 700, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");