from fastapi import FastAPI
from contextlib import asynccontextmanager


from app.api import health
from app.config.database import connect_to_mongo, close_mongo_connection

@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongo()
    yield
    await close_mongo_connection()

app = FastAPI(lifespan=lifespan)

app.include_router(health.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
