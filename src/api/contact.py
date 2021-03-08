import os
import requests


def send_simple_message(email_from, email_to, subject, text):
	return requests.post(
		os.getenv("api_url"),
		auth=("api", os.getenv("api_key")),
		data={"from": email_from,
			"to": [email_to],
			"subject": subject,
			"text": message}
            )
  
