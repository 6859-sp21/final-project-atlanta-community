d3.csv("rent.csv", ready);

function ready(error, data) {
    if (error) throw error;

    data.forEach(function(d) {
        d.rent = +d.Rent;
    });

    console.log("data", data);
      
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map(function(d) { return d.City; }));
    y.domain([0, d3.max(data, function(d) { return d.rent; })]);
    x2.domain(data.map(function(d) { return d.City; }));

    svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", "-0.2em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start");

    svg.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis)
        .append("text")
        //.attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0em")
        .attr("text-anchor", "end")
        .text("Rent ($)");

    bars = svg.append("g").attr("class", "bars");

    bars.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.City); })
        .attr("y", function(d) { return y(d.rent); })
        .attr("width", 10)
        .attr("height", function(d) { return height - y(d.rent); })
        .style("fill", "#ccc")
        .on("mouseover", function(d) {
            d3.select(this).style("fill", function(d) { return color(d.City); })
            tooltip.text(d.City + ", " + d.State + " $" + d.rent)
            .style("opacity", 0.8)
                    .style("left", (d3.event.pageX)+0 + "px") 
                    .style("top", (d3.event.pageY)-0 + "px");
        })
        .on("mouseout", function(d) {
            tooltip.style("opacity", 0);
            d3.select(this).style("fill", "#ccc");

        });

    
    var sum = d3.sum(data, function(d) { return d.rent; }); 
    var average = sum/data.length;

    var line = d3.svg.line()
        .x(function(d, i) { return x2(d.City) + i; })
        .y(function(d, i) { return y(average); }); 

    svg.append("path")
        .datum(data)
        .attr("class", "mean")
        .attr("d", line);

    svg.append("text")
        .attr("transform", "translate(" + (width+3) + "," + y(average) + ")")
        .attr("dy", "1em")
        .attr("text-anchor", "end")
        .style("fill", "red")
        .html("Average = $" + average);


}
