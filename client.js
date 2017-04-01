var Client = IgeClass.extend({
	classId: 'Client',

	init: function () {
		//ige.timeScale(0.1);
		ige.addComponent(IgeEditorComponent);

		// Load our textures
		var self = this;
        self.entityArray = [];

		// Enable networking
		ige.addComponent(IgeNetIoComponent);

		// Create the HTML canvas
		ige.createFrontBuffer(true);

		// Load the textures we want to use
		this.textures = {
			gameBoard: new IgeTexture('./assets/game_board.png'),
			pieceTypes: {
				p1_circle_x: new IgeTexture('./assets/p1_circle_x.png'),
				p1_circle: new IgeTexture('./assets/p1_circle.png'),
				p1_square_x: new IgeTexture('./assets/p1_square_x.png'),
				p1_square: new IgeTexture('./assets/p1_square.png'),
				p1_movable_area: new IgeTexture('./assets/p1_movable_area.png'),
				p2_circle_x: new IgeTexture('./assets/p2_circle_x.png'),
				p2_circle: new IgeTexture('./assets/p2_circle.png'),
				p2_square_x: new IgeTexture('./assets/p2_square_x.png'),
				p2_square: new IgeTexture('./assets/p2_square.png'),
				p2_movable_area: new IgeTexture('./assets/p2_movable_area.png')
			}

		};

		ige.on('texturesLoaded', function () {
			// Ask the engine to start
			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Start the networking (you can do this elsewhere if it
					// makes sense to connect to the server later on rather
					// than before the scene etc are created... maybe you want
					// a splash screen or a menu first? Then connect after you've
					// got a username or something?
					ige.network.start('http://localhost:2000', function () {
						// Setup the network stream handler
						ige.network.addComponent(IgeStreamComponent)
							.stream.renderLatency(80) // Render the simulation 160 milliseconds in the past
							// Create a listener that will fire whenever an entity
							// is created because of the incoming stream data
							.stream.on('entityCreated', function (entity) {
								self.log('Stream entity created with ID: ' + entity.id());
                self.entityArray[entity.id()] = entity;
                if( entity instanceof PieceEntity){
									console.log( entity._type );
                  entity.mouseUp( function(){
                          console.log( this );
                  });
                }
							});

						// Load the base scene data
						ige.addGraph('IgeBaseScene');

					});
				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }
