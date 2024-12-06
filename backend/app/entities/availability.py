class Availability(Base):
    __tablename__="availabilities"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    doctor_id=Column(Integer, ForeignKey('users.id'))
    start_time=Column(DateTime, nullable=False)
    end_time=Column(DateTime, nullable=False)

    doctor=relationship("user")