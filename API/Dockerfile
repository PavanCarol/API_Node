# Use a imagem oficial do Node.js
FROM node:16

# Crie um diretório de trabalho no contêiner
WORKDIR /API

# Copie os arquivos do projeto para o contêiner
COPY ./package.json
RUN npm install

# Copie o código-fonte do aplicativo para o contêiner
COPY . /API/

# Exponha a porta que o aplicativo irá ouvir
EXPOSE 3000

# Inicie o aplicativo quando o contêiner for iniciado

#APP
CMD ["/bin/bash", "-c", "node index.js"]