/*
ic-07
Brady Duncans
Modified: 10/05/2022
*/

const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

console.log("Hello")

// create the frame
const FRAME1 = d3.select("#vis")
                    .append("svg")
                        .attr("height", FRAME_HEIGHT)
                        .attr("width", FRAME_WIDTH)
                        .attr("class", "frame");

// initialize dataset
const data = [55000, 48000, 27000, 66000, 90000];

const MAX_Y = d3.max(data, (d) => {return d;});

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const Y_SCALE = d3.scaleLinear()
                    .domain([0, MAX_Y])
                    .range([0, VIS_HEIGHT]);


FRAME1.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", MARGINS.left)
            .attr("cy", (d) => {return Y_SCALE(d) + MARGINS.top;})
            .attr("r", 5)
            .attr("class", "point");

FRAME1.append("g")
        .attr("transform", "translate(" + (VIS_WIDTH + MARGINS.top) +
        ", " + MARGINS.top + ")")
        .call(d3.axisLeft(Y_SCALE).ticks(5));