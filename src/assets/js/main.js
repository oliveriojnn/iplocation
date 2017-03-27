var app = new Vue({
	el: '#app',
	data: {
		message: 'Digite o endereço de IP',
		ip:'',
		erro:false,
		resultado:{},
		ips:[]
	},
	methods:{
		send: function(e) {
			e.preventDefault();
			var self = this;
			self.$http.get('https://freegeoip.net/json/' + this.ip)
			.then(function(result) {
				this.resultado = result.data;
				this.erro = false;
				this.ip = '';
				$('#ip').focus();
				if (this.resultado.ip) {
					this.ips.push(self.resultado);
				}
			})
			.catch(function(err) {
				this.erro = true;
				this.resultado = {};
				this.ip = '';
				$('#ip').focus();
			})
		},
		limpar: function(e) {
			this.ips = [];
			e.preventDefault();
			this.status = false;
			this.ip = '';
			this.resultado = {};	
		}
	}
})