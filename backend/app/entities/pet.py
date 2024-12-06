class Pet(Base):
    __tablename__="pets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    name=Column(String(100), nullable=False)
    species=Column(String(50), nullable=False)
    breed=Column(String(50), nullable=False)
    birth_date=Column(Date, nullable=False)
    owner_id=Column(Integer, ForeignKey('users.id'))

    owner=relationship("User", back_populates="pets")
    health_records=relationsip("HealthRecord", back_populates="pet")
    appointments=relationship("Appointment", back_populates="pet")


