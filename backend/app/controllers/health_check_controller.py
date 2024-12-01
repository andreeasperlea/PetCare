from fastapi import APIRouter


router=APIRouter()

@router.get("/ok")
async def health_check():
    return {"message":"Status ok"}