<?php require 'inc/head.php'; ?>

<div class="w3-white">
	<div id="myBar" class="w3-container w3-cyan"></div>
	<a onclick="back()" class="w3-margin w3-button w3-circle w3-light-gray"><i class="fa fa-arrow-left"></i></a>
</div>

<div class="w3-container">
	<div class="w3-section">
		<h2 class="w3-text-cyan"><strong id="title"></strong></h2>
		<p id="statement"></p>
	</div>

	<div class="w3-section">
		<a id="proBtn" onclick="pro(); next();" class="w3-button w3-black w3-hover-cyan">Eens</a>
		<a id="ambivalentBtn" onclick="ambivalent(); next();" class="w3-button w3-black w3-hover-cyan">Geen van beide</a>
		<a id="contraBtn" onclick="contra(); next();" class="w3-button w3-black w3-hover-cyan">Oneens</a>
		<a class="w3-text-grey w3-hover-text-black btn-skip" onclick="next()">Sla deze vraag over <i class="fa fa-arrow-right"></i></a>
	</div>
</div>

<?php require 'inc/footer.php'; ?>