<?php

require_once('database.php');

$body = json_decode(file_get_contents("php://input"));

foreach ($body as $key => $property) {
    switch ($key) {
        case 'FirstName':
            $sql = $db->prepare('UPDATE Crewmate SET FirstName = :property WHERE CrewmateID = :id;');
            $sql->bindValue(':property', $property);
            $sql->bindValue(':id', $id);
            $sql->execute();
            $sql->closeCursor();
            break;
        case 'LastName':
            $sql = $db->prepare('UPDATE Crewmate SET LastName = :property WHERE CrewmateID = :id;');
            $sql->bindValue(':property', $property);
            $sql->bindValue(':id', $id);
            $sql->execute();
            $sql->closeCursor();
            break;
        case 'DOB':
            $sql = $db->prepare('UPDATE Crewmate SET DOB = :property WHERE CrewmateID = :id;');
            $sql->bindValue(':property', $property);
            $sql->bindValue(':id', $id);
            $sql->execute();
            $sql->closeCursor();
            break;
    }
}
