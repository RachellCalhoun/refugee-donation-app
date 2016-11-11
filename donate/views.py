from django.shortcuts import render

# Create your views here.
def donate(request):
	return render(request, 'donate/index.html')
