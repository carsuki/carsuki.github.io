var user = 'tz1f62BQLTuxUpEXLFKc13jERiHAwGs8jBBq'
var offset = '0'



// populate cells
document.addEventListener('DOMContentLoaded', (event) => {
	axios.get('https://api.better-call.dev/v1/account/mainnet/tz1f62BQLTuxUpEXLFKc13jERiHAwGs8jBBq/token_balances?size=10&offset=0')
	.then(resp => {
		var tokens = resp.data;
		let cells = document.querySelectorAll('.carousel-cell');
		for(var i = 0; i < cells.length; i ++) {
			document.getElementsByClassName('carousel-header')[i].textContent = tokens.balances[i].name;
			var ipfsLink = tokens.balances[i].formats[0].uri;
			var ipfsRemoved = ipfsLink.replace("ipfs://", "");
			var newIpfsLink = 'https://ipfs.io/ipfs/' + ipfsRemoved;
			document.getElementsByClassName('carousel-img')[i].style.backgroundImage = "url\(\'" + newIpfsLink + "\'\)";
		}
	})
	.catch(err => {
		// Handle Error Here
		console.error(err);
	});
})