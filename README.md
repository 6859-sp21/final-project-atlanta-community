# Atlanta Community

## Our Team
Hang Jiang, Amanda Horne, Yuebin Dong, Diego Lestani

## Getting started

### Run Locally
1. Clone the clone the repository to local
2. The datasets are in folder `root/data`
3. `cd` into folder `root/app` to view or modify the web application
4. run `npm install` to install all dependices
5. run `npm serve` to preview locally at http://localhost:8080/final-project-atlanta-community/

### Deploy to Github
1. `cd` into folder `root/app`
2. run `chmod +x ./deploy.sh` to make the deployment script executable
3. run `./deploy.sh` to deploy to Github Pages

## Research/Development Process
In the beginning of our project, there was a lot of work on taking the initial dataset from Hang's research in the Media lab and modifying it so that it was more organized and easily usable for our visualization. This included taking all of the clusters and assigning them to a category, and also reformatting the data so that it could be incorporated into our code.

We then shifted to developing the initial website, where we split it up into different sections. Originally we did not have the beautiful aesthetics because we were just working on the scatter plot, bar graph and twitter users profiles. The biggest hurdle we faced was trying to find a way that we could switch and reload different user's twitter timelines onto the website. Unfortunately after hours and hours of looking into it, for the first draft of the website we ended up manually encoding 4 different twitter timelines into the website and just changing which one was visible and making all the other ones hidden. But then with the hundreds of different twitter usernames in our dataset, we scratched that idea because it wasn't realistically scalable. So what we ended up doing was just showing the twitter usernames and allowing the user to ckick on the username and have it open their twitter profile (twitter dot com / username") in a different tab in their browser.

Finally for our MVP, we got the scatterplot working and a bar graph of the average semantic change for the different categories. Then based on feedback from our MVP, we went on a journey thinking about how to make it more clear what lexical change actually meant. We added an intro paragraph at the beginning for our users and also provided some examples. We also modified our visualization to use a circle graph instead of the bar graph, and we made a concious choice to only have 4 main categories at the top most layer of the circle graph insatead of the original 9 categories.

We also changed some aethetics in the final version, and stuck with our decision to not have a twitter timeline embedded onto the website but instead allow users to click the usernames and have it open their twitter profile in another tab on the browser.

## Work Divided

All 4 team members contributed equally to the project in different ways. The initial dataset was provided by Hang, and he also did the scatterplot part of the visualization. The initial twitter research nightmare and the initial first bar graph for the MVP was done by Amanda. She also did the initial categorization of each cluster for the MVP, did the introductory paragraph at the beginning in the final version, wrote the README and was responsible for addressing the piece of feedback about users being confused what "lexical change" meant. Diego also made some changes to the categorization of the clusters, thought about visual encodings helped with the write-ups for the website. Finally, Yuebin had the idea and implemented the circle graph, and the second bar chart, and did a lot of the heavy lifting on the aesthetics of the website, often taking other people's initial implementation and making it look prettier. 

When it came to discussing design decisions, recording our MVP presentation, discussing feedback from our peer reviews, creating the teaser video, writing the paper, or other major components of the project, all 4 team members contributed equally to these big scale decisions/deliverables that had to be made/completed.

## Installation Instructions
1. $cd into root/app
2. run $chmod +x ./deploy.sh to make the deployment script executable
3. run $./deploy.sh to deploy to Github Pages
