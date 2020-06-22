from django.conf import settings
from watson_machine_learning_client import WatsonMachineLearningAPIClient

def get_watson_client():
  wml_credentials = {
    "apikey": settings.APIKEY,
    "iam_apikey_description": "Auto-generated for key 16e76750-7e93-4311-a3b8-f9e4a46cd6d4",
    "iam_apikey_name": "wdp-writer",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Writer",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/19854af9b0b64470afa45df27dda27a5::serviceid:ServiceId-20c2ee97-fa12-4978-9cda-b9e2550e2327",
    "instance_id": settings.INSTANCE_ID,
    "url": "https://eu-gb.ml.cloud.ibm.com"
  }
  client = WatsonMachineLearningAPIClient(wml_credentials)
  return client