webpackJsonp([1],{"+F7K":function(e,n){},"221M":function(e,n,t){"use strict";var a=t("TE8U"),r=t("lVK7");n.a={components:{ChartSunburst:r.d},data:function(){return{chartData:a.a}}}},"2ur6":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"chart"},[t("link",{attrs:{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}}),e._v(" "),t("chart-pie",{attrs:{data:e.chartData,config:e.chartConfig}})],1),e._v(" "),e._m(0)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{staticClass:"language-html"},[t("code",[e._v("\n<template>\n  <div class='chart'>\n    \x3c!-- import font awesome for legend icons --\x3e\n    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>\n    <chart-pie :data='chartData'></chart-pie>\n  </div>\n</template>\n\n<script>\n  import { ChartPie } from 'vue-d2b'\n\n  export default {\n    data () {\n      return {\n        chartData: [\n          {label: 'arc 1', value: 23},\n          {label: 'arc 2', value: 31},\n          {label: 'arc 3', value: 80},\n          {label: 'arc 4', value: 8}\n        ],\n\n        chartConfig (chart) {\n          chart.donutRatio(0.5)\n        }\n      }\n    },\n\n    components: {\n      ChartPie\n    }\n  }\n<\/script>\n\n<style scoped>\n  .chart{\n    width: 100%;\n    height: 500px;\n  }\n</style>")])])}];a._withStripped=!0;var s={render:a,staticRenderFns:r};n.a=s},"7n4P":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"chart"},[t("link",{attrs:{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}}),e._v(" "),t("chart-sunburst",{attrs:{data:e.chartData}}),e._v(" "),e._m(0)],1)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{staticClass:"language-html"},[t("code",[e._v("\n<template>\n  <div class='chart'>\n    <chart-sunburst :data='chartData'></chart-sunburst>\n  </div>\n</template>\n\n<script>\n  import { ChartSunburst } from 'vue-d2b'\n\n  export default {\n    data () {\n      return {\n        chartData: {\n          label: 'root',\n          children: [\n            {\n              label: 'child 1',\n              children: [\n                {\n                  label: 'child 1-1',\n                  size: 10\n                },\n                {\n                  label: 'child 1-2',\n                  children: [\n                    {\n                      label: 'child 1-2-1',\n                      size: 5\n                    },\n                    {\n                      label: 'child 1-3-1',\n                      size: 8\n                    }\n                  ]\n                },\n                {\n                  label: 'child 1-3',\n                  children: [\n                    {\n                      label: 'child 1-3-1',\n                      children: [\n                        {\n                          label: 'child 1-3-1-1',\n                          size: 2\n                        },\n                        {\n                          label: 'child 1-3-1-2',\n                          size: 5\n                        }\n                      ]\n                    },\n                    {\n                      label: 'child 1-3-2',\n                      size: 8\n                    }\n                  ]\n                }\n              ]\n            },\n            {\n              label: 'child 2',\n              size: 25\n            }\n          ]\n        }\n      }\n    },\n\n    components: {\n      ChartSunburst\n    }\n  }\n<\/script>\n\n<style scoped>\n  .chart{\n    width: 100%;\n    height: 500px;\n  }\n\n  /* media query to force hide breadcrumbs when the screen is too small */\n  @media screen and (max-width: 500px) {\n    .d2b-breadcrumbs-frame {\n      display: none;\n      width: 0px !important;\n    }\n  }\n</style>")])])}];a._withStripped=!0;var s={render:a,staticRenderFns:r};n.a=s},"88ut":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"demo"}},[a("h1",[a("img",{attrs:{src:t("HAIu")}}),e._v(" "),a("img",{attrs:{src:t("fyHx")}})]),e._v(" "),a("h2",[e._v("\n    Try out the different d2b.js charts built with vue components.\n  ")]),e._v(" "),a("div",{staticClass:"links"},[a("router-link",{attrs:{to:{name:"axis"}}},[e._v("Axis Chart")]),e._v(" "),a("router-link",{attrs:{to:{name:"pie"}}},[e._v("Pie Chart")]),e._v(" "),a("router-link",{attrs:{to:{name:"sankey"}}},[e._v("Sankey Chart")]),e._v(" "),a("router-link",{attrs:{to:{name:"sunburst"}}},[e._v("Sunburst Chart")]),e._v(" "),a("router-link",{attrs:{to:{name:"generator"}}},[e._v("Generator")]),e._v(" "),a("a",{attrs:{href:"https://github.com/d2bjs/vue-d2b"}},[e._v("Github")])],1),e._v(" "),a("router-view")],1)},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};n.a=s},"8Dk1":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"chart"},[t("chart-sankey",{attrs:{data:e.chartData,config:e.chartConfig}})],1),e._v(" "),e._m(0)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{staticClass:"language-html"},[t("code",[e._v("\n<template>\n  <div class='chart'>\n    <chart-sankey :data='chartData'></chart-sankey>\n  </div>\n</template>\n\n<script>\n  import { ChartSankey } from 'vue-d2b'\n\n  export default {\n    data () {\n      return {\n        chartData: {\n          nodes: [\n            {name: 'Node A'},\n            {name: 'Node B'},\n            {name: 'Node C'},\n            {name: 'Node D'},\n            {name: 'Node E'}\n          ],\n          links: [\n            {source: 'Node A', target: 'Node E', value: 2},\n            {source: 'Node A', target: 'Node C', value: 2},\n            {source: 'Node B', target: 'Node C', value: 2},\n            {source: 'Node B', target: 'Node D', value: 2},\n            {source: 'Node C', target: 'Node D', value: 2},\n            {source: 'Node C', target: 'Node E', value: 2},\n            {source: 'Node D', target: 'Node E', value: 4}\n          ]\n        },\n\n        chartConfig (config) {\n          config\n            .sankey()\n            .sankey()\n            .nodePadding(100)\n\n          config\n            .sankey()\n            .nodeDraggableY(true)\n        }\n      }\n    },\n\n    components: {\n      ChartSankey\n    }\n  }\n<\/script>\n\n<style scoped>\n  .chart{\n    width: 100%;\n    height: 500px;\n  }\n</style>")])])}];a._withStripped=!0;var s={render:a,staticRenderFns:r};n.a=s},BR44:function(e,n,t){"use strict";var a=t("DZbR"),r=(t.n(a),t("wdoG"));n.a={mixins:[r.a],props:{generator:{default:function(){return Object(a.chartSunburst)()}}},data:function(){return{name:"sunburst-chart"}}}},FJi4:function(e,n){},HAIu:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAACLlBMVEVMaXFBuINBuIM8enI/nnxBuINBuINBuIM8enJBuIM8enJBuINBuINBuIM8enJBuIM8enJBuINBuIM7eXFBuINBuIM8eXFBuINBuIM8eHFBuIM8eXFBuIM8eHBBuIM8eHBBuIM8d3BBuINBuIM8d3BBuINBuINBuIM8dnBBuINBuIM8dnBBuINBuIM7dXBBuINBuIM8dG9BuINBuIM8dG9BuIM8dG9BuINBuIM8c29BuINBuIM7cm5BuINBuIM7cW5BuIM7cW9BuINBuINBuIM7cW5BuINBuINBuIM7b21BuINBuIM6b21BuIM7bm1BuINBuIM7bW1BuINBuIM6bGxBuINBuIM6a2xBuIM6a2xBuINBuIM6amxBuIM6aWtBuINBuIM6aGpBuINBuIM6ZmpBuINBuIM5ZGlBuIM5Y2lBuINBuIM5YWhBuINBuIM5YGdBuIM4XmdBuINBuIM4XGZBuINBuIM4WmVBuIM3WGRBuIM3V2RBuINBuIM3VGNBuIM2UmI2UGFBuIM1TWA1SV41Sl41S141TF81TWA2T2A2UWE2U2I3VWM3WGQ4W2U4Xmc5YGc5YWg5ZGk6Zmo6Z2o6aGo6a2w7bW07bm07cG48c287dnA7eHA8enI8fHI9fnM8gXM9g3Q9hnU9iXY+i3c+jHc+j3g+kXk+lHo/l3o/mXs+m3s/nnw/oH0/o31Apn5BqH5Aqn9BrH9BroBBr4BCsYBBs4FBtoJCt4JBuIP7mHZoAAAAhHRSTlMAAQICAwQHCAgLDQ4QEhIVFhcaGh4hIiUoKissLzEzNDc4Oj4/QERFRkhLTVBTVldaXV5iYmZnaW1vcHV3eHx8gIGDhIeJio+Sk5aZm52foaWmqKyusLS1t7m6u7y/wMLHx8zP0NPW1trc3uLi5Obn6urt7+/y8/T29vf4+vv7/P39/v7L5yYnAAANT0lEQVR42uzdiZ/OVRTH8WM0CxqVZVqMFCqyZKkQolL2FktaVNZkkr3CyHoGUxRCSFFk3yrb+e96qldFzfIsn9/vd67u+y841515zXi+c89XoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKov+t94y1WyEN/SQx/RoUsvuGod6T2i2GOo+ddbUkZrVCGs4bakutyGRjHVLKi5KQF5VyyFiTc9PdtcpQPzcqZEN7SUT7DQpp/NlQq+76fb5njPWDUt6URLyplGPGeuaP+crfN9T1XQrZ2l0S0H2rQnZdN9T75X9O2NdYp5WyWBKwWCmnjdX3rxFfN9bXSnlScE8qZa+xXv97xnvXG+riNoV82lZgbT9VyLaLhlp/7z9TvmSsb5UyRWBTlPKtsV66acoOyw115QuFbOosqM6bFPL5FUMt73DznEONdVwpcwU1VynHjTX0ljnL5hnq+pcK2d5bQL23K+RL+FfeeWW3TtrTWGeVskxAy5Ry1lg9/z3qq8Y6oJRRghmllAPGevU/s3ZaY6jLOxRSXyWQqnqF7LhsqDWd/jvts8b6XikzBDJDKd8b69kmpq2sM9S1nQpprBFEDfY59M6rhqqrbGreAcY6qZRFgliklJPGGtD0wO8Ya49CGgYKYCCWZe4x1jvNTFy70VAXsH8BJM11m9turG1u5EnGcpXm+s1tJzU7czWc5v6C/RTd0LHU++jI5ba/GGpVdfNTDzcWl+bOLvVCZivlB2MNb3pg52nujh6l3UcP7P+pdG67sLyluR8zFpfmLintQpYohc5tH2158JnG2qeUp0u5j6eVss9YM1uZvCuc5l7CPu9eW178fZSvVcj2S4Za37W12ccZ64hSXi7+Ql5WyhFjjWt19g5LDXXlc4Vs7lx0brtZIXRuu7Rd69MPMZaDNNdvbjskj+nbzDHUja8Usq1PcffRB/urpK/gxwdz2uQz/0PGOqeUFcVdyAqlnDPWQ/kd4BVjfaOUMcXcxxilfGOsV/I8QadPDMU9UKivyjK3bYRz20865XuG0cY6qpQZWea2R401Ou8zVPhNc+8v9D7ux749d14zVF1F/qfob6xTSll0++S2/Qs5xtvG2quQhoFZ5bb044O3CjrHA37T3LYFPT7gctsLhtr4QGFfWROMdVgpEws5xkSlHDbWBClM9UpD/Yp9pLWpYwG5Lff44FdDrayWAg0zFpfmvpv/Id5VCp3bDis8QlhoKPCBwsP5nuFhLIyhHx8svEMK9oixzihlSfq57RljPSJFmG6s/UoZkd8BRihlv7GmSzG6rjNU2mmu39x2XVcpygvG+k4pr+Uz/mtKoXPb56U47T4y1FXsbe7mmjweH2C57Rfw44OP2kmRBhnrhFIWtD78AqWcMNagpgcOO83t1+rSuMBz26Y96Hbd3IrUctsGOLfd8qCUYKqxDirluZYHf04pB401VUpxz8eG4tLcDe3DXBr38T1SkpHGOqaUWS2NPUspdG47UkpT8YGhrmEPFBq7NT91N+wbcRec235QISV63Fhcmrs4jaVxp4z1uJTsDWNxae7g5kYejP0yR+e2b0jp7vvMUMmvm/O7NO6z+wQw3ljcurmJoeW244VwJ7xuDkxz725q3rvd5ra5pXGIp4z1o1LmJvv44EdjPSWMsvmGAtPc3iEtjZtfJpBexkp03RyX29JL43oJZpqxuHVzI8LJbacJpwu8bo5Lc+urknp8QOe2a7oIaKyxEktzudz2O2ONFVLlh4a6yj1QqAljadyHlYJ6wlg/KWVBMrntT8Z6QlhtgigP81z2RQuiPIx7fAAvjcuVfeECKA/zuzRusvD8l4f5zW1zZV8JcF8e5r3si+Z33dzW7mGUfdGcl4dxuS29NK6vJMR1eVgIZV80z+VhfnPbXNlXYhyXh4VR9kXDy8O4NJfLbeGlcVRu+48wysMw9NK4oZIkv+VhFDq3nYfltn8JpTwMQue2PSVhfsvDEMmXfdH8locR0ij7ovktDwOkUfZF81seVjo6t62Dc1uRsMrDSkYvjRsgqXBbHqaBlH3R/JaH+cptNyaQ24ZWHuYqt50kafFbHhZK2RfNb3mYo6VxwyU9ftPc2z+3Da08zE1u+6ikym95WCBlXzS/5WE+Hh/kyr5S5rc8zMXSuHGSNr/lYR5y26WJ5rahlYc5yG2HSPr8rpsLe2lc08IuDwul7IvmtzwskLIvmt/ysFDKvmh+y8MyXRo3WrLitzwslLIvmt/ysAxz2/6SIbflYdk9PnhLsuS3PCyUsi+a3/KwjJbGTZBs+S0Py2Zp3MoUc9vQysMyyW2HSdb8lodl8fggV/aVOb/lYaGUfdH8loelvjRuunjgtzws7dx2Xeq5bWjlYSnnts+LD37Lw0Ip+6L5LQ8LpOyLFmaae3vktqGVh4VS9kXzWx4WSNkXzW95WFpL43JlX674LQ9LKbcdKb74LQ8LpeyL5rc8LJSyr9/Yu0NrqaIgiKIIYiEQwiAkFBqDIwHUZIfA4v7ue6tfzUmjVvfWxeJhJ3ZbgX3pcvGw+adxBvvS5eJh47utwb50uXjY9G47+zTuiXjYEuxLl4uHze62DvvS5eJho0/jIPaly8XDBndbiX3pcvGwud3WYl+6XDxsCfaly8XDpp7GaexLl4uHLcG+dLl42L9+vGwe+9Ll4mETT+MmsC9dLh428DRuAvvS5eJhfredwb50uXgYPz6Ywb50ue/mdj+NeyAepp/GjWFfulA8TO+2c9iXLhMP07vtJPali8TDNmFfukQ8TD+NS91t1+Bh+mncLPaly8PD9G47jX3p4vAwvduOY1+6MDxsH/aly8LDNmJfuig8bCP2pUvCw/jTuPDdNh4P00/jDmFfuhg8bCv2pUvBw/Ruew770oXgYXq3PYd96TLwsM3Yly4CD9O77UnsS5ew5rbutrF4mN5tD2Nfuut42HbsS3cbD9PHB+exL91lPEw/jTuPfenu4mF6t72Bfemu4mF6t72Bfeluvpt78tO4lXgYfhp3C/vSXcPDnoJ96W7hYfr44B72pbuEh+mncfewL90dPIzvtnFP43LwsN83dtur2JfuAh6mjw/uYl+683jY07Av3XE8TD+Nu4196U7jYfpp3H3sS3cYD9O77X3sS3cWD9PHBwnYl+4oHvZI7Et3EA/TT+MysC/dOTxM77Yp2JfuGB6mn8alYF+6U3jYc7Ev3SE87LnYl+7MmvvebbPwMH18kIV96Q7gYc/GvnTzeJjebdOwL53Gw35N77Zp2JduGg97PvalG8bDCrAv3SgepnfbROxLN4mH6adxmdiXTuNhP+d220zsS6ffzf35PrXb7noaF4iHtWBfuik8TO+2udiXbggP00/jgrEv3Qgepp/GJWNfugk8TO+22diXbgAP07ttNval83hYG/al43hYG/bF03gYLh/70mk8zLYB+9JpPIy2AfvSaTxMtgP70mk8DLYD+9Lpd3Ou3U/jcvAw1hrsS6fxMNQe7Eun8TDTJuxLp/Ew0ibsS6fXXFHLbnsGDwPtwr50Gg/7eNuwL53Gwz7cOuxLp/GwOuxLp/GwPuxLp/GwOuxLp/GwPuxLp/GwPuxLp/GwOuxLp/GwPuxLp/GwOuxLp/GwPuxLp/GwOuxLl7Dmtu62/+/L63rLsS+dxsPqsC+dxsP6sC+dxsPqsC+dxsP6sC+dxsPqsC+dfjf3fhr3KQwP68O+dBoPq8O+dBoP68O+dBoPq8O+dBoP68O+dBoP68O+dN9ex3sW9qXTeFgf9qXTeFgd9qXTeFgf9qXTeFgd9qX7jPGwPuxLp/GwPuxLp/GwOuxLp/GwPuxL9/V1qKdiXzqNh/VhXzqNh9VhX7oza+57t72Hh/VhXzqNh9VhXzqNh/VhXzqNh9VhXzqNh/VhXzqNh/VhXzqNh9VhXzqNh/VhXzqNh9VhX7q5d3PdT+Ny8LA67Eun8bA+7Eun8bA+7Eun8bA67Eun8bA+7Eun8bA67Eun8bA+7Eun8bA+7EuH8bA+7Etn8bBG7EtH8bC/7d3hRgNwAEVxS20y+9A0kkzM+pBSIkVKJsrIUiIRIyVLSSmTMnryHmL3w+F/fq9xuafE2FdaMh5WZuwrLRgPKzP2lZa7m/M0LiMWDys29pUWioeVG/tKy8TDSo59pUXiYSXHvtISa667bVIgHlZ27Ctt+nhY6bGvtKnjYcXHvtIujH2xNMfGvliOjH2x1EbGvlg2jX3B3Bn7YlmZGPti6Rv7Yml8GPti2Tf2xTL36G7LsmbsC+ba2BdL68fYF8uJsS+W+quxL5YdY18slaGncSyrxr5gBsa+WJpfxr5YDo19sVRHxr5YNox9wdwa+2JZnhj7Yjkz9sXSeDf2xbJn7Itl9sHYF0vX2BfMlbEvlta3sS+WnrEvlvkXY18s28a+WCpDd1uW9p+xL5ZzY18sC5/GvlgOjH2xVJ+MfbGsG/uCuTH2xbL0a+yL5dTYF0v9zdM4ll1jXywz98a+WDrGvmAujX2xLI6NfbEcG/tiqT0b+2LZMvYlSZIkSZIkSZIkSZIkSZIkKekfnCgLkz94A5oAAAAASUVORK5CYII="},"IR/2":function(e,n){},Jivl:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"legend"},[t("div",{staticClass:"note"},[e._v("\n      The Generator component is a one size fits all d2b generator wrapper. It can be used in place of the other chart components or for some of the other d2b utility generators like the d2b legend generator.\n    ")]),e._v(" "),t("link",{attrs:{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}}),e._v(" "),t("generator",{attrs:{generator:e.legendGenerator,data:e.legendData,config:e.legendConfig}}),e._v(" "),e._m(0)],1)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{staticClass:"language-html"},[t("code",[e._v("\n<template>\n  <div>\n    \x3c!-- import font awesome for legend icons --\x3e\n    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>\n    <generator :generator='legendGenerator' :data='legendData' :config='legendConfig'></generator>\n  </div>\n</template>\n\n<script>\n  import { legend } from 'd2b'\n  import { Generator } from 'vue-d2b'\n\n  export default {\n    data () {\n      return {\n        legendGenerator: legend(),\n        legendData: [\n          { html: 'Lemon' },\n          { html: 'Lime' },\n          { html: 'Grapefruit' },\n          { html: 'Orange' }\n        ],\n        legendConfig (legend) {\n          legend\n            .clickable(true)\n            .dblclickable(true)\n        }\n      }\n    },\n\n    components: {\n      Generator\n    }\n  }\n<\/script>")])])}];a._withStripped=!0;var s={render:a,staticRenderFns:r};n.a=s},M1jZ:function(e,n,t){"use strict";var a=t("DZbR"),r=(t.n(a),t("lVK7"));n.a={data:function(){return{chartData:{sets:[{generators:[Object(a.svgArea)(),Object(a.svgLine)(),Object(a.svgScatter)()],graphs:[{label:"area 1",values:[{x:1,y:25},{x:2,y:38},{x:3,y:24},{x:4,y:60},{x:5,y:22}]},{label:"area 2",values:[{x:1,y:15},{x:2,y:8},{x:3,y:54},{x:4,y:22},{x:5,y:20}]}]}]}}},components:{ChartAxis:r.a}}},NTw4:function(e,n,t){"use strict";n.a={}},NWIo:function(e,n,t){"use strict";var a=t("DZbR"),r=(t.n(a),t("lVK7"));n.a={data:function(){return{legendGenerator:Object(a.legend)(),legendData:[{html:"Lemon"},{html:"Lime"},{html:"Grapefruit"},{html:"Orange"}],legendConfig:function(e){e.clickable(!0).dblclickable(!0)}}},components:{Generator:r.e}}},RsBR:function(e,n,t){"use strict";var a=t("DZbR"),r=(t.n(a),t("wdoG"));n.a={mixins:[r.a],props:{generator:{default:function(){return Object(a.chartAxis)()}}},data:function(){return{name:"axis-chart"}}}},S8VD:function(e,n,t){"use strict";function a(e){o||t("dII7")}var r=t("NTw4"),s=t("88ut"),o=!1,u=t("VU/8"),i=a,c=u(r.a,s.a,!1,i,null,null);c.options.__file="demo/Demo.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=c.exports},TE8U:function(e,n,t){"use strict";n.a={label:"root",children:[{label:"child 1",children:[{label:"child 1-1",size:10},{label:"child 1-2",children:[{label:"child 1-2-1",size:5},{label:"child 1-3-1",size:8}]},{label:"child 1-3",children:[{label:"child 1-3-1",children:[{label:"child 1-3-1-1",size:2},{label:"child 1-3-1-2",size:5}]},{label:"child 1-3-2",size:8}]}]},{label:"child 2",size:25}]}},"X+yM":function(e,n){},YZf6:function(e,n,t){"use strict";function a(e){o||t("+F7K")}var r=t("221M"),s=t("7n4P"),o=!1,u=t("VU/8"),i=a,c=u(r.a,s.a,!1,i,null,null);c.options.__file="demo/DemoSunburst.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=c.exports},"Z45+":function(e,n,t){"use strict";function a(e){o||t("IR/2")}var r=t("jxRZ"),s=t("8Dk1"),o=!1,u=t("VU/8"),i=a,c=u(r.a,s.a,!1,i,"data-v-27b64df0",null);c.options.__file="demo/DemoSankey.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=c.exports},ZVrH:function(e,n,t){"use strict";var a=t("lVK7");n.a={data:function(){return{chartData:[{label:"arc 1",value:23},{label:"arc 2",value:31},{label:"arc 3",value:80},{label:"arc 4",value:8}],chartConfig:function(e){e.donutRatio(.5)}}},components:{ChartPie:a.b}}},dII7:function(e,n){},fyHx:function(e,n,t){e.exports=t.p+"static/img/logo-d2b.d37eedd.png"},hqtK:function(e,n){},"i+1z":function(e,n,t){"use strict";var a=t("wdoG");n.a={mixins:[a.a],props:{generator:{required:!0,type:Function},name:{type:String,default:"generator"}}}},i8lk:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"chart"},[t("link",{attrs:{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}}),e._v(" "),t("chart-axis",{attrs:{data:e.chartData}})],1),e._v(" "),e._m(0)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{staticClass:"language-html"},[t("code",[e._v("\n<template>\n  <div class='chart'>\n    \x3c!-- import font awesome for legend icons --\x3e\n    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>\n    <chart-axis :data='chartData'></chart-axis>\n  </div>\n</template>\n\n<script>\n  import { svgArea, svgLine, svgScatter } from 'd2b'\n  import { ChartAxis } from 'vue-d2b'\n\n  export default {\n    data () {\n      return {\n        chartData: {\n          sets: [\n            {\n              generators: [svgArea(), svgLine(), svgScatter()],\n              graphs: [\n                {\n                  label: 'area 1',\n                  values: [\n                    {x: 1, y: 25},\n                    {x: 2, y: 38},\n                    {x: 3, y: 24},\n                    {x: 4, y: 60},\n                    {x: 5, y: 22}\n                  ]\n                },\n                {\n                  label: 'area 2',\n                  values: [\n                    {x: 1, y: 15},\n                    {x: 2, y: 8},\n                    {x: 3, y: 54},\n                    {x: 4, y: 22},\n                    {x: 5, y: 20}\n                  ]\n                }\n              ]\n            }\n          ]\n        }\n      }\n    },\n\n    components: {\n      ChartAxis\n    }\n  }\n<\/script>\n\n<style scoped>\n  .chart{\n    width: 100%;\n    height: 500px;\n  }\n</style>")])])}];a._withStripped=!0;var s={render:a,staticRenderFns:r};n.a=s},iXgl:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),r=t("/ocq"),s=t("S8VD"),o=t("mcE3"),u=t("vfk/"),i=t("Z45+"),c=t("YZf6"),l=t("zVKt"),d=t("hqtK");t.n(d);a.a.config.productionTip=!1,a.a.use(r.a);var h=new r.a({routes:[{name:"axis",path:"/",alias:"/axis",component:o.a},{name:"pie",path:"/pie",component:u.a},{name:"sankey",path:"/sankey",component:i.a},{name:"sunburst",path:"/sunburst",component:c.a},{name:"generator",path:"/generator",component:l.a}]});new a.a({el:"#app",template:"<Demo/>",components:{Demo:s.a},router:h})},jxRZ:function(e,n,t){"use strict";var a=t("lVK7");n.a={data:function(){return{chartData:{nodes:[{name:"Node A"},{name:"Node B"},{name:"Node C"},{name:"Node D"},{name:"Node E"}],links:[{source:"Node A",target:"Node E",value:2},{source:"Node A",target:"Node C",value:2},{source:"Node B",target:"Node C",value:2},{source:"Node B",target:"Node D",value:2},{source:"Node C",target:"Node D",value:2},{source:"Node C",target:"Node E",value:2},{source:"Node D",target:"Node E",value:4}]},chartConfig:function(e){e.sankey().sankey().nodePadding(100),e.sankey().nodeDraggableY(!0)}}},components:{ChartSankey:a.c}}},lVK7:function(e,n,t){"use strict";var a=t("X+yM"),r=(t.n(a),t("wdoG"),t("RsBR"));t.d(n,"a",function(){return r.a});var s=t("xOI5");t.d(n,"b",function(){return s.a});var o=t("xHxk");t.d(n,"c",function(){return o.a});var u=t("BR44");t.d(n,"d",function(){return u.a});var i=t("i+1z");t.d(n,"e",function(){return i.a})},mcE3:function(e,n,t){"use strict";function a(e){o||t("nqfp")}var r=t("M1jZ"),s=t("i8lk"),o=!1,u=t("VU/8"),i=a,c=u(r.a,s.a,!1,i,"data-v-50af7f5c",null);c.options.__file="demo/DemoAxis.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=c.exports},nqfp:function(e,n){},"vfk/":function(e,n,t){"use strict";function a(e){o||t("FJi4")}var r=t("ZVrH"),s=t("2ur6"),o=!1,u=t("VU/8"),i=a,c=u(r.a,s.a,!1,i,"data-v-5917a86b",null);c.options.__file="demo/DemoPie.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=c.exports},wdoG:function(e,n,t){"use strict";var a=t("vwbq"),r=t("DZbR");t.n(r);n.a={template:'\n    <div :class = \'["vue-d2b-container", "vue-d2b-" + name]\'></div>\n  ',props:{data:{default:function(){}},config:{default:function(){return function(){}}},duration:{default:500}},data:function(){return{unwatch:null,id:Object(r.id)()}},computed:{properties:function(){return{generator:this.generator,data:this.data,config:this.config}}},destroyed:function(){Object(a.selectAll)(".d2b-tooltip").remove(),Object(a.select)(window).on("resize."+this.id,null)},mounted:function(){this.updateDefer(),Object(a.select)(window).on("resize."+this.id,this.updateDefer)},methods:{unwatcher:function(){this.unwatch&&this.unwatch()},watcher:function(){this.unwatcher(),this.unwatch=this.$watch("properties",this.update,{deep:!0})},update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.unwatcher(),this.$emit("beforeRender",this.$el,this.generator);var n=this.data;this.config(this.generator);var t=Object(a.select)(this.$el),r=e.skipTransition?t:t.transition().duration(this.duration);t.datum(n),r.call(this.generator),this.$emit("rendered",this.$el,this.generator),this.watcher()},updateNow:function(){this.update({skipTransition:!0})},updateDefer:function(){setTimeout(this.updateNow,0)}}}},xHxk:function(e,n,t){"use strict";var a=t("DZbR"),r=(t.n(a),t("wdoG"));n.a={mixins:[r.a],props:{generator:{default:function(){return Object(a.chartSankey)()}}},data:function(){return{name:"sankey-chart"}}}},xOI5:function(e,n,t){"use strict";var a=t("DZbR"),r=(t.n(a),t("wdoG"));n.a={mixins:[r.a],props:{generator:{default:function(){return Object(a.chartPie)()}}},data:function(){return{name:"pie-chart"}}}},xOYu:function(e,n){},zVKt:function(e,n,t){"use strict";function a(e){o||t("xOYu")}var r=t("NWIo"),s=t("Jivl"),o=!1,u=t("VU/8"),i=a,c=u(r.a,s.a,!1,i,"data-v-7800f61c",null);c.options.__file="demo/DemoGenerator.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=c.exports}},["iXgl"]);
//# sourceMappingURL=app.e5d6aad14dfc93e8eb06.js.map