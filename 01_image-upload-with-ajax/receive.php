

<?php
	if($_FILES):
		
		$file = $_FILES["fotografia"];
		if(move_uploaded_file($file['temp_name'], $file['name'])){
			echo 'Image uploaded with sucess';
		}else{
			echo 'Upload failed';
		} 

	endif;

 ?>
