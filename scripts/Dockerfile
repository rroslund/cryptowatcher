FROM python:3
RUN pip install pytz requests
WORKDIR /usr/src/watcher
COPY . . 
CMD ["python","./watcher.py"]
