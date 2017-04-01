var BWFGame = IgeClass.extend({
	classId: 'BWFGame',
    players: [],
	init: function () {
		if( ige.isServer ){
            this.boardEntity = new BoardEntity()
                .id('boardEntity')
                .streamMode(1)
                .mount(ige.$('baseScene'));
							this.boardEntity.setupBoard();
		}
	}
});

BWFGame.prototype.addPlayer = function( clientId ){
	this.players.push( clientId );
}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = BWFGame; }
