<template>
<div>
  <div id="left" style="width: 600px;height:400px;">
  </div>
  <div id="rightChart">
  </div>
</div>
</template>
<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      msg: "123"
    }
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('left'));

    var rightChart = echarts.init(document.getElementById('rightChart'));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    var rightOption = {
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        data: [{
            value: 235,
            name: '视频广告'
          },
          {
            value: 274,
            name: '联盟广告'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 400,
            name: '搜索引擎'
          }
        ]
      }]
    };
    myChart.setOption(option);
    rightChart.setOption(rightOption);
  }

}
</script>

<style>
#rightChart {
  position: relative;
  left: 52%;
  /*margin-left: -400px;*/
  /*margin-bottom: 70px;*/
  margin-top: -400px;
  width: 600px;
  height: 400px;
  /*border: solid #D01257 1px;*/
  /*box-shadow: 0 0 8px #FB90B7;*/
  /*border-radius: 10px;*/
}
</style>
