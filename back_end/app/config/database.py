from motor.aiohttp import AsyncIOMotorDatabase
from pymongo import MongoClient
import os
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

class Database:
    client: Optional[AsyncIOMotorDatabase] = None
    database = None

async def connect_to_mongo():
    load_dotenv()

    mongo_url = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
    database_name = os.getenv("DATABASE_NAME", "default_db")

    Database.client = AsyncIOMotorClient(mongo_url)
    Database.database = Database.client[database_name]

async def close_mongo_connection():
    #Đóng kết nối mongoDB
    if Database.client:
        Database.client.close()
        Database.client = None
        Database.database = None

def get_database():
    if Database.client is None:
        raise Exception("Database connection is not established.")
    return Database.database