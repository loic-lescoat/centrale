import requests

dico = {"Name": "Parasite", "Type": "movie"}
url = "https://bnbnyn5fg5.execute-api.eu-west-1.amazonaws.com/dev/items/movies"


a=requests.post(url, data=dico)

print(a.status_code)
print(a.text)