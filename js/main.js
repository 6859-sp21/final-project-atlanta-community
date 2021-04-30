$(".selectorsC").change(function () {
    updateS("init");
});

function updateS(type) { // type is for different trigger scenarios

    // when there's a categorical change, to make sure that line-graphs can grab colors, revert year-info back to "All"
    if (type == "init") {
        console.log("set the default value for options.");
    };

    // get current comparison set and year value
    let partA = $('#selectButton').find(":selected").text(),
        partB = $('#selectButton2').find(":selected").text()
    console.log("partA", partA);
    console.log("partB", partB);

    // if ((partA.length > 0) && (partA !== partB)) { 
        
    // } else {
    //     document.getElementById("warning").innerHTML = "[Please make sure that you are comparing different factors!]";
    // }
    updateScatterPlot(partA, partB);

    console.log("data: " + partA + "-" + partB);

}

updateScatterPlot("community_size", "lexical_change");
showBarGraph();
document.getElementById("potus_twitter").hidden = false;
document.getElementById("rhianna_twitter").hidden = true;
document.getElementById("ellen_twitter").hidden = true;
document.getElementById("atlantafalcons_twitter").hidden = true;
console.log("done");
// updateS("init");
