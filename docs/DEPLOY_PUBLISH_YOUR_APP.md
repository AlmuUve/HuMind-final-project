# Deploying to Heroku (takes 7 minutes)

This template is 100% compatible with heroku, just make sure to understand and execute the following steps

1. Install heroku (if you don't have it yet)
```sh
$ npm i heroku -g
```

2. Login to heroku on the command line (if you have not already)
```sh
$ heroku login -i
```

3. Create an application (if you don't have it already)
```sh
$ heroku create <your_application_name>
```

4. Add Python and also node.js capabilities to heroku to be able to use npm on production
```
$ heroku buildpacks:add --index 1 heroku/python
$ heroku buildpacks:add --index 2 heroku/nodejs
```

5. Add a new postgress database to your project
```bash
$ heroku addons:create heroku-postgresql:hobby-dev
# this command will also automatically add a DATABASE_URL env variable with the Postgress database url
```

5. Other Enviroment Variables

You cannot create a `.env` file on Heroku, instead you need to manually add all the variables using the command line or under your heroku hashboard project settings.

Open your `.env` file and copy and paste each variable (FLASK_APP, FLASK_ENV, etc.) to Heroku. ⚠️ Do not add the `DATABASE_URL` variable again, it was already added by heroku automatically when we added the postgress addon.

```bash
$ heroku config:set FLASK_APP_KEY="any key works"
$ heroku config:set FLASK_APP=src/app.py
#                               ↓ Important: Set to "production"
$ heroku config:set FLASK_ENV=production 
$ heroku config:set BASENAME=/
$ heroku config:set BACKEND_URL=
```

<p align="center">
<img width="400px" alt="Configuring Env Variables" src="https://github.com/4GeeksAcademy/flask-rest-hello/blob/master/docs/assets/env_variables.gif?raw=true" />
</p>

## Done!

That is it! If you encounter any issues please refer to the [FAQ Heroku file](./FAQ_HEROKU.md).