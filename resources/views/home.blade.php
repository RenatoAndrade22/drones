<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>B-DRON</title>

    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">

    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">

    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
</head>

<body>

    <div class="content-home">
        <div class="logo-home">
            <img src="/images/home/LOGO_BOLSONARO.png" alt="">
        </div>
        <div class="content-form">
            <div class="form-drone">
                <h5>Buscar Drone</h5>
                <div class="field-wrapper input">
                     <input type="text" placeholder="número de série" class="form-control">
                     <div class="field-wrapper mt-3">
                        <button value="" type="submit" class="btn btn-primary">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>
</html>
