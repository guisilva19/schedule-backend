# FULL STACK BACK END

## CLONE O REPOSITÓRIO NA SUA MAQUINA E FAÇA O PASSO A PASSO PARA RODAR A APLICAÇÃO LOCALMENTE


- COMEÇE INSTALANDO AS DEPENDENCIAS 

```
yarn
```


#### LOGO EM SEGUIDA

`CRIE SUA DATABASE E DEPOIS COPIE E COLE O ARQUIVO .env.example MUDE PARA .env E PREENCHA COM AS INFORMAÇÕES QUE SÃO PEDIDAS`

#### AGORA RODE AS MIGRAÇÕES COM OS COMANDOS


```
yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts
```
- LOGO EM SEGUIDA USE TAMBEM
```
yarn typeorm migration:run -d src/data-source.ts
```

### AGORA BASTA RODAR O SERVIDOR E TESTAR A API COM

```
yarn dev
```
