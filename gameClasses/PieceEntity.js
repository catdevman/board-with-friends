var PieceEntity = IgeEntity.extend({
	classId: 'PieceEntity',
    type: 'p1_square_x',
	init: function (options ) {
		IgeEntity.prototype.init.call(this);
        var self = this;
            if( !ige.isServer ){
                console.log( ige.client.textures.pieceTypes );
                console.log( self.type );
                this.setType( self.type );
            } else{
                self.type = options.type;
            }

	}
});

PieceEntity.prototype.setType = function( type ){

        if( !ige.isServer ){
            this.type = type;
            var texture = ige.client.textures.pieceTypes[type];
            this.setTexture( texture );
        }
}

PieceEntity.prototype.setTexture = function( texture ){
    this.texture( texture )
        .width(50)
        .height(50);
}

PieceEntity.prototype.highlight = function () {
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = PieceEntity; }
