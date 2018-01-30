FROM python:3
RUN apt-get update && apt-get update && apt-get install vim -y
RUN pip install pytz requests
WORKDIR /usr/src/watcher
COPY . . 
CMD ["python","./watcher.py"]
