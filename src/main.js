import * as echarts from "echarts"
import "./reset.css"
import "./global.css"
import "./bio.css"
import "./projects.css"
import "./skills.css"
import "./open-source.css"
import "./job.css"
import "./others.css"
import "./education.css"
import "./mobile.css"

const myChart = echarts.init(document.getElementById('skills'));

const option = {
  radar: {
    indicator: [
      { name: 'Vue 全家桶', max: 100 },
      { name: '编程基础', max: 100 },
      { name: '静态页面', max: 100 },
      { name: 'React 全家桶', max: 100 },
      { name: '项目开发', max: 100 },
      { name: '沟通能力', max: 100 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [100, 70, 90, 80, 85, 70],
          name: '能力雷达'
        }
      ]
    }
  ]
};

myChart.setOption(option);