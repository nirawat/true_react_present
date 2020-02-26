import React, { useState } from 'react';
import { Button, Spin, PageHeader, Menu, Dropdown, Icon } from 'antd';
import { Bar } from 'react-chartjs-2';
import html2canvas from "html2canvas";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const BarChartjs = ({
    isLoad = false,
    title = null,
    subtitle = null,
    labels = null,
    datasets = null,
    options = null,
    showvalue = false,
    legendposition = null,
    scalesstacked = false,
}) => {
    // const { t } = useTranslation();
    const uniqid = require('uniqid');

    const [state, setState] = useState({
        chartId: uniqid(),
    })

    const data = {
        labels: labels,
        datasets: datasets,
    };

    const default_options = {
        legend: {
            position: (legendposition != null ? legendposition : 'bottom')
        },
        scales: {
            xAxes: [
                {
                    stacked: scalesstacked,
                    gridLines: {
                        color: 'rgb(204, 204, 204)',
                        borderDash: [3, 3],
                    },
                    ticks: {
                        fontColor: 'rgb(204, 204, 204)',
                    },
                },
            ],
            yAxes: [
                {
                    stacked: scalesstacked,
                    gridLines: {
                        color: 'rgb(204, 204, 204)',
                        borderDash: [3, 3],
                    },
                    ticks: {
                        fontColor: 'rgb(204, 204, 204)',
                    },
                },
            ],
        },
        plugins: {
            datalabels: {
                display: showvalue,
                color: '#808080',
                align: (scalesstacked === true ? 'center' : 'top'),
                anchor: (scalesstacked === true ? 'center' : 'end'),
            }
        }
    };

    return (
        <div id={`canvasChart${state.chartId}`}>
            <Spin size={"large"} spinning={isLoad} tip="Loading...">
                <PageHeader
                    title={title}
                    subTitle={subtitle}
                    style={{
                        border: '0px',
                        backgroundColor: 'transparent'
                    }}
                >
                </PageHeader>
                <Bar
                    data={data}
                    options={options === null ? default_options : options}
                />
            </Spin>
        </div>
    )

}