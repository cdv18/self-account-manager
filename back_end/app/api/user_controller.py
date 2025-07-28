from fastapi import APIRouter, HTTPException
from app.services.user_serivce import create_user
from app.models.user import User

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=User)
async def create_user_endpoint(user: User):
    return await create_user(user)