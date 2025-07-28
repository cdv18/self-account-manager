from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class User(BaseModel):
    username: str
    email: str
    password: str
    created_at: Optional[datetime] = None

