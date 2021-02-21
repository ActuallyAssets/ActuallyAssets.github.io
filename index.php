<?php @session_start();

?><!DOCTYPE html>
<html>
<head>
<title>Homepage2</title>
<link rel="stylesheet" href="style.css">
<script src="ApiResponse.js"></script>
<script src="Elements.js"></script>
<script>
const AVAILABLE_PACKS = [<?php 
echo '"ActuallyAssets","DwarvenAssets"';
?>];
</script>
</head>
<body>
<div id="packs" class="center"></div>
<script>
AVAILABLE_PACKS.forEach(pack => {
    appendElementPackDisplay(pack);
});
</script>
</body>
</html>