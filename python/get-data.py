import pandas as pd
import json
ingred = pd.read_csv('../Data/branded_food.csv')
foods  = pd.read_csv('../Data/food.csv')
#data   = pd.concat([foods['fdc_id'], foods['description'], ingred['ingredients']], axis=1)
data   = pd.concat([foods['description'], ingred['ingredients']], axis=1)
data = data.dropna()
foodList = data['description'].tolist()

jsonfood = json.dumps(foodList)
f = open("../js/suggestions.js", "w")
f.write("let suggestions = " + jsonfood)
f.close()

#print(jsonfood[14014777:14014800])