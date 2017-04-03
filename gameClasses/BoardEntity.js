var BoardEntity = IgeEntity.extend({
	classId: 'BoardEntity',
	pieces: [],
	init: function () {
		IgeEntity.prototype.init.call(this);

		if( !ige.isServer ){
            // Create 81 Locations that mount to the board and have a background texture of board pattern
			this.texture(ige.client.textures.gameBoard)
			    .width(540)
					.height(540);

		}
	}
});

BoardEntity.prototype.setupBoard = function(){
			var p1SquareX1 = new PieceEntity({type: "p1_square_x"})
			.id('p1SquareX1')
			.streamMode(1)
			.translateTo(-240,240,0)
			.mount(this);

			var p1CircleX1 = new PieceEntity({type: "p1_circle_x"})
			.id('p1CircleX1')
			.streamMode(1)
			.translateTo(-240,180,0)
			.mount(this);

			var p1CircleX2 = new PieceEntity({type: "p1_circle_x"})
			.id('p1CircleX2')
			.streamMode(1)
			.translateTo(-180,240,0)
			.mount(this);

			var p1Square = new PieceEntity({type: "p1_square"})
			.id('p1Square1')
			.streamMode(1)
			.translateTo(-240,120,0)
			.mount(this);

			var p1Square2 = new PieceEntity({type: "p1_square"})
			.id('p1Square2')
			.streamMode(1)
			.translateTo(-180,180,0)
			.mount(this);

			var p1Square3 = new PieceEntity({type: "p1_square"})
			.id('p1Square3')
			.streamMode(1)
			.translateTo(-120,240,0)
			.mount(this);

			var p1Circle1 = new PieceEntity({type: "p1_circle"})
			.id('p1Circle1')
			.streamMode(1)
			.translateTo(-240,60,0)
			.mount(this);

			var p1Circle2 = new PieceEntity({type: "p1_circle"})
			.id('p1Circle2')
			.streamMode(1)
			.translateTo(-180,120,0)
			.mount(this);

			var p1Circle3 = new PieceEntity({type: "p1_circle"})
			.id('p1Circle3')
			.streamMode(1)
			.translateTo(-120,180,0)
			.mount(this);

			var p1Circle4 = new PieceEntity({type: "p1_circle"})
			.id('p1Circle4')
			.streamMode(1)
			.translateTo(-60,240,0)
			.mount(this);

			//#########################################################

			var p2SquareX1 = new PieceEntity({type: "p2_square_x"})
			.id('p2SquareX1')
			.streamMode(1)
			.translateTo(240,-240,0)
			.mount(this);

			var p2CircleX1 = new PieceEntity({type: "p2_circle_x"})
			.id('p2CircleX1')
			.streamMode(1)
			.translateTo(240,-180,0)
			.mount(this);

			var p2CircleX2 = new PieceEntity({type: "p2_circle_x"})
			.id('p2CircleX2')
			.streamMode(1)
			.translateTo(180,-240,0)
			.mount(this);

			var p2Square = new PieceEntity({type: "p2_square"})
			.id('p2Square1')
			.streamMode(1)
			.translateTo(240,-120,0)
			.mount(this);

			var p2Square2 = new PieceEntity({type: "p2_square"})
			.id('p2Square2')
			.streamMode(1)
			.translateTo(180,-180,0)
			.mount(this);

			var p2Square3 = new PieceEntity({type: "p2_square"})
			.id('p2Square3')
			.streamMode(1)
			.translateTo(120,-240,0)
			.mount(this);

			var p2Circle1 = new PieceEntity({type: "p2_circle"})
			.id('p2Circle1')
			.streamMode(1)
			.translateTo(240,-60,0)
			.mount(this);

			var p2Circle2 = new PieceEntity({type: "p2_circle"})
			.id('p2Circle2')
			.streamMode(1)
			.translateTo(180,-120,0)
			.mount(this);

			var p2Circle3 = new PieceEntity({type: "p2_circle"})
			.id('p2Circle3')
			.streamMode(1)
			.translateTo(120,-180,0)
			.mount(this);

			var p2Circle4 = new PieceEntity({type: "p2_circle"})
			.id('p2Circle4')
			.streamMode(1)
			.translateTo(60,-240,0)
			.mount(this);


}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = BoardEntity; }
