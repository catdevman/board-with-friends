var config = {
	include: [
		//{name: 'MyClassName', path: './gameClasses/MyClassFileName'},
		{name: 'BoardEntity', path: 'gameClasses/BoardEntity'},
		{name: 'PieceEntity', path: 'gameClasses/PieceEntity'},
		{name: 'BWFGame', path: 'gameClasses/BWFGame'}
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = config; }
