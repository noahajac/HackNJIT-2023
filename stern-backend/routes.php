<?php

// From https://phprouter.com

require_once __DIR__.'/router.php';

// ##################################################
// ##################################################
// ##################################################

get('/crewmates', 'views/get_crewmates');

get('/crewmate/$id', 'views/get_crewmate');

get('/crewmate/$id/vitals', 'views/get_vitals');

put('/crewmate/$id', 'views/update_crewmate');

delete('/crewmate/$id', 'views/delete_crewmate');