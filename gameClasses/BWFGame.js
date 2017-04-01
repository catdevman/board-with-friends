var BWFGame = IgeClass.extend({
	classId: 'BWFGame',
    players: [],
	init: function () {
		if( ige.isServer ){
            ige.addGraph('IgeBaseScene');
            var boardEntity = new BoardEntity()
                .id('boardEntity')
                .streamMode(1)
                .mount(ige.$('baseScene'));

            var p1CircleX = new PieceEntity({"type": "p1_circle_x"})
                .id('p1CircleX')
                .streamMode(2)
                .mount(ige.$('boardEntity'));

                p1CircleX.streamSync( ige.server.players );
                console.log( p1CircleX.type );
                console.log( ige.server.players );
		}
	}
});

BWFGame.prototype.addPlayer = function( clientId ){
    this.players.push( clientId );
}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = BWFGame; }
