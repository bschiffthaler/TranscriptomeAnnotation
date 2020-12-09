/* *
 *
 *  (c) 2010-2019 Highsoft AS
 *
 *  Author: Øystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  Accessible high-contrast dark theme for Highcharts. Specifically tailored
 *  towards 3:1 contrast against black/off-black backgrounds. Neighboring
 *  colors are tested for color blindness.
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
// import Highcharts from '../parts/Globals.js';
var textBright = '#F0F0F3';
var axisFont = '20px Open Sans, sans-serif';
var titleFont = '26px Open Sans, sans-serif';
var subTitleFont = '20px Open Sans, sans-serif';
var axisTitleFont = '24px Open Sans, sans-serif';
var tooltipFont = '20px Open Sans, sans-serif';
var legendTitleFont = '20px Open Sans, sans-serif';
var labelFont = '20px Open Sans, sans-serif';

Highcharts.theme = {
    colors: [
        '#a6f0ff',
        '#70d49e',
        '#e898a5',
        '#007faa',
        '#f9db72',
        '#f45b5b',
        '#1e824c',
        '#e7934c',
        '#dadfe1',
        '#a0618b'
    ],
    chart: {
        //backgroundColor: '#1f1f20',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: textBright,
            font: titleFont
        }
    },
    subtitle: {
        style: {
            color: textBright,
            font: subTitleFont
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: textBright,
                font: axisFont
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: textBright,
                font: axisTitleFont
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: textBright,
                font: axisFont
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: textBright,
                font: axisTitleFont
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: textBright,
            font: tooltipFont
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: textBright,
                font: labelFont
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        },
        map: {
            nullColor: '#353535'
        }
    },
    legend: {
        backgroundColor: 'transparent',
        itemStyle: {
            color: textBright,
            font: labelFont
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#D0D0D0',
                font: legendTitleFont
            }
        }
    },
    credits: {
        enabled:false
    },
    labels: {
        style: {
            color: '#707073',
            font: labelFont
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: textBright
        },
        activeDataLabelStyle: {
            color: textBright,
            font: labelFont
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#eee'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: textBright
                    }
                },
                select: {
                    fill: '#303030',
                    stroke: '#101010',
                    style: {
                        color: textBright
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: textBright
        },
        labelStyle: {
            color: textBright
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(180,180,255,0.2)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);
