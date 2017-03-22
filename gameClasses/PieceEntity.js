var PieceEntity = IgeEntity.extend({
	classId: 'PieceEntity',
	init: function () {
		IgeEntity.prototype.init.call(this);
	},
	setType: function( type ){
		if( !ige.isServer ){
			var texture = ige.client.textures.pieceTypes[type];
			this.setTexture( texture );
		}
		return this;
	},

	setTexture: function( texture ){
		if( !ige.isServer ){
			this.texture( texture )
				.width(50)
				.height(50);
		}

		return this;

	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = PieceEntity; }
