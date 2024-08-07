import json
import boto3
import logging
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Creating logger named after this module
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

ses = boto3.client('ses', region_name='us-east-1')
ses_sender_email = 'reedemer@rapidintegrate.com'
ses_receiver_email = 'helloreedemer@gmail.com'


def handler(event, context):
    print('received event:')
    body = json.loads(event["body"])
    logger.info(f"🔹 [lambda_handler] beginning validation checks...")
    try:
        status_code = send_email(body)
        print("👉 status_code: ", status_code)
        return {
            'statusCode': status_code,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': None
        }
    except Exception as e:
        logger.error(f"🔺 [send_email][ERROR] Failed in sending email: %s", e)
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': f"🔺 [send_email][ERROR] Failed in sending email: {e}"
        }


def send_email(payload):
    logger.info("🔸 <---send_email START-->")
    subject = "Design Syndicate: Contact Request"
    body = get_contact_email_markup()
    body = body.replace("{{FirstName}}", str(payload.get('FirstName', 'N/A')))
    body = body.replace("{{LastName}}", str(payload.get('LastName', 'N/A')))
    body = body.replace("{{Company}}", str(payload.get('Company', 'N/A')))
    body = body.replace("{{Email}}", str(payload.get('Email', 'N/A')))
    body = body.replace("{{Tel}}", str(payload.get('Tel', 'N/A')))
    body = body.replace("{{Cell}}", str(payload.get('Cell', 'N/A')))
    body = body.replace("{{Query}}", str(payload.get('Query', 'N/A')))
    body = body.replace("{{Message}}", str(payload.get('Message', 'N/A')))

    logger.info(f"🔸 [send_email] subject: %s", subject)
    logger.info(f"🔸 [send_email] body: %s", body)

    msg = MIMEMultipart()
    msg['Subject'] = subject
    msg['From'] = ses_sender_email
    msg['To'] = ses_receiver_email
    msg['Reply-To'] = payload.get('Email', ses_sender_email)

    msg.attach(MIMEText(body, 'html'))

    try:
        response = ses.send_raw_email(
            Source=ses_sender_email,
            Destinations=[ses_receiver_email],
            RawMessage={'Data': msg.as_string()}
        )
        logger.info("🔸 [send_email] Email sent successfully: %s", response)
        return response['ResponseMetadata']['HTTPStatusCode']
    except Exception as e:
        logger.error(f"🔺 [send_email][ERROR] Failed in sending email: %s", e)
        raise Exception(f"🔺 [send_email][ERROR] Failed in sending email: %s", e)


def get_contact_email_markup():
    return """
        <div style="display: flex; justify-content: center;">
            <div 
                style="
                font-family: Arial, Helvetica, sans-serif;
                border: 5px #0000001c solid;
                border-bottom: 4px #fe0166 solid;
                border-radius: 5px;
                cursor: default;
                max-width: 650px;
                width: 50vw;
                min-width: 400px;
                box-shadow: 4px 4px 30px #0000001a;
                margin: auto;
                "
            > 
                <div style="
                    padding: 16px;
                    padding-top: 50px;
                    height: 90px;
                    background-color: #fff;
                    border-bottom: 1px #ccc solid;
                    background-position: center;
                    background-repeat: no-repeat;
                    ">
                    <img src="https://www.activemi.co.za/client-logos/activemi-logo.jpg"
                        style="
                            height: 100%; 
                            width: 100%;
                            object-fit: cover;
                            "
                    >
                </div>
                <div style="
                    padding: 16px;
                    padding-top: 0px;"> 
                    <ul style="
                        font-size: 16px;
                        padding: 0;
                        color: #000000ad;">
                        <li style="margin-bottom: 10px; display: flex;">
                            <b style="display: block; min-width: 185px">First Name</b>: 
                            <span style="margin-left: 15px">{{FirstName}}</span> 
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Last Name</b>: 
                            <span style="margin-left: 15px">{{LastName}}</span> 
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Company</b>: 
                            <span style="margin-left: 16px">{{Company}}</span> 
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Email</b>: 
                            <span style="margin-left: 15px">
                                <a href="mailto:{{Email}}">{{Email}}</a>
                            </span> 
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Tel</b>: 
                            <span style="margin-left: 16px">{{Tel}}</span>
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Cell</b>: 
                            <span style="margin-left: 15px">{{Cell}}</span> 
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Query</b>: 
                            <span style="margin-left: 15px">{{Query}}</span> 
                        </li> 
                        <li style="margin-bottom: 10px; display: flex">
                            <b style="display: block; min-width: 185px">Message</b>: 
                            <span style="margin-left: 15px">{{Message}}</span>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    """
