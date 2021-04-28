$(".selectorsC").change(function () {
    updateS("init");
});

function updateS(type) { // type is for different trigger scenarios

    // when there's a categorical change, to make sure that line-graphs can grab colors, revert year-info back to "All"
    if (type == "init") {
        // $('#selectButton option[value=lexical_change]').attr('selected','selected');
        // $('#selectButton option[value=lexical_change]').text("lexical_change");
        // $('#selectButton2').val("lexical_change");
        // $('#selectButton2').text("lexical_change");
        console.log("set the default value for options.");
    };

    // get current comparison set and year value
    let partA = $('#selectButton').find(":selected").text(),
        partB = $('#selectButton2').find(":selected").text()
    console.log("partA", partA);
    console.log("partB", partB);

    if ((partA.length > 0) && (partA !== partB)) { 
        updateScatterPlot(partA, partB);
    } else {
        document.getElementById("warning").innerHTML = "[Please make sure that you are comparing different factors!]";
    }

    console.log("data: " + partA + "-" + partB);

    // // check if "All year" is on, if not grab current slider year
    // if (allyearvalue == "false") {
    //     year = $('#yearRange').val();
    //     document.getElementById("selectedyear").innerHTML = "showing: " + year;
    // } else {
    //     year = "All";
    //     document.getElementById("selectedyear").innerHTML = "";
    // };

    // if (partA !== partB) { // only update data when you are comparing two different factors

    //     updatesankey(partA, partB, year);
    //     subgraph("A", partA, type);
    //     subgraph("B", partB, type);

    //     // geo_subgraph("ethnic", "Los Angeles", type);
    //     // geo_subgraph("grade", "Los Angeles", type);
    //     // geo_subgraph("gender", "Los Angeles", type);

    //     eventTable(year);

    //     document.getElementById("warning").innerHTML = "";

    // } else { // return error when you are comparing two of the same factors

    //     document.getElementById("warning").innerHTML = "Please make sure that you are comparing different data";
    // }

    // // console change for debugging purpose
    // console.log("data: " + partA + "-" + partB + "(" + year + ")");


}

updateS("init");
updateScatterPlot("community_size", "lexical_change");