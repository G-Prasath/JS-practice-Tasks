<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="./forms/style.css">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" defer></script>
</head>

<body>

    <form id="quote">
        <div class="input-group">
            <input type="text" name="name" id="name" placeholder="Name" autocomplete="off" />
            <span id="name-error"></span>
        </div>
        <div class="input-group">
            <input type="text" name="email" id="email" placeholder="Email" autocomplete="off" />
            <span id="email-error"></span>
        </div>
        <div class="input-group">
            <input type="text" name="phone" id="phone" placeholder="Phone" autocomplete="off" />
            <span id="phone-error"></span>
        </div>
        <div class="input-group">
            <input type="text" name="msg" id="msg" placeholder="msg" autocomplete="off" />
            <span id="msg-error"></span>
        </div>
        <div class="input-group">
            <button type="submit" name="submit" class="btn">Submit</button>
        </div>
    </form>

    <script src="./forms/script.js"></script>
</body>

</html>