<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="http://127.0.0.1:8480/api/portfolio-contact" method="post">
        <input type="hidden" value="key">
        <div class="mb-3 text-white">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Informe seu nome">
        </div>
        <div class="mb-3 text-white">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="nome@exemplo.com">
        </div>
        <div class="mb-3 text-white">
            <div class="row">
                <div class="col-md-7">
                    <label for="contact" class="form-label">Telefone para contato</label>
                    <input type="tel" maxlength="15" onkeyup="handlePhone(event)" class="form-control" id="contact" name="contact" placeholder="(99) 99999-9999">
                </div>
                <div class="col-md-5 d-flex align-items-end">
                    <div class="form-check">
                        <input v-model="whatsapp" class="form-check-input" type="checkbox" name="whatsapp" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Whatsapp
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3 text-white">
            <label for="message" class="form-label">Mensagem</label>
            <textarea class="form-control" name="description" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-danger">Enviar</button>
    </form>
</body>
</html>