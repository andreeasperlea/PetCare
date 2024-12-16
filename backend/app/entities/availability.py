import uuid

from sqlalchemy import Column, UUID, ForeignKey, Integer, DateTime
from sqlalchemy.orm import relationship
from .base import Base

class Availability(Base):
    __tablename__="availabilities"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    doctor_id=Column(UUID, ForeignKey('users.id'))
    start_time=Column(DateTime, nullable=False)
    end_time=Column(DateTime, nullable=False)

    doctor=relationship("user")