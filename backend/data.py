import pandas as pd
import numpy as np
import math
Films=["Le Saigneur des Agneaux 1","Le Saigneur des Agneaux 2","Le Saigneur des Agneaux 3", "Le Saigneur des Agneaux 4",\
"Harry Porteur, L'école des portiers","Harry Porteur, La Chambre des serrures","Harry Porteur, Le Poulailler de Mère-Grand"]
Langue=['Français', 'Anglais', 'Allemand','Espagnol']
Genre=["Aventure","Animation","Horreur","Fantastique","Romantique","Documentaire"]
Pays=["France","USA","Royaume-Uni","Corée du Sud","Espagne"]
Acteurs=["Samuel Radcliff","Emma Padson","Bourse Willis","Orlando Boom","Elijah Boude","Flobert Pattinson"]



data=[]
for film in Films:
    dico={"PutRequest":{"Item":{"Name":{"S":film},"Type":{"S":"movie"},"Langue":{"M":{}},"Pays":{"M":{}},"Acteurs":{"M":{}},"Genre":{"M":{}}}}}
    for langue in Langue:
        dico["PutRequest"]["Item"]["Langue"]["M"][langue]={"S":str(np.random.randint(0,2))}
    for genre in Genre:
        dico["PutRequest"]["Item"]["Genre"]["M"][genre]={"S":str(np.random.randint(0,2))}
    for pays in Pays:
        dico["PutRequest"]["Item"]["Pays"]["M"][pays]={"S":str(np.random.randint(0,2))}
    for acteur in Acteurs:
        dico["PutRequest"]["Item"]["Acteurs"]["M"][acteur]={"S":str(np.random.randint(0,2))}          
    data.append(dico)

result={"cs-group-14-David-dynamodb":data}

def similarity(film1,film2):
    for dic_film in data:
        if dic_film["PutRequest"]["Item"]["Name"]["S"]==film1:
            dico1=dic_film["PutRequest"]["Item"]
        if dic_film["PutRequest"]["Item"]["Name"]["S"]==film2:
            dico2=dic_film["PutRequest"]["Item"]  
    norme1,norme2,sim=0,0,0       
    for langue in Langue:
        norme1+=int(dico1["Langue"]["M"][langue]["S"])
        norme2+=int(dico2["Langue"]["M"][langue]["S"])
        sim+=int(dico1["Langue"]["M"][langue]["S"])*int(dico2["Langue"]["M"][langue]["S"])
    for genre in Genre:
        norme1+=int(dico1["Genre"]["M"][genre]["S"])
        norme2+=int(dico2["Genre"]["M"][genre]["S"])
        sim+=int(dico1["Genre"]["M"][genre]["S"])*int(dico2["Genre"]["M"][genre]["S"])
    for pays in Pays:
        norme1+=int(dico1["Pays"]["M"][pays]["S"])
        norme2+=int(dico2["Pays"]["M"][pays]["S"])
        sim+=int(dico1["Pays"]["M"][pays]["S"])*int(dico2["Pays"]["M"][pays]["S"])
    for acteur in Acteurs:
        norme1+=int(dico1["Acteurs"]["M"][acteur]["S"])    
        norme2+=int(dico2["Acteurs"]["M"][acteur]["S"]) 
        sim+=int(dico1["Acteurs"]["M"][acteur]["S"])*int(dico2["Acteurs"]["M"][acteur]["S"])
    return sim/math.sqrt(norme1*norme2)    

def matrice_similarité(data):
    for film1 in Films:
        sim_list={}
        for film2 in Films:
            sim_list[film2]={"N":similarity(film1,film2)}
        counter=0
        for dic_film in data:

            if dic_film["PutRequest"]["Item"]["Name"]["S"]==film1:
                break
            counter+=1
            
        data[counter]["PutRequest"]["Item"]["Simlist"]={"M":sim_list}
    return data

def recom(notes,data):
    moyenne=0
    for film in notes:
        moyenne+=notes[film]

    moyenne=moyenne/len(notes)
    scores_film={}
    for film in data:
        score=0
        for film_noté in notes:
            score+=film["Simlist"][film_noté]*(notes[film_noté]-moyenne)
        scores_film[film["Name"]]=score
    return sorted(scores_film.items(),key=lambda t:t[1])[0:3]
    




