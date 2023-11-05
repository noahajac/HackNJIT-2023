<?php
function update_crewmate_handler($args)
{
    require 'database.php';
    $put_vars = json_decode(file_get_contents("php://input"));

    echo ($put_vars->first_name);
    print_r($args);

    $id = $args["id"];

    $query = 'UPDATE Crewmate SET';
    if ($put_vars->first_name != null) {
        $query .= " FirstName = $put_vars->first_name,";
    }

    if ($put_vars->last_name != null) {
        $query .= " LastName = $put_vars->last_name,";
    }

    if ($put_vars->dob != null) {
        $query .= " DOB = $put_vars->dob,";
    }

    $query .=  " WHERE CrewmateID = $id;";
}
