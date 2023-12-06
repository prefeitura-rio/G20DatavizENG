<!-- src/components/Footer.svelte -->

<script>
  import logo from "$svg/logo.svg"; 
	import { activeBar } from "$stores/misc.js";
</script>


 <footer class="footer">
	<h3 id="autores">Autores</h3>
	<h6>Caio Jacintho</h6>
	<h6>Judite Cypreste</h6>
	<h6>Vanessa Leme</h6>
	<h6>Elizeu Santiago de Souza</h6>
	<h6>Simone Pennafirme</h6>
	<h6>Lucas Tavares</h6>
  
	<br>
	<br>
	<h3 id="agradecimentos">Agradecimentos</h3>
	<h6>Lucas Padilha</h6>
	<h6>João Carabetta</h6>
	<h6>Pedro Marreca</h6>
	<h6>Rafael Martins de Araujo</h6>

	<br>
	<br>
	<h3 id="prefeito">Prefeito</h3>
	<h6>Eduardo Paes</h6>
	<div class="footer_logo">
		{@html logo}
	</div>
	<br>
	<br>
 </footer>
 
 <style>
	#autores, #agradecimentos, #prefeito{
		font-size: 25px;
	}
	.footer_logo{
		padding:150px;
	}
	.footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;

}
	.footer h3,
	.footer h6 {
		margin: 0 20px 10px;
		font-size: 15px;
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
 