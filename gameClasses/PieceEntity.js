var PieceEntity = IgeEntity.extend({
	classId: 'PieceEntity',
    _type: '',
	init: function ( options ) {
		IgeEntity.prototype.init.call(this);
        var self = this;
        if( !ige.isServer ){
            this.setType( options.type );
						console.log( this );
						this.highlightEntity = new IgeEntity()
							.texture( this._type.toLowerCase().includes("square") ? ige.client.textures.squareHighlight : ige.client.textures.circleHighlight)
							.hide()
							.width(50)
							.height(50)
							.opacity(0.6)
							.mount(this);
        } else{
            self._type = options.type;
        }

	},
	streamCreateData: function () {
		return {type: this._type};
	},
});

PieceEntity.prototype.setType = function( type ){

        if( !ige.isServer ){
            var texture = ige.client.textures.pieceTypes[type];
            this.setTexture( texture );
        }
				this._type = type;
				return this;
}

PieceEntity.prototype.setTexture = function( texture ){
    this.texture( texture ).width(50).height(50);
}

PieceEntity.prototype.highlight = function () {
	this.highlightEntity.show();
};
PieceEntity.prototype.unhighlight = function () {
	this.highlightEntity.hide();
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = PieceEntity; }
