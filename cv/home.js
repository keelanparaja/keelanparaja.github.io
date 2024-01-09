function flowChartVisibility(ele){
    const flowChartChildren = [...document.getElementsByClassName("col-2")[0].children];
    let eleIndex = flowChartChildren.findIndex((element) => element == ele); console.log(eleIndex);
    if(ele.dataset.toggle == "on"){
    // if the toggle is on, toggle off and make all children display = none
        ele.dataset.toggle = "off";
        for(eleIndex++; eleIndex < flowChartChildren.length; eleIndex++){
            flowChartChildren[eleIndex].dataset.toggle = "off";
            flowChartChildren[eleIndex].style.display = "none";
        }
    }else if(ele.dataset.toggle == "off"){
    // if the toggle is off, turn on the next element only.    
        ele.dataset.toggle = "on";
        if(++eleIndex <= flowChartChildren.length){
            //flowChartChildren[eleIndex].dataset.toggle = "on";
            flowChartChildren[eleIndex].style.display = "block";
        }
    }
}