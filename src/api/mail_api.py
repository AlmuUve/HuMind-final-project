import os
import requests


def send_simple_message(email_from, email_to, subject, text):
    return requests.post(
        os.getenv("MAILGUN_DOMAIN"),
        auth=("api", os.getenv("MAILGUN_API_KEY")),
        data={ 
            "from": email_from,
            "to": [email_to],
            "subject": subject,
            "text": message
        }
    )