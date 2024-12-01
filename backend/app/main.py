from fastapi import FastAPI

from app.controllers import health_check_controller


app = FastAPI()
app.include_router(health_check_controller.router, prefix="/api", tags=['health'])