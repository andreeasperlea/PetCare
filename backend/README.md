- to create python virtual enviroment ``python -m venv <numevenv>``
- to activate venv ``./venv/Scripts/activate`` (if venv is called "venv")
---
- to dump all dependencies into a file ``pip freeze > requirements.txt``
- to install dependencies from file ``pip install -r requirements.txt``

- to run the python web server ``uvicorn app.main:app --reload``
- to update the schemas in the database:
First go in the ``server/app/alembic/env.py`` file, and update the imports with from ``app.entities.modelName import ModelName``, then(in the app folder) and run:

- ``alembic revision --autogenerate -m "message"`` // create migration file
- ``alembic upgrade head`` // apply migration