## PETINDER

## User Story
AS A potential pet-adopter <br>
I WANT a web-app that lets me look through and save my favorite adoptable pets from Petfinder <br>
SO THAT I can find a pet I want to adopt while having fun at the same time. <br>

## How to Use
When you load the page, you should be greeted with a modal. Fill the modal out and look at the first pet! If you are interested, click on the green button, if not, click on the red button.<br><br>
All of the pets you "liked" are saved to the favorites page in the event that you can't decide on a pet on your first go-around!
<br><br>
Click on the fact below the cards to filter through facts!

## Challenges
Most of the challenges we faced were with using the Petfinder API
- It uses OAUTH for its normal pulls, so we needed to use the SDK that wasn't on their website. 
- The Zip Code functionality doesn't work with the SDK, but we kept it in the project for future development.
Local Storage
- Local storage seemed to reset itself everytime we refreshed! Fixing this required a simple if-statement to recreate the array if it didn't exist yet. 

## Screenshots
![Screenshot](https://user-images.githubusercontent.com/93559764/149424590-06d346ce-e521-419b-b4f5-078ce173c967.png)
![Screenshot](https://user-images.githubusercontent.com/93559764/149424670-4f92738c-1fc8-4dca-b447-407b895d9ce5.png)


## Link to Live Webpage
[Petinder](https://nhaninasser.github.io/Petinder/) 

## Made With
- HTML
- CSS
- Javascript
- Jquery
- Bulma
- FontAwesome API
- Petfinder API
- Cat-Facts API
# Petinder
# Petinder
