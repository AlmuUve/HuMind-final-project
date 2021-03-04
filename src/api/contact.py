import requests

def my_request():
    r = requests.get('https://api.github.com/events')
    print(r.json())

def send_simple_message(email_from, email_to, subject, text):
	return requests.post(
		"https://api.mailgun.net/v3/sandboxdf83bdef6e744984a7473642dda2edfd.mailgun.org/messages",
		auth=("api", "50853265f9696b1be9a6b002f848a612-e49cc42c-ad0e22e4"),
		data={"from": email_from,
			"to": [email_to],
			"subject": subject,
			"text": text}
            )
  
