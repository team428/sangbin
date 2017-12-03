var svgWidth = 800;
var svgHeight = 400;

var dataSet = [];

var circleElements = d3.select("#myGraph")
  .selectAll("circle")
  .data(dataSet)

circleElements
  .enter()
  .append("circle")
  .attr("class", "mark")
  .attr("cx", function(d, i){
		return d[0];
	})
  .attr("cy", function(d, i){
		return svgHeight-d[1];
	})
  .attr("r", 5)

function updateData(){
		var result=[];

		result=d3.json("datamap.json",function(error,data){
			       var result=[];
			       for(var i=0;i<data.length;i++){
				       result.push(data[i]);
			       }return result;
 		       })
}

function updateGraph(){
	circleElements
	  .data(dataSet)
	  .transition()
    .duration(2000)
    .attr("cx", function(d, i){
			return d[0];
		})
	  .attr("cy", function(d, i){
			return svgHeight-d[1];
		})
		//데이터 삭제
	circleElements
		.exit()
		.remove()
}

setInterval(function(){
	dataSet = updateData();	// 데이터 갱신
	updateGraph();	// 그래프 갱신
}, 2000);
