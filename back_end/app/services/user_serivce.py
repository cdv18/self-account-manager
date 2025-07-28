from fastapi import HTTPException
from app.config.database import get_database
from datetime import datetime
from app.models.user import User
from bson import ObjectId

async def create_user(user: User):
    db = get_database()
    user_dict = user.dict()
    user_dict['created_at'] = datetime.utcnow()  # Set created_at to current time

    result = await db.user.insert_one(user_dict)
    return {"id": str(result.inserted_id), "username": user.username, "email": user.email, "created_at": user_dict['created_at']}


async def get_user(user_id: str):
    db = get_database()
    user = await db.user.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return User(**user)