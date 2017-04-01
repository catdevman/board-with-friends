var BoardEntity = IgeEntity.extend({
	classId: 'BoardEntity',

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

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = BoardEntity; }
