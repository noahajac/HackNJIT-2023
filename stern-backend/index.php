<?php
require_once('vendor/autoload.php');
require_once('get_crewmates_handler.php');
require_once('get_crewmate_handler.php');
require_once('update_crewmate_handler.php');



$pathprefix = '/projects/local-HackNJIT-2023';

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    global $pathprefix;
    $r->addRoute('GET', $pathprefix . '/crewmates' , 'get_crewmates_handler');
    // {id} must be a number (\d+)
    $r->addRoute('GET', $pathprefix . '/crewmate/{id:\d+}', 'get_crewmate_handler');
    // The /{title} suffix is optional
    $r->addRoute('PUT', $pathprefix . '/crewmate/{id:\d+}', 'update_crewmate_handler');
});

// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);

switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        // ... 404 Not Found
        echo "404";
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        // ... 405 Method Not Allowed
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
        $handler($vars);
        break;
}


?>