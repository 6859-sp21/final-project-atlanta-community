# 6.859 Final Project: Exploring patterns of language variation on social media: A case study in Atlanta online communities

## Our Team
Yuebin Dong, Jiang Hang, Amanda Horne, Diego Lestani

website: [https://6859-sp21.github.io/final-project-atlanta-community/](https://6859-sp21.github.io/final-project-atlanta-community/)

## Getting started

### Requirement
1. npm / Node.js

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
At the beginning of our project, there was a lot of work on taking the initial dataset from Hang's research in the Media lab and modifying it so that it was more organized and easily usable for our visualization. This included taking all of the clusters and assigning them to a category, and also reformatting the data so that it could be incorporated into our code.

We then shifted to developing the initial website, where we split it up into different sections. Originally, we were working on the scatter plot, bar graphs, and Twitter users’ profiles. One of the hurdles we faced was trying to find a way that we could switch and reload different user's Twitter timelines onto the website. Unfortunately, after trials, it was not scalable. We decided to have a scrollytelling narrative, added a cover with an introduction, and put graphs in proper sections.

For our MVP, we got the scatterplot working, a bar graph of the average semantic change for the different categories, and a zoomable bar graph ranking the clusters by different factors. All these sections are put in a scrolling framework. Then based on feedback from our MVP, we thought about how to make it more clear what semantic change actually meant. We added a paragraph explaining this term after the introduction section for our users and also provided an example shown as a diagram. 

After research on the dataset, we regrouped the data into four main categories and add a new level of the cluster groups. To visualize this research, we designed a circle packing graph and put considerable energy to smoothen the interactive functions. The deepest circles show the top followings of clusters and by clicking the username it will open a new tab to show this Twitter account. We also added colors and sizes for the dots in the scatter plot and improved the visual encoding of it. An important feedback from MVP is that the scrolling zooming in the second bar chart seems unintuitive since we already have a scrollytelling page. After discussion and numerous attempts, we changed the second bar graph to have a brush-to-zoom feature. There is a minimap on the left giving users an overall perception of 149 clusters and users can zoom in and zoom out the bar chart on the right by brushing on the minimap. We had a hard time integrating the brushing and the function that update the graph by choosing from various factors and finally we made it work.

Finally, we added a project page showing our key deliverables and improved the layout of the web page. We adapted a dark theme and redesigned the cover and ending section. Before each visualization, we added a paragraph showing the definitions of variables, hints for how to interact with the graph, and some key takeaways from the visualization. When developing the graphs, we spent considerable time polishing the aesthetics of the web and ensured users can scroll and interact with the graphs smoothly.

## Work Divided
- Yuebin: He fixed the bugs in the initial first bar chart, then added clusters selection and top following Twitter links ranking for it in the MVP. The second zoomable bar chart and the overall scrolling page were also done by him. For the final version, he generated the idea of and implemented the first zoomable circle packing graph as well as the second brush-zoom bar chart. He also designed and implemented the slideshow project page and the scrollytelling application page split into sections according to our narrative. Then he integrated the scatter chart, some images, and text paragraphs from teammates into it and adjusted the visual encoding accordingly. Finally, he edited the README and wrote the future work section of the paper.
- Hang: he provided the initial dataset, developed the scatterplot visualization, and wrote the acknowlegement page of the website. He was in class to present the MVP and answer questions. He also wrote the introduction, related works, discussion, and appendix sections for the final paper. He worked with Yuebin in recording the video and he edited the 1 min video.
- Amanda: She developed the initial fixed Twitter timeline (which took so many hours to debug and get working) and the initial first bar graph for the MVP. She was in class to present the MVP and answer questions. She also did the initial categorization of each cluster on the dataset, was in charge of explaining what semantic change was based on peer feedback for the final version, and wrote the README. She also wrote the method section of the paper.
- Diego worked on structuring the original database and editing the original categories for the clusters. Second, thinking of visual encodings along the way, he advocated on the bubble visual encoding (packed circle and encodings for the scatterplot) when it came to the idea. Third, he did write-ups for the website and the results section of the final paper. 

All team members contributed equally to key design decisions that were made, idea generation in the beginning and idea generation for the final version based on peer feedback.
