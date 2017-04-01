var PieceEntity = IgeEntity.extend({
	classId: 'PieceEntity',
    _type: '',
	init: function ( options ) {
		IgeEntity.prototype.init.call(this);
        var self = this;
            if( !ige.isServer ){
                this.setType( options.type );
            } else{
                self._type = options.type;
            }
						this.streamSections(['type']);

	},
	streamCreateData: function () {
		return {type: this._type};
	},
	/**
	 * Override the default IgeEntity class streamSectionData() method
	 * so that we can check for the custom1 section and handle how we deal
	 * with it.
	 * @param {String} sectionId A string identifying the section to
	 * handle data get / set for.
	 * @param {*=} data If present, this is the data that has been sent
	 * from the server to the client for this entity.
	 * @return {*}
	 */
	streamSectionData: function (sectionId, data) {
		// Check if the section is one that we are handling
		if (sectionId === 'type') {
			// Check if the server sent us data, if not we are supposed
			// to return the data instead of set it
			if (data) {
				// We have been given new data!
				this._type = data;
			} else {
				// Return current data
				return this._type;
			}
		} else {
			// The section was not one that we handle here, so pass this
			// to the super-class streamSectionData() method - it handles
			// the "transform" section by itself
			return IgeEntity.prototype.streamSectionData.call(this, sectionId, data);
		}
	}
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
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = PieceEntity; }
