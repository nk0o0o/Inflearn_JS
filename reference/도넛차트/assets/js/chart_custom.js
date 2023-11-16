var val01 = $('#txt_wait').text();
var val02 = $('#txt_progress').text();
var val03 = $('#txt_complete').text();
var val04 = $('#txt_what').text();

var data = [{
        "str_lab": "테스트",
        "num": val01
    },
    {
        "str_lab": "테스트2",
        "num": val02
    },
    {
        "str_lab": "테스트3",
        "num": val03
    },
    {
        "str_lab": "테스트4",
        "num": val04
    }
];

var width = 400,
    height = 400,
    radius = 190;

var divNode = d3.select("body").node();

var outerRadius = radius - 10,
    innerRadius = radius - 90;

var color = d3.scale.ordinal().range(['#B7BED2', '#71CAFF', '#3E62FD','#b3ddff']);

var arc = d3.svg.arc().outerRadius(radius - 20).innerRadius(radius - 90);

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.num;
    });

d3.select("#chart").append("div")
    .attr("id", "mainPie")
    .attr("class", "pieBox");

if ((val01 == 0 && val02 == 0) || (val02 == 0 && val03 == 0) || (val01 == 0 && val03 == 0))  {
    var svg = d3.select("#mainPie").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
} else {
    var svg = d3.select("#mainPie").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("stroke", "#fff")
        .attr("stroke-width", "2px")//차트 선 너비
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");//top,left 0 위치에서 만들어지기때문에 가운데로 오도록하기
}

/* defs */
var defs = svg.append("defs");
var filter = defs.append("filter")
    .attr("height", "130%");
filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 3)
    .attr("result", "blur");

filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 3)
    .attr("dy", 3)
    .attr("result", "offsetBlur");

var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");
/* //defs */
g.append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
        return color(i);
    })
    .on("mousemove", function (d) {
        d3.select(this)
            .transition()
            .duration(150)
            .attr('transform', 'scale(1.06)');

        var mousePos = d3.mouse(divNode);
        d3.select("#mainTooltip")
            .style("left", mousePos[0] - 180 + "px")
            .style("top", mousePos[1] - 180 + "px")
            .select("#value")
            .attr("text-anchor", "middle")
            .html(
                '<span class="d_status">' +
                d.data.str_lab +
                '</span>' +
                '<span>' +
                '<span class="d_bar"></span>' +
                '<span class="d_num">' +
                d.data.num +
                '</span>'
            )
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");

        d3.select("#mainTooltip").classed("hidden", false);
    })
    .on("mouseout", function (d) {
        d3.select(this)
            .style("filter", "none");
        d3.select(this)
            .transition()
            .duration(300)
            .attr('transform', 'translate(0,0)')
            .attr('transform', 'scale(1.0)');
        d3.select("#mainTooltip").classed("hidden", true);
    });