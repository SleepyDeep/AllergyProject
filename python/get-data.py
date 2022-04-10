import pandas as pd
import json
ingred = pd.read_csv('../Data/originalbranded_food.csv')
foods  = pd.read_csv('../Data/originalfood.csv')
#data   = pd.concat([foods['fdc_id'], foods['description'], ingred['ingredients']], axis=1)
data   = pd.concat([foods['description'], ingred['ingredients']], axis=1)
data.drop_duplicates(subset='description', keep=False,inplace=True)
data = data.dropna()
foodList = data['description'].tolist()
newfoodList = [food.replace('""', '"') for food in foodList]

jsonfood = json.dumps(newfoodList)
f = open("../js/suggestions.js", "w")
f.write("let suggestions = " + jsonfood)
f.close()

#print(jsonfood[14014777:14014800])