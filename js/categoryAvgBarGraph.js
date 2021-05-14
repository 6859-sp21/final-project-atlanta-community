var margin = {top: 20, right: 20, bottom: 70, left: 40};

var width = 550 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleBand()
    .padding(0.85)
    .rangeRound([0,width]);

var x2 = d3.scaleBand()
    .rangeRound([0,width],0);

var y = d3.scaleLinear() 
    .range([height,0]); 

//var xAxis = d3.axisBottom();
//
//var yAxis = d3.axisLeft();

var color = d3.schemeCategory10;

var tooltip = d3.select("#categoryAvgBarGraph").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);

var svg = d3.select("#categoryAvgBarGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function showBarGraph(fakeParam){
    console.log("hhiiiiii");
    //d3.csv("category_avg.csv", ready);
    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/category_avg.csv").then((data) => {

        data.forEach(function(d) {
            d.alc = parseFloat(d.avg_lexical_change);
        });

        console.log("data", data);
      

        x.domain(data.map(function(d) { return d.category; }));
        y.domain([0, 0.05 + d3.max(data, function(d) { return d.alc; })]);
        //x2.domain(data.map(function(d) { return d.category; }));

        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("y", 23)
            .attr("x", 9)
            .attr("dy", "-2em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");

        svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y))
            .append("text")
            //.attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0em")
            .attr("text-anchor", "end")
            .text("Average Lexical Change");

        bars = svg.append("g").attr("class", "bars");

        bars.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.category); })
            .attr("y", function(d) { return y(d.alc); })
            .attr("width", 10)
            .attr("height", function(d) { return height - y(d.alc); })
            .style("fill", "#ccc")
            .on("mouseover", function(event, d) {
                d3.select(this).style("fill", "Black")
                tooltip.text(d.category + " " + d.alc)
                .style("opacity", 0.8)
                        .style("left", (event.pageX)+0 + "px") 
                        .style("top", (event.pageY)-0 + "px");
            })
            .on("mouseout", function(event, d) {
                tooltip.style("opacity", 0);
                d3.select(this).style("fill", "#ccc");

            });

    
        var sum = d3.sum(data, function(d) { return d.alc; }); 
        var average = sum/data.length;

        svg.append("path")
          .attr("class", "mean")
          .attr('d', d3.line()([[0, y(average)], [width, y(average)]]))
          .attr('stroke', 'black')

        svg.append("text")
            .attr("transform", "translate(" + (width+3) + "," + y(average) + ")")
            .attr("dy", "1em")
            .attr("text-anchor", "end")
            .style("fill", "red")
            .html("Average = $" + average);


    })
};
