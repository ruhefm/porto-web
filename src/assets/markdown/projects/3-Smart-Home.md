---
title: Smart Home & Telegram Bot API
desc: This project combines a Smart Home system with a Telegram Bot API interface, offering remote control over IoT devices and real-time data monitoring. It serves as an upgrade to a previous SIM800L-based Telegram middleware, specifically addressing challenges with TLS version compatibility. The system enables control of a key lock, receives environmental data from IoT sensors via MQTT, pushes this data to a Supabase backend, and allows users to interact with the system via a Telegram bot.

images: ["/smartHome1.png", "/smartHome2.png", "/smartHome3.png"]
size:
tools: [
    {imagePath: '/python.svg', alt: 'Python'},
    {imagePath: '/supabase.svg', alt: 'Supabase'},
]
tags: ['self', 'apps']
---

# Indepth With Smart Home

## How it works?

The system operates by receiving data from an ESP32 microcontroller via MQTT. After that, the server processes this data and pushes it to a Supabase database.

### Supabase Python Lib

```
from supabase_py import create_client
client = create_client(supabase_url, supabase_key)
```

### Receive Temperature Data and Push It

```
@app.route('/temp', methods=['POST'])
def temperature():
    data = request.get_json()
    global humi, tempf, tempc, encrypted_data
    if data:
        humi = data.get('humi')
        tempf = data.get('tempf')
        tempc = data.get('tempc')
        new_record = {'temp_f': tempf, 'temp_c': tempc, 'humi' : humi}
        response = client.from_('temperature').insert(new_record).execute()
        if 'error' in response:
            print('Operation failed:', response['error'])
        else:
            print('Operation successful')
        return response
```

### Receive Key Log Data and Push It
```
@app.route('/key', methods=['POST'])
def uidDetection():
    data = request.get_json()
    global uid, key
    if data:
        key = data.get('key')
        uid = data.get('uid')

        new_record = {'uid': uid}
        response = client.from_('keyLog').insert(new_record).execute()
        if 'error' in response:
            print('Operation failed:', response['error'])
        else:
            print('Operation successful')
        return response
```

### Select Supabase Data and Shows It

When it tries to access webiste root, the flask will send the tempData and keyLogData to the html using flask render. These data are fetched using supabase client.

```
@app.route('/')
table_name = 'temperature'
tempData = client.table(table_name).select().execute()
keyLog = 'keyLog'
keyLogData = client.table(keyLog).select().execute()
dispp = render_template('Beranda.html',title='Beranda Smarthome',tempData=tempData, keyLogData = keyLogData)
return dispp
```

# Indepth With Telegram Bot API

This is to bridge SIM800L TLS version. The TLS Telegram needed is higher than the SIM800L TLS version have. The python flask server is listening to simple GET/POST method (for easy approach using GET), when it receive /api/koordinat?lat=x&long=y&battery=z&altitude=a. Then it's send request to Telegram via telegram webhook.

## SIM800L
```
sendATCommand("AT+HTTPINIT"); 
sendATCommand("AT+HTTPPARA=\"URL\",\"http://teleapigps.pythonanywhere.com/?lat="+latitude+"&long="+longitude+"&bat="+percentage+"&alt="+alt+ "\""); 
sendATCommand("AT+HTTPACTION=0"); 
```
## Python GET
```
lat = flask.request.args.get("lat")
longitude = flask.request.args.get("long")
alt = flask.request.args.get("alt")
bat = float(flask.request.args.get("bat"))
bat = 100-bat
```
## Python Telegram Bot Lib
```
@bot.message_handler(commands=['start', 'help'])
def handle_start_help(message):
    bot.send_message(message.chat.id, text="Gunakan /status untuk melihat lokasi.")


@bot.message_handler(commands=['status'])
def handle_start_help(message):

    bot.send_message(message.chat.id, text=f"Latitude:{lat}\nLongitude:{longitude}\nAltitude:{alt}\nPersentase Baterai:{bat} % \n\nhttp://maps.google.com/maps?q=loc:{lat},{longitude}")
```

## Documentation

![Humidity](/smartHome1.png)
![Temperature](/smartHome2.png)
![keyLogData](/smartHome3.png)
