<?php

// From https://phprouter.com

require_once __DIR__.'/router.php';

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Max-Age: 86400');
}

// ##################################################
// ##################################################
// ##################################################

get('/crewmates', 'views/get_crewmates');

get('/crewmate/$id', 'views/get_crewmate');

get('/crewmate/$id/vitals', 'views/get_vitals');

put('/crewmate/$id', 'views/update_crewmate');

delete('/crewmate/$id', 'views/delete_crewmate');

delete('/crewmate/$id/vital', 'views/delete_vital');

post('/crewmate/$id/vital', 'views/add_vital');
