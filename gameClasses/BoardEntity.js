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
			var p1CircleX = new PieceEntity({"type": "p1_circle_x"})
			.id('p1CircleX')
			.streamMode(1)
			.mount(ige.$('boardEntity'));
}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = BoardEntity; }
