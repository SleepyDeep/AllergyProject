import pandas as pd
import json
ingred = pd.read_csv('../Data/branded_food.csv')
foods  = pd.read_csv('../Data/food.csv')
#data   = pd.concat([foods['fdc_id'], foods['description'], ingred['ingredients']], axis=1)
data   = pd.concat([foods['description'], ingred['ingredients']], axis=1)
foodList = foods['description'].tolist()
jsonFoodList = json.dumps(foodList)
with open("./FoodSuggestions.json", "w") as outfile:
    outfile.write(jsonFoodList)
#print(data.head(5))