import uuid

from sqlalchemy import Column, UUID, ForeignKey, Integer, Date, Text
from sqlalchemy.orm import relationship
from .base import Base

class HealthRecord(Base):
    __tablename__="healthrecords"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    pet_id=Column(UUID, ForeignKey('pets.id'))
    doctor_id=Column(UUID, ForeignKey('users.id'))
    visit_date=Column(Date, nullable=False)
    description=Column(Text, nullable=True)
    vaccination=Column(Text, nullable=True)
    treatment=Column(Text, nullable=True)

    pet=relationship("Pet", back_populates="health_records")
    doctor=relationship("User", back_populates="health_records")

