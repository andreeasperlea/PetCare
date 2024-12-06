class User(Base):
     __tablename__ = "users"
     id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
     first_name = Column(String(100), nullable=False)
     last_name = Column(String(100), nullable=False)
     user_email = Column(String(255), ForeignKey("users.email"), nullable=False)
     password=Column(String(100), nullable=False)
     role=Column(String(100), nullable=False)
     phone_number=Column(String(15))
     created_at=Column(DateTime,default=datetime.utcnow)
     updated_at=Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

     pets=relationship("Pet", back_populates="Owner")
     health_records=relationship("HealthRecord", back_populates="Doctor")
     appointments=relationship("Appointment", back_populates="Owner")
