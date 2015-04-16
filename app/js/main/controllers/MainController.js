"use strict";

angular.module("chart")
.controller("MainController", function () {
  this.ddOptions = [
      {
          text: "Subscribers",
          value: "subscribers"
      },
      {
          text: "Subscribers shares",
          value: "sShares",
      },
      {
          text: "Subscribers ratings",
          value: "sRatings",
      },
      {
          text: "Average duration",
          value: "aDuration",
      },
  ];
  this.ddSelected = angular.copy(this.ddOptions[0]);

  this.d3Options = {
    chart: {
        type: "discreteBarChart",
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 60
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d + "%";
        },
        transitionDuration: 300,
        xAxis: {
            axisLabel: "Chanels"
        },
        yAxis: {
            axisLabel: this.ddSelected.text,
            axisLabelDistance: 30,
            tickFormat: function(d) {
                return d + "%";
            },
        },
        color : function (d) {
          return d.color;
        }
    }
  };

  this.d3Data = [{
      values: [
          { "label" : "Chanel1" , "value" : 0, "color": "#882D61" },
          { "label" : "Chanel2" , "value" : 0, "color": "#403075" },
          { "label" : "Chanel3" , "value" : 0, "color": "#255E69" },
          { "label" : "Chanel4" , "value" : 0, "color": "#4B9130" },
          { "label" : "Chanel5" , "value" : 0, "color": "#A6A938" },
          { "label" : "Chanel6" , "value" : 0, "color": "#AA3939" },
      ]
  }];
  this.newData = function () {
    var val = this.d3Data[0].values;
    val.forEach( ele => {
      ele.value = Math.floor((Math.random() * 100) + 1);
    });
    //sort the arrey of objects
    val.sort(function (a, b) {
      if (a.value > b.value) {
        return -1;
      }
      if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
  };
  //initialize values
  this.newData();
});
