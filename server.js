var Server = IgeClass.extend({
	classId: 'Server',
	Server: true,

	init: function (options) {
		var self = this;
        self.players = [];
        self.game = false;

		// Add the networking component
		ige.addComponent(IgeNetIoComponent)
			// Start the network server
			.network.start(2000, function () {
				// Networking has started so start the game engine
				ige.start(function (success) {
					// Check if the engine started successfully
					if (success) {
						ige.network.on('connect',
														function ( socket ) {
		                          var clientId = socket.id;
		                          self.players.push( clientId );

															if( self.game ){
																self.game.addPlayer( clientId );
															}
                        	}
											);
						ige.network.on('disconnect',
														function ( socket ) {
                            	var clientId = socket.id;
														}
												);

						// Add the network stream component
						ige.network.addComponent(IgeStreamComponent)
							.stream.sendInterval(30) // Send a stream update once every 30 milliseconds
							.stream.start(); // Start the stream



				    ige.addGraph('IgeBaseScene');
						if( !self.game ){
							var game = new BWFGame();
							self.game = game;
						}
						// Accept incoming network connections
						ige.network.acceptConnections(true);

					}
				});
			});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Server; }
