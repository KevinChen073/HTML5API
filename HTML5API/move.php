<?php
    if ($_FILES['file']['error'] > 0){
        echo "上传有误，错误代码为：".$_FILES['file']['error'];
    } else {
        $target = "src/".$_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'],$target);
        echo $target;
    }

?>