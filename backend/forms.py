from django import forms


class Data_form(forms.Form):
    week = forms.IntegerField()
    center_id = forms.IntegerField()
    meal_id = forms.IntegerField()
    checkout_price = forms.DecimalField()
    base_price = forms.DecimalField()
    emailer_for_promotion = forms.IntegerField()
    homepage_featured = forms.IntegerField()
