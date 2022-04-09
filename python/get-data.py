import pandas as pd
ingred = pd.read_csv('branded_food.csv')
foods  = pd.read_csv('food.csv')
data   = pd.concat([foods['fdc_id'], foods['description'], ingred['ingredients']], axis=1)
print(data.head(5))