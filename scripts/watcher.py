import requests
import time
import pytz
from datetime import datetime, timezone
from pprint import pprint
url = 'https://api.coinmarketcap.com/v1/global/'
turl = 'https://api.coinmarketcap.com/v1/ticker/'



def gettime():
	tz = pytz.timezone('America/Chicago')
	return datetime.now(tz).strftime("%I:%M%p")
def cmc(curl):
	return requests.get(curl).json()
o = {}	
p = {'total':cmc(url)['total_market_cap_usd']-1}
r = {}

def record(label,key,tot,js):
	ctot = p[key]
	#pprint("{2}: {0:,.2f} ({1:.4f}) ".format(float(tot)/1000000,perc,label))
	p[key]=tot
	if(not label in o):
		o[label] = tot
	perc = (1-(float(ctot)/float(tot)))*100
	orig = o[label]
	totalchange = ((1-(float(orig)/float(tot)))*100)
	r[label] = {'cap': '{:,.2f}'.format(float(tot)/1000000), 'tchange': '{:.1f}'.format(totalchange)+'%','mchange':'{:.1f}'.format(perc)+'%'}
	
def ticker(l,key):
	js = cmc(turl+key)[0]
	val = js['market_cap_usd']
	if(not key in p):
		p[key]=float(val)-1
	record(l,key,val,js)
	
	
	
while True:
	print('***  {}'.format(gettime()))
	print('')
	tot = cmc(url)
	record('All','total',tot['total_market_cap_usd'],tot)
	ticker('ETH','ethereum')
	ticker('REQ','request-network')
	ticker('FUN','funfair')
	pprint(r)
	print('')
	print('*******')
	print('')
	print('')
		
	time.sleep(60)
	#ncap=r.json()['total_market_cap_usd']
	#if(ncap != cap):
		#change = ncap - cap
		#perc = 1-(cap/ncap)
		#fperc = '{0:.{1}f}'.format(perc, 2)
		#cap=ncap
		#pcap = "{:,}".format(cap)
		#t = gettime()
		#pprint('{0} ({1}%) - {2}'.format(pcap,fperc,t))
