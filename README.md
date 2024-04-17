##API de Upload de Arquivos para o Google Drive com Node.js e Express
#Introdução

Este repositório fornece uma API RESTful simples para fazer upload de arquivos para o Google Drive usando Node.js e Express. A API permite que os usuários enviem arquivos para um endpoint específico e os salve automaticamente em uma pasta específica no Google Drive.

## Pré-requisitos

Node.js instalado
Conta do Google Drive com API Drive habilitada
Pacote multer instalado

## Instalação

Clone este repositório
Instale as dependências:
Bash
npm install
Use o código com cuidado.

## Configuração

Crie um arquivo credentials.json na raiz do projeto. Este arquivo deve conter as credenciais da sua conta do Google Drive. Você pode obtê-las seguindo as instruções em https://www.youtube.com/watch?v=B1EvWM_NAMc.
Defina a pasta de destino no Google Drive onde os arquivos serão salvos na variável de ambiente GOOGLE_DRIVE_FOLDER_ID. Você pode encontrar o ID da pasta no URL da pasta do Google Drive.

## Uso

A API expõe um endpoint POST /upload para fazer upload de arquivos. O seguinte é um exemplo de como enviar um arquivo usando cURL:
```
Bash
curl -X POST -F 'file=@myfile.txt' http://localhost:3000/upload
Use o código com cuidado.
Observações
```

A API atualmente suporta apenas o upload de arquivos únicos.
O tamanho máximo do arquivo é de 5MB.
Você pode personalizar a API para atender às suas necessidades específicas.
Recursos Adicionais

Documentação do Node.js Multer: https://github.com/expressjs/multer
Documentação da API do Google Drive: https://developers.google.com/drive/api/v3/reference/
