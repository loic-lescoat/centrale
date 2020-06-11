import requests

dico = {"Name": "Parasite", "Type": "movie"}
url = "https://cx6p5gwi6f.execute-api.eu-west-1.amazonaws.com/dev/items/movies" # ask for a movie POST

#dico = {"Name": "Interstellar", "Poster": "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg"}
#url = "https://bnbnyn5fg5.execute-api.eu-west-1.amazonaws.com/dev/items" # add a movie POST


a=requests.post(url, data=str(dico))

print(a.status_code)
print(a.text)