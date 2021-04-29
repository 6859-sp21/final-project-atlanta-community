const margin = {left: 100, top: 50, bottom: 50, right: 20}
const width = 1200 - margin.left - margin.right
const height = 850 - margin.top - margin.bottom

d3.select("#vis")
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('opacity', 1)

draw_title();

const asc = arr => arr.sort((a, b) => a - b);

const sum = arr => arr.reduce((a, b) => a + b, 0);

const mean = arr => sum(arr) / arr.length;

const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
}

var BrowserText = (function () {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    /**
     * Measures the rendered width of arbitrary text given the font size and font face
     * @param {string} text The text to measure
     * @param {number} fontSize The font size in pixels
     * @param {string} fontFace The font face ("Arial", "Helvetica", etc.)
     * @returns {number} The width of the text
     **/
    function getWidth(text, fontSize, fontFace) {
        context.font = fontSize + 'px ' + fontFace;
        return context.measureText(text).width;
    }

    return {
        getWidth: getWidth
    };
})();

function draw_title() {
    clean();
}

function draw_hist() {
    clean();
}

//Cleaning Function
//Will hide all the elements which are not necessary for a given chart type 

function clean() {
    let svg = d3.select('#vis').select('svg')
    svg.html("");
    // d3.selectAll('.graph-button').remove()
    d3.selectAll('#EntitySelector').remove()
    d3.selectAll('.tooltip').remove()
    d3.selectAll('.zoom-panel').remove()
    svg.on('.zoom', null);
}

//First draw function

function draw_tree() {
    clean();
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

    var tooltip = d3.select("#vis").append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);

    var svg = d3.select("#vis").select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    //d3.csv("category_avg.csv", ready);
    d3.csv("https://raw.githubusercontent.com/CakeMoon/6.859/main/category_avg.csv").then((data) => {

        data.forEach(function(d) {
            d.alc = +d.avg_lex_change;
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
            .on("mouseover", function(d) {
                d3.select(this).style("fill", function(d) { return color(d.category); })
                tooltip.text(d.category + " " + d.alc)
                .style("opacity", 0.8)
                        .style("left", (d3.event.pageX)+0 + "px") 
                        .style("top", (d3.event.pageY)-0 + "px");
            })
            .on("mouseout", function(d) {
                tooltip.style("opacity", 0);
                d3.select(this).style("fill", "#ccc");

            });

    
        var sum = d3.sum(data, function(d) { return d.alc; }); 
        var average = sum/data.length;

        var line = d3.svg.line()
            .x(function(d, i) { return x(d.category) + i; })
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


    })
}

function draw_bar() {
    clean();
    
    updateScatterPlot("community_size", "lexical_change");

    function updateScatterPlot(factor1, factor2) {
    
        // append the svg object to the body of the page
        var svg = d3.select("#vis")
        .select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
    
    
        //Read the data
        d3.csv("https://raw.githubusercontent.com/CakeMoon/6.859/main/filtered_data.csv").then((data) => {
    
            console.log("data max", d3.max(data, (d) => parseFloat(d['community_size'])))
    
            // List of groups (here I have one group per column)
            var social_factors = ['community_size', 'lexical_change', 'ideology_lexical_change', 
                                    'male_ratio',
                                    'friends_count_mean', 'friends_count_median',
                                    'follower_count_mean', 'follower_count_median',
                                    'tweet_count_mean', 'tweet_count_median', 'tweet_count_rank']
    
            // add the options to the button
            d3.select("#selectButton")
                .selectAll('myOptions')
                .data(social_factors)
                .enter()
                .append('option')
                .text(function (d) { return d; }) // text showed in the menu
                .attr("value", function (d) { return d; }) // corresponding value returned by the button
                .property("selected", function(d){ return d === factor1; })
    
            d3.select("#selectButton2")
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
    
        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => parseFloat(d[factor2]))])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));
    
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
        var mouseover = function(d) {
            tooltip
            .style("opacity", 1)
        }
    
        var mousemove = function(d) {
            tooltip
            .html("The <b>" + d.name + "</b> community described with the following topic words: " + d.topic_words)
            .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
            .style("top", (d3.mouse(this)[1]) + "px")
        }
    
        // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
        var mouseleave = function(d) {
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
            .attr("r", 4)
            .style("fill", "#69b3a2")
            .style("opacity", 0.3)
            .style("stroke", "white")
            .on("mouseover", mouseover )
            .on("mousemove", mousemove )
            .on("mouseleave", mouseleave )
    
        })
    
    };
    
}


//Array of all the graph functions
//Will be called from the scroller functionality


let activationFunctions = [
    draw_title,
    draw_tree,
    draw_bar,
    draw_hist,
]

//All the scrolling function
//Will draw a new graph based on the index provided by the scroll


let scroll = scroller()
    .container(d3.select('#graphic'))

scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function (index) {
    d3.selectAll('.step')
        .transition().duration(500)
        .style('opacity', function (d, i) {
            return i === index ? 1 : 0.1;
        });

    activeIndex = index
    let sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(i => {
        activationFunctions[i]();
    })
    lastIndex = activeIndex;

})

scroll.on('progress', function (index, progress) {
    if (index == 2 & progress > 0.7) {

    }
})

function kernelDensityEstimator(kernel, X) {
    return function (V) {
        return X.map(function (x) {
            return [x, d3.mean(V, function (v) {
                return kernel(x - v);
            })];
        });
    };
}

function kernelEpanechnikov(k) {
    return function (v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
}


// Anushree Stuff
window.addEventListener('message', function (e) {
    var opts = e.data.opts,
        data = e.data.data;

    return main(opts, data);
});

var defaults = {
    margin: margin,
    rootname: "TOP",
    format: ",d",
    title: "",
    width: width,
    height: height
};

function main(o, data) {
    var root,
        opts = $.extend(true, {}, defaults, o),
        formatNumber = d3v3.format(".2f"),
        rname = opts.rootname,
        // margin = opts.margin,
        theight = 36 + 16;

    $('#chart').width(opts.width).height(opts.height);
    var width = opts.width - margin.left - margin.right,
        height = opts.height - margin.top - margin.bottom - theight,
        transitioning;

    var color = d3v3.scale.category20c();

    var x = d3v3.scale.linear()
        .domain([0, width])
        .range([0, width]);

    var y = d3v3.scale.linear()
        .domain([0, height])
        .range([0, height]);

    var treemap = d3v3.layout.treemap()
        .children(function (d, depth) {
            return depth ? null : d._children;
        })
        .sort(function (a, b) {
            return a.value - b.value;
        })
        .ratio(height / width * 0.5 * (1 + Math.sqrt(5)))
        .round(false);

    var svg = d3v3.select("#vis").select("svg")
        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.bottom + margin.top)
        // .style("margin-left", -margin.left + "px")
        // .style("margin.right", -margin.right + "px")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + (margin.top + 50) + ")")
        .style("shape-rendering", "crispEdges");

    var grandparent = svg.append("g")
        .attr("class", "grandparent");

    grandparent.append("rect")
        .attr("y", -margin.top)
        .attr("width", width)
        .attr("height", margin.top);

    grandparent.append("text")
        .attr("x", 6)
        .attr("y", 6 - margin.top)
        .attr("dy", ".75em")
        .attr("font-family", "Arial");

    if (opts.title) {
        $("#chart").prepend("<p class='title'>" + opts.title + "</p>");
    }
    if (data instanceof Array) {
        root = {key: rname, values: data};
    } else {
        root = data;
    }

    initialize(root);
    accumulate(root);
    layout(root);
    console.log(root);
    display(root);

    if (window.parent !== window) {
        var myheight = document.documentElement.scrollHeight || document.body.scrollHeight;
        window.parent.postMessage({height: myheight}, '*');
    }

    function initialize(root) {
        root.x = root.y = 0;
        root.dx = width;
        root.dy = height;
        root.depth = 0;
    }

    // Aggregate the values for internal nodes. This is normally done by the
    // treemap layout, but not here because of our custom implementation.
    // We also take a snapshot of the original children (_children) to avoid
    // the children being overwritten when when layout is computed.
    function accumulate(d) {
        return (d._children = d.values)
            ? d.value = d.values.reduce(function (p, v) {
                return p + accumulate(v);
            }, 0)
            : d.value;
    }

    function layout(d) {
        if (d._children) {
            treemap.nodes({_children: d._children});
            d._children.forEach(function (c) {
                c.x = d.x + c.x * d.dx;
                c.y = d.y + c.y * d.dy;
                c.dx *= d.dx;
                c.dy *= d.dy;
                c.parent = d;
                layout(c);
            });
        }
    }

    function display(d) {
        grandparent
            .datum(d.parent)
            .on("click", transition)
            .select("text")
            .text(name(d) + " ⬅ (click to zoom out)")
            .attr("font-family", "Arial")
            .attr("font-weight", "bold")
            .attr("font-size", 18);

        var g1 = svg.insert("g", ".grandparent")
            .datum(d)
            .attr("class", "depth");

        var g = g1.selectAll("g")
            .data(d._children)
            .enter().append("g");

        g.filter(function (d) {
            return d._children;
        })
            .classed("children", true)
            .on("click", transition);

        var children = g.selectAll(".child")
            .data(function (d) {
                return d._children || [d];
            })
            .enter().append("g");

        children.append("rect")
            .attr("class", "child")
            .call(rect)
            .append("title")
            .text(function (d) {
                return d.key + " (" + formatNumber(d.value) + "\%)";
            })
            .attr("font-family", "Arial");
        children.append("text")
            .attr("class", "ctext")
            .text(function (d) {
                return d.key + " (" + formatNumber(d.value) + "\%)";
            })
            .attr("font-family", "Arial")
            .call(text2);

        g.append("rect")
            .attr("class", "parent")
            .call(rect);

        var t = g.append("text")
            .attr("class", "ptext")
            .attr("dy", ".75em")
            .attr("font-family", "Arial")

        t.append("tspan")
            .text(function (d) {
                return d.key;
            })
            .attr("font-family", "Arial");
        t.append("tspan")
            .attr("dy", "1.0em")
            .text(function (d) {
                return formatNumber(d.value) + "\%";
            })
            .attr("font-family", "Arial");
        t.call(text);

        g.selectAll("rect")
            .style("fill", function (d) {
                return color(d.key);
            });

        function transition(d) {
            if (transitioning || !d) return;
            transitioning = true;

            var g2 = display(d);
            t1 = g1.transition().duration(500),
                t2 = g2.transition().duration(500);

            // Update the domain only after entering new elements.
            x.domain([d.x, d.x + d.dx]);
            y.domain([d.y, d.y + d.dy]);

            // Enable anti-aliasing during the transition.
            svg.style("shape-rendering", null);

            // Draw child nodes on top of parent nodes.
            svg.selectAll(".depth").sort(function (a, b) {
                return a.depth - b.depth;
            });

            // Fade-in entering text.
            g2.selectAll("text").style("fill-opacity", 0);

            // Transition to the new view.
            t1.selectAll(".ptext").call(text).style("fill-opacity", 0);
            t1.selectAll(".ctext").call(text2).style("fill-opacity", 0);
            t2.selectAll(".ptext").call(text).style("fill-opacity", 1);
            t2.selectAll(".ctext").call(text2).style("fill-opacity", 1);
            t1.selectAll("rect").call(rect);
            t2.selectAll("rect").call(rect);

            // Remove the old node when the transition is finished.
            t1.remove().each("end", function () {
                svg.style("shape-rendering", "crispEdges");
                transitioning = false;
            });
        }

        return g;
    }

    function text(text) {
        text.selectAll("tspan")
            .attr("x", function (d) {
                return x(d.x) + 6;
            })
        text.attr("x", function (d) {
            return x(d.x) + 6;
        })
            .attr("y", function (d) {
                return y(d.y) + 6;
            })
            .style("opacity", function (d) {
                return this.getComputedTextLength() < x(d.x + d.dx) - x(d.x) ? 1 : 0;
            });
    }

    function text2(text) {
        text.attr("x", function (d) {
            return x(d.x + d.dx) - this.getComputedTextLength() - 6;
        })
            .attr("y", function (d) {
                return y(d.y + d.dy) - 6;
            })
            .style("opacity", function (d) {
                return this.getComputedTextLength() < x(d.x + d.dx) - x(d.x) ? 1 : 0;
            });
    }

    function rect(rect) {
        rect.attr("x", function (d) {
            return x(d.x);
        })
            .attr("y", function (d) {
                return y(d.y);
            })
            .attr("width", function (d) {
                return x(d.x + d.dx) - x(d.x);
            })
            .attr("height", function (d) {
                return y(d.y + d.dy) - y(d.y);
            });
    }

    function name(d) {
        return d.parent
            ? name(d.parent) + " / " + d.key + " (" + formatNumber(d.value) + "\%)"
            : d.key + " (" + formatNumber(d.value) + "\%)";
    }
}