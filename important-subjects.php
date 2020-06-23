<?php require 'inc/head.php'; ?>

<div class="w3-white">
	<div id="myBar" class="w3-container w3-cyan" style="height:4px;"></div>
	<a class="w3-margin w3-button w3-circle w3-light-gray" href="statement.php"><i class="fa fa-arrow-left"></i></a>
</div>
<div class="w3-container">
	<div class="w3-section">
		<h1 class="w3-text-cyan"><strong>Zijn er onderwerpen die u extra belangrijk vindt?</strong></h1>
		<h4>Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.</h4>
	</div>
	<input class="w3-section w3-button w3-black w3-hover-cyan" type="submit" form="form" value="Ga verder">
</div>
<div class="w3-section w3-container w3-light-gray">
	<h4 class="w3-section w3-container"><strong>Extra belangrijke onderwerpen</strong></h4>
	<form id="form" method="GET" action="result.php">
		<div id="col1" class="w3-container w3-md 4">
			
		</div>
		<div id="col2" class="w3-container w3-md 4">
			
		</div>
		<div id="col3" class="w3-container w3-md 4">
			
		</div>
	</form>
</div>

<?php require 'inc/footer.php'; ?>