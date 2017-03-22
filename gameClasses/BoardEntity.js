var BoardEntity = IgeEntity.extend({
	classId: 'BoardEntity',

	init: function () {
		IgeEntity.prototype.init.call(this);

		if( !ige.isServer ){
			this.texture(ige.client.textures.gameBoard)
			    .width(540)
				.height(540);
		}
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = BoardEntity; }
