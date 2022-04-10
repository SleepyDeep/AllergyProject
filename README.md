# SnackHack
 
 Website: https://sleepydeep.github.io/AllergyProject/
 
 Authors: Anudeep Alam, Kyeling Ong, Siddish Sankar
 
 ## Inspiration
Time after time, we grew tired of having to watch our friends squint hard at the fine print of a crumpled ingredients list just to determine whether a snack was safe for them to eat or not. Out of this, the idea of Allergen Searcher was born. We wanted to create a quick and easily accessible search for ingredient and allergen information out of the thousands of food products available, so that everyone, including our friends, would be empowered to make informed decisions about the food they eat.

## What it does
What you do: start typing in the search bar, select a food, click the search icon
What Allergen Search does: provides suggestions as you type, displays the ingredients of your selected food, and warns of common allergens in bold
It’s that simple :)

## How we built it
We used USDA’s Branded Foods list for our dataset, which can be downloaded from [https://fdc.nal.usda.gov/download-datasets.html](https://fdc.nal.usda.gov/download-datasets.html). It contains over 15,000 food products and ingredients lists that we processed into a pandas dataframe. We used python to generate a dictionary that could be accessed with JavaScript, so that we could connect it to our front end, which includes the search bar and results display, done in vanilla JS, HTML, and CSS.

## Challenges we ran into
Our search was initially extremely slow due to the number of items in the dataset, so we had to perform data cleaning in order to improve search speed. 
We also weren’t sure how to emphasize allergens at first, but we solved this challenge by using a complicated regular expression.

## Accomplishments that we're proud of
Building a Minimum Viable Product that has a strong functionality and purpose, while maintaining aesthetic standards.

## What we learned
While working on this project together we learned more about the nuances of nodeJS, such as learning that the request package has been deprecated to how to construct an autosuggestion bar. We also learned how to transfer data between python code to nodeJS, in a secure and easy manner. Lastly, through development we were able to hone our communication and group-work skills.

## What's next for Allergen Searcher
We would like to make Allergen Searcher more personalized to specific people’s allergy lists by allowing custom allergen inputs, as well as summarizing each ingredient list with tags such as “dairy-free” or “peanut allergy friendly”.

More than that, we hope Allergen Searcher grows beyond its name! This would include processing the ingredient texts such that it can classify foods as vegan, keto, vegetarian-friendly, pescatarian-friendly, etc. Our goal has always been for this app to promote healthy diet choices in a way that suits each person’s unique needs.
