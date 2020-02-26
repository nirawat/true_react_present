import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Button, Icon, Divider, Form, Input, Result } from 'antd';
import { useTranslation } from 'react-i18next'
import { BarChartjs } from '../comp.chartjs/BarChartjs'

export default () => {
    const { t } = useTranslation();

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const datasets_1 = [
        {
            label: 'Chart Demo',
            backgroundColor: ['#ff5050', '#ff66ff', '#5cd65c', '#3399ff', '#ff9900', '#c44dff', '#cc6600'],
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ];

    const datasets_2 = [
        {
            label: 'Blue',
            backgroundColor: '#ff9900',
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            label: 'Red',
            backgroundColor: '#ff33cc',
            borderWidth: 1,
            data: [5, 7, 54, 32, 87, 45, 25],
        },
        {
            label: 'Yellow',
            backgroundColor: '#33cc33',
            data: [25, 54, 2, 48, 78, 54, 35],
        },
        {
            label: 'Green',
            backgroundColor: '#c44dff',
            borderWidth: 1,
            data: [52, 47, 45, 4, 58, 7, 45],
        },
    ];

    const datasets_3 = [
        {
            label: 'Blue',
            backgroundColor: '#ff9900',
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            label: 'Red',
            backgroundColor: '#ff33cc',
            borderWidth: 1,
            data: [5, 7, 54, 32, 87, 45, 25],
        },
        {
            label: 'Yellow',
            backgroundColor: '#33cc33',
            data: [25, 54, 2, 48, 78, 54, 35],
        },
        {
            label: 'Green',
            backgroundColor: '#c44dff',
            borderWidth: 1,
            data: [52, 47, 45, 4, 58, 7, 45],
        },
    ];

    const datasets_4 = [
        {
            label: 'Chart Demo',
            order: 1,
            backgroundColor: ['#ff3300', '#ff33cc', '#33cc33', '#3399ff', '#ff9900', '#c44dff'],
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            type: 'line',
            order: 2,
            backgroundColor: ['#ccf2ff'],
            borderWidth: 1,
            data: [69, 64, 86, 89, 58, 59, 46],
        }
    ];

    return (
        <>
            <div className="container">
                <Row>
                    <Col span={12}>
                        <BarChartjs
                            title={'Chart A'}
                            subtitle={'This chart js title.'}
                            isLoad={false}
                            labels={labels}
                            datasets={datasets_1}
                            showvalue={true}
                        />
                    </Col>
                    <Col span={12}>
                        <BarChartjs
                            title={'Chart B'}
                            subtitle={'This chart js title.'}
                            isLoad={false}
                            labels={labels}
                            datasets={datasets_2}
                            showvalue={true}
                        />
                    </Col>
                    <Col span={12}>
                        <BarChartjs
                            title={'Chart C'}
                            subtitle={'This chart js title.'}
                            isLoad={false}
                            labels={labels}
                            datasets={datasets_3}
                            scalesstacked={true}
                            showvalue={true}
                        />
                    </Col>
                    <Col span={12}>
                        <BarChartjs
                            title={'Chart D'}
                            subtitle={'This chart js title.'}
                            isLoad={false}
                            labels={labels}
                            datasets={datasets_4}
                            showvalue={true}
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
}