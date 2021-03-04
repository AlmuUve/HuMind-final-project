import requests
import mailchimp_transactional as MailchimpTransactional
from mailchimp_transactional.api_client import ApiClientError

mailchimp = MailchimpTransactional.Client('ZXvsK0dFVCIIJezATwyOsA')
message = {
    "from_email": "jagutierrezc7@gmail.com",
    "subject": "Hello world",
    "text": "Welcome to Mailchimp Transactional!",
    "to": [
      {
        "email": "joseangelgutierrezcabrera@gmail.com",
        "type": "to"
      }
    ]
}

def run():
  try:
    response = mailchimp.messages.send({"message":message})
    print('API called successfully: {}'.format(response))
  except ApiClientError as error:
    print('An exception occurred: {}'.format(error.text))

def my_request():
    r = requests.get('https://api.github.com/events')
    print(r.json())

def send_simple_message():
	return requests.post(
		"https://api.mailgun.net/v3/sandbox4b8cc3724b9a47c39bcf992d24be4539.mailgun.org/messages",
		auth=("api", "603a38d8c15f947008e05d5b263e7dcb-e49cc42c-2407b11a"),
		data={"from": "Excited User <mailgun@sandbox4b8cc3724b9a47c39bcf992d24be4539.mailgun.org>",
			"to": ["jagutierrezc7@gmail.com"],
			"subject": "Hello",
			"text": "Testing some Mailgun awesomness!"})
  
