class Appointment(Base):

    __tablename__="appointments"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    pet_id=Column(Integer, ForeignKey('pets.id'))
    doctor_id=Column(Integer, ForeignKey('users.id'))
    owner_id=Column(Integer, ForeignKey('users.id'))
    appointment_date=Column(Date, nullable=False)
    status=Column(String(10), default='pending')

    pet=relationship("Pet", back_populates="appointments")
    owner=relationship("User", back_populates="appointments")
    doctor=relationship("User", back_populates="appointments")
