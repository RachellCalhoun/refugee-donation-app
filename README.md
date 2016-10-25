# refugee-donation-app
An app using Django and Angular made with refugees, or partner organizations, in mind, for requesting or donating goods. 
There are two apps: accounts for users profiles and donate app that will handle donations and donation requests


Fork to your own repository on github. 
Clone it to your local computer.

To run this project as is: 
Setting up 

1. You will need to have python 3 installed
	https://www.python.org/downloads/

2. Start a virtual environment
	$ pyvenv /path/to/new/virtual/environment
	or
	$ python -m venv myenv

4. Activate virtualenv
	$ source myvenv/bin/activate
	(for 3 and 4 *see details: https://docs.python.org/3/library/venv.html)

5. Install requirements
	$ pip install -r /path/to/requirements.txt

6. Migrate changes
	$ python manage.py migrate

7. Create super user
  $ python manage.py createsuperuser
  
Running Server:

After your virutal environment is activated and you are
in the folder with manange.py (refugeesite)

	$ python manage.py runserver


