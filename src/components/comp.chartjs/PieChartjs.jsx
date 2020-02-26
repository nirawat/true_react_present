import React, { useState } from 'react';
import { Button, Spin, PageHeader, Menu, Dropdown, Icon } from 'antd';
import { Pie } from 'react-chartjs-2';
import html2canvas from "html2canvas";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const PieChartjs = ({
    isLoad = false,
    title = null,
    subtitle = null,
    labels = null,
    datasets = null,
    options = null,
    showvalue = false,
    legendposition = null,
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
                align: 'center',
                anchor: 'center',
            }
        }
    };


    const chartMenu = (
        <Menu>
            <Menu.Item>
                <label onClick={() => { exportBase64('png'); }}>
                    Export to .PNG
                </label>
            </Menu.Item>
            <Menu.Item>
                <label onClick={() => { exportBase64('jpg'); }}>
                    Export to .JPG
                </label>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <label onClick={() => { exportBase64('pdf'); }}>
                    Export to .PDF
                </label>
            </Menu.Item>
        </Menu>
    );

    const ChartDropdownMenu = () => {
        return (
            <Dropdown key="more" overlay={chartMenu}>
                <Button
                    style={{
                        border: 'none',
                        padding: 0,
                    }}
                >
                    <Icon
                        type="more"
                        style={{
                            fontSize: 18,
                            verticalAlign: 'top',
                        }}
                    />
                </Button>
            </Dropdown>
        );
    };

    const exportBase64 = (imgType) => {
        const pdfConverter = require("jspdf");
        let canvasImg = window.document.getElementById(`canvasChart${state.chartId}`);
        html2canvas(canvasImg).then(canvas => {
            const imgBase64 = canvas.toDataURL(`image/${imgType}`);
            const fileName = `chart-image.${imgType}`;
            switch (imgType) {
                case 'pdf':
                    const pdf = new pdfConverter("l", "pt");
                    pdf.addImage(imgBase64, "JPEG", 15, 5, 800, 470);
                    pdf.save(fileName);
                    break;
                default:
                    const link = document.createElement('a');
                    link.download = fileName;
                    link.href = imgBase64;
                    link.click();
                    break;
            }
        });
    }

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
                    extra={[
                        <ChartDropdownMenu key="more" />,
                    ]}
                >
                </PageHeader>
                <Pie
                    data={data}
                    options={options === null ? default_options : options}
                />
            </Spin>
        </div>
    )

}