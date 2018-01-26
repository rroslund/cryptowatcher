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
raw = {}

def record(label,key,tot,js):
	ctot = p[key]
	p[key]=tot
	if(not label in o):
		o[label] = tot
	perc = (1-(float(ctot)/float(tot)))*100
	orig = o[label]
	totalchange = ((1-(float(orig)/float(tot)))*100)
	price=0
	if('price_usd' in js):
		price = js['price_usd']
	raw[label] = {'cap': (float(tot)/1000000), 'tchange': totalchange, 'mchange': perc, 'price': float(price)}
	curr = raw[label]
	prettyobj = {'c': '{:,.2f}'.format(curr['cap']), 'm': '{:.2f}({:.2f})'.format(curr['mchange'],curr['tchange'])}
	if(not price==0):
		prettyobj['p']='${:}'.format(price)
	r[label] = prettyobj
	return curr
	
def ticker(l,key,eth=None):
	js = cmc(turl+key)[0]
	val = js['market_cap_usd']
	if(not key in p):
		p[key]=float(val)-1
	res=record(l,key,val,js)
	if(not eth is None and 'price' in res and 'price' in eth and l in r):
		ethprice=float(res['price'])/float(eth['price'])
		r[l]['p']='{:.9f}'.format(ethprice)
	return res
	

def run():
	print('***  {}'.format(gettime()))
	print('')
	tot = cmc(url)
	record('All','total',tot['total_market_cap_usd'],tot)
	ticker('BTC','bitcoin')
	eth=ticker('ETH','ethereum')
	ticker('NEO','neo',eth)
	ticker('HORSE','ethorse',eth)
	ticker('ENG','enigma',eth)
	ticker('SNM','sonm',eth)
	ticker('AIX','aigang',eth)
	ticker('REQ','request-network',eth)
	ticker('FUN','funfair',eth)
	changed = {k:v for (k,v) in raw.items() if not v['mchange'] == 0.0}
	if(len(changed)>0):
		pprint("Market cap | Change(TotalChange) | Price")
		pprint("----------------------------------------")
		[pprint((k,v)) for k,v in r.items()]
		#pprint(r)
	print('')
	print('*******')
	print('')
	print('')
		
while True:
	try:
		run()
	except:
		print("Error occurred!")
	time.sleep(45)
