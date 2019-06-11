var province=$("#province"),city=$("#city"),town=$("#town");
var province1=$("#province_edit"),city1=$("#city_edit"),town1=$("#town_edit");
for(var i=0;i<provinceList.length;i++){
    addEle(province,provinceList[i].name);
}
for(var j=0;j<provinceList.length;j++){
    addEle(province1,provinceList[j].name);
}
function addEle(ele,value){
    var optionStr="";
    optionStr="<option value="+value+">"+value+"</option>";
    ele.append(optionStr);
}
function removeEle(ele){
    ele.find("option").remove();
    var optionStar="<option value="+"请选择"+">"+"请选择"+"</option>";
    ele.append(optionStar);
}
var provinceText,cityText,cityItem;
var provinceText1,cityText1,cityItem1;
province.on("change",function(){
    provinceText=$(this).val();
    $.each(provinceList,function(i,item){
        if(provinceText == item.name){
            cityItem=i;
            return cityItem
        }
    });
    removeEle(city);
    removeEle(town);
    $.each(provinceList[cityItem].cityList,function(i,item){
        addEle(city,item.name)
    })
});
city.on("change",function(){
    cityText=$(this).val();
    removeEle(town);
    $.each(provinceList,function(i,item){
        if(provinceText == item.name){
            cityItem=i;
            return cityItem
        }
    });
    $.each(provinceList[cityItem].cityList,function(i,item){
        if(cityText == item.name){
            for(var n=0;n<item.areaList.length;n++){
                addEle(town,item.areaList[n])
            }
        }
    });
});
province1.on("change",function(){
    provinceText1=$(this).val();
    $.each(provinceList,function(i,item){
        if(provinceText1 == item.name){
            cityItem1=i;
            return cityItem1
        }
    });
    removeEle(city1);
    removeEle(town1);
    $.each(provinceList[cityItem1].cityList,function(i,item){
        addEle(city1,item.name)
    })
});
city1.on("change",function(){
    cityText1=$(this).val();
    removeEle(town1);
    $.each(provinceList,function(i,item){
        if(provinceText1 == item.name){
            cityItem1=i;
            return cityItem1
        }
    });
    $.each(provinceList[cityItem1].cityList,function(i,item){
        if(cityText1 == item.name){
            for(var n=0;n<item.areaList.length;n++){
                addEle(town1,item.areaList[n])
            }
        }
    });
});