from sqlalchemy.orm import Session
from app import models
from app.core.security import hash_password

# Run this manually if you want an admin user created at first start

def init_admin(db: Session):
    admin_email = "admin@streamflix.com"
    existing = db.query(models.User).filter(models.User.email == admin_email).first()

    if existing:
        return existing

    admin = models.User(
        email=admin_email,
        hashed_password=hash_password("admin123"),
        is_active=True,
    )
    db.add(admin)
    db.commit()
    db.refresh(admin)
    return admin