from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests

from warehousemanager.settings import (
    APIKEY,
    INSTANCE_ID,
    AUTHENTICATION_TOKEN_URL,
    SOCRING_URL
)

from .forms import Data_form
from .utils.formatting import get_scoring_payload

# Create your views here.


# Home view
def home_view(request):
    return HttpResponse('<h1>Homepage</h1>')

# Prediction view


def predict_view(request, *args, **kwargs):
    if request.method == 'POST':
        form = Data_form(request.POST)
        if form.is_valid():
            #  Get Authentication token
            headers = {"content-type": "application/x-www-form-urlencoded"}
            payload = {
                "grant_type": "urn:ibm:params:oauth:grant-type:apikey", "apikey": APIKEY}
            token_res = requests.post(
                AUTHENTICATION_TOKEN_URL, headers=headers, data=payload)
            token = token_res.json()['access_token']

            # Predict the num_orders
            predict_headers = {'Content-Type': 'application/json',
                               "Authorization": "Bearer "+token, "ML-Instance-ID": INSTANCE_ID}
            scoring_payload = get_scoring_payload(form.cleaned_data)
            predict_res = requests.post(
                SOCRING_URL, headers=predict_headers, json=scoring_payload)

            return JsonResponse(predict_res.json(), status=200)
    else:
        form = Data_form()
    return render(request, 'components/form.html', {"form": form})
