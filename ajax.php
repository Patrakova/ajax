<?php
if(isset($_POST['number']) && isset($_POST['pow'])) {
    $response['ajaxNumber'] = $_POST['number'];
    $response['ajaxPow'] = $_POST['pow'];
    $response["ajaxResult"] = pow($_POST['number'], $_POST['pow']);
}
echo json_encode($response);
