<?php

use Illuminate\Support\Str;

return [
    'template_directory' =>  Str::finish(env('REACT_EMAIL_DIRECTORY', base_path('react-emails')), '/')
];
