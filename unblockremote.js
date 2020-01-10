var body = $response.body;
body = '\/*\n@supported E0831F85E96D\n*\/\n' + body;

$done(body);
