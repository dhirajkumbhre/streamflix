from fastapi import FastAPI
from app.api import auth, movies
from app.db.session import engine
from app.db.base import Base

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="StreamFlix API")

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(movies.router, prefix="/api/movies", tags=["movies"])

@app.get("/")
def root():
    return {"message": "StreamFlix API Running"}