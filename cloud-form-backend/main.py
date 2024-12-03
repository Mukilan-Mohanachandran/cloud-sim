#uvicorn main:app --reload


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_coordinates():
    data = {
        "value": [['vm1' ],['vm3', 'vm4'],['vm5', 'vm6' ]]
    }
    data1 = {
        "value": [{'cluster_id': 0, 'points': [['vm1', '1.0', '2.0'], ['vm2', '2.0', '3.0']]}, {'cluster_id': 1, 'points': [['vm3', '10.0', '10.0'], ['vm4', '11.0', '11.0']]}]
    }
    return data1

@app.get("/get-data")
async def get_data():
    # Define the dictionary to be returned
    response_data = get_coordinates()
    return response_data
