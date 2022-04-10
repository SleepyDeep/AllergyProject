import pandas as pd
import json

ingred = pd.read_csv('../Data/branded_food.csv')
foods  = pd.read_csv('../Data/food.csv')
data   = pd.concat([foods['description'], ingred['ingredients']], axis=1)
data.drop_duplicates(subset='description', keep=False,inplace=True)
data = data.dropna()

# foodList = data['description'].tolist()
foodList = [food.replace('""', '"') for food in data['description'].tolist()]
jsonfood = json.dumps(foodList)
f = open("../js/suggestions.js", "w")
f.write("let suggestions = " + jsonfood)
f.close()

ingredDict = {f : i for f, i in zip(foodList, data['ingredients'].tolist())}
with open("../js/ingredients.js", "w") as f:
    f.write('let ingredients = ')
    json.dump(ingredDict, f)