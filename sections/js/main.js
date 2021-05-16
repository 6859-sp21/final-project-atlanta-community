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

    let category = $('#selectButton3').find(":selected").text();
    updateScatterPlot(partA, partB, category);

    console.log("data: " + partA + "-" + partB);

}
// document.getElementById("potus_twitter").hidden = false;
// document.getElementById("rhianna_twitter").hidden = true;
// document.getElementById("ellen_twitter").hidden = true;
// document.getElementById("atlantafalcons_twitter").hidden = true;
updateScatterPlot("community_size", "lexical_change", "all");
// showBarGraph();

console.log("done");
// updateS("init");
