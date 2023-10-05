# Distance
Node + MongoDB + Redis + TypeScript

## Run App
### Linux / SystemD

#### Make sure Redis and MongoDB are installed and running
```bash
systemctl status redis.serice
systemctl status mongodb.serice
```

#### Import MongoDB database
```bash
mongoimport --db Address --collection cities --file addresses.json
```

#### Make sure to create .env file
```bash
cp .env.development .env
```

#### Install dependencies and run app
```bash
pnpm i
pnpm start
```

## List of possible improvements
| Feature | Description                                      | Status |
|---------|--------------------------------------------------|-|
| nix     | Write flake.nix and get everyting out of the box |-|
| tests   | Write more tests                                 |-|
| docs    | Write API documentation via [Swagger](https://swagger.io/resources/articles/documenting-apis-with-swagger/)          |-|
