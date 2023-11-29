<!-- src/components/Footer.svelte -->

<script>
  import logo from "$svg/logo_prefeitura.png"; 
	import { activeBar } from "$stores/misc.js";
</script>


 <footer class="footer">
	<h3>Autores</h3>
	<h6>Caio Jacintho</h6>
	<h6>Judite Cispreste</h6>
	<br>
	<br>
	<h3>Agradecimentos</h3>
	<h6>Blablablablaba balbablaa</h6>
	<h6>Blablablablaba balbablaa</h6>
	<h6>Blablablablaba balbablaa</h6>

	<br>
	<br>
	<h3>Prefeito</h3>
	<h6>Eduardo Paes</h6>
	
	<br>
	<br>
	<img class="logo" src={logo} alt="Logo" />
	<br>
	<br>
 </footer>
 
 <style>
	.footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;

}


	.footer h2,
	.footer h3,
	.footer h6 {
		margin: 0 20px 10px;
	}
	
	.footer h3{
		font-weight: bold
	}
	.logo{
		margin: 0 20px 10px;
	}
 
	.footer img {
		width: 100px;
		height: auto;
	}
 </style>
 