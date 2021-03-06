// set the dimensions and margins of the graph
// let margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 800 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;


function updateScatterPlot(factor1, factor2, category) {

    console.log(factor1, factor2, category);

    // remove 
    if (d3.select('#scatterplot').size() > 0) {
        d3.select('#scatterplot').selectAll('svg').remove();
        d3.select('#scatterplot').selectAll('div').remove();
        d3.select('#selectButton').selectAll('option').remove();
        d3.select('#selectButton2').selectAll('option').remove();
    }

    // append the svg object to the body of the page
    let svg = d3.select("#scatterplot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                "translate(" + 80 + "," + margin.top + ")");

    //Read the data
    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(function(data) {

        if (category != "all") {
            data = data.filter((d) => d['category'] == category);
            console.log(data);
        }


        // console.log(data.length);
        // console.log("data max", d3.max(data, (d) => parseFloat(d['community_size'])))

        // List of groups (here I have one group per column)
        var social_factors = ['community_size', 'lexical_change', 'ideology_lexical_change', 
                                'male_ratio',
                                'friends_count_mean', 'friends_count_median',
                                'follower_count_mean', 'follower_count_median',
                                'tweet_count_mean', 'tweet_count_median', 'tweet_count_rank',
                                'gender','age','is_org','betweenness','closeness'
                            ]

        // add the options to the button
        var left_buttons = d3.select("#selectButton")
            .selectAll('myOptions')
            .data(social_factors)
            .enter()
            .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button
            .property("selected", function(d){ return d === factor1; })

        var right_button = d3.select("#selectButton2")
            .selectAll('myOptions')
            .data(social_factors)
            .enter()
            .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button
            .property("selected", function(d){ return d === factor2; })

    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => parseFloat(d[factor1]))])
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    // text label for the x axis
    svg.append("text")             
        .attr("transform",
                "translate(" + (width/2) + " ," + 
                            (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .text(factor1);

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => parseFloat(d[factor2]))])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // circle size scaler
    var r = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => parseFloat(d['community_size']))])
        .range([2, 20]);

    // color scaler
    const categories = ['atlanta', 'society', 'entertainment', 'sports']
    const colors_list = ["#FFBF00", "#FF7F50", "#6495ED", "#808000"]
    // const colors_list = ["#FFBF00", "#FF7F50", "#000000", "#808000", "#00FF00", "#6495ED", "#000080", "#800080", "#808080", "#FF0000"]
    var color = d3.scaleOrdinal()
        .domain(categories)
        .range(colors_list)
    
    // Add one dot in the legend for each name.
    svg.selectAll("mydots")
    .data(categories)
    .enter()
    .append("circle")
    .attr("cx", 100)
    .attr("cy", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", function(d){ return color(d)})
    .attr("transform",
                "translate(" + 250 + ", -70)")

    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
    .data(categories)
    .enter()
    .append("text")
    .attr("x", 120)
    .attr("y", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .attr("transform",
                "translate(" + 250 + ", -70)")



    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90) translate(0, -20)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(factor2); 

    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.
    var tooltip = d3.select("#scatterplot")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")


    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    var mouseover = function(event, d) {
        tooltip
        .style("opacity", 1)
    }

    var mousemove = function(event, d) {
        tooltip
        .html("The <b>" + d.cluster_name + "</b> community described with the following topic words: " + d.topic_words)
        .style("left", (d3.pointer(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", (d3.pointer(this)[1]) + "px")
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave = function(event, d) {
        tooltip
        .transition()
        .duration(200)
        .style("opacity", 0)
    }

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(data.filter(function(d,i){return i<1500})) // the .filter part is just to keep a few dots on the chart, not all of them
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d[factor1]); } )
        .attr("cy", function (d) { return y(d[factor2]); } )
        .attr("r", function (d) { return r(d["community_size"]); })
        .style("fill", function(d){ return color(d['category']) })
        .attr("stroke", function(d){ return color(d['category']) })
        .style("opacity", 0.3)
        // .style("fill", "#e25609")
        // .style("stroke", "white")
        .on("mouseover", mouseover )
        .on("mousemove", mousemove )
        .on("mouseleave", mouseleave )
        .on("click", updateWordcloud)
    })

    return svg.node();
};

// updateScatterPlot("community_size", "lexical_change");