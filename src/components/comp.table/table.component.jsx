import React, { useState} from 'react';
import {Col, Row, Table, Button, Icon, Empty, Spin, Pagination,Select} from 'antd';
import {useTranslation} from "react-i18next";

// columns data style_pagination eventOfTable  page_state rowKey scroll = null,pageSizeOptions = null,defaultPageSize = null,showSizeChanger = null
export const TableComponent = ({columns = null, data = null, style_pagination = null, eventOfTable = null, page_state = null, rowKey = null, scroll = {x: 800}, pageSizeOptions = ['5','10','15'], defaultPageSize = null, showSizeChanger = null, size = 'default' || 'middle' || 'small', load = false}) => {
    const { Option } = Select;
    const {t} = useTranslation()
    const children = [];
    for (let i = 0; i < pageSizeOptions.length; i++) {
        children.push(<Option key={parseInt(pageSizeOptions[i])}>{pageSizeOptions[i]} / page</Option>);
    }
    const locale = {
        emptyText: Empty.PRESENTED_IMAGE_SIMPLE,
    };

    const [state_preview, setPreview] = useState([])
    const [this_page, setThisPage] = useState(0)
    const [page_size,setPageSize] = useState(parseInt(pageSizeOptions[0]))
    const preview = () => {
        if (this_page > 0) {
            setThisPage(this_page - 1)
            eventOfTable(state_preview[this_page - 1].preview,page_size)
        }
        if (this_page === 1) {
            setPreview([])
        }
        state_preview.splice(this_page, 1);
    }
    const next = () => {
        if (page_state) {
            setThisPage(this_page + 1)
            if (this_page === 0) {
                setPreview(state_preview.concat({preview: null, next: page_state}))
            } else {
                setPreview(state_preview.concat({preview: state_preview[this_page - 1].next, next: page_state}))
            }
        }
        eventOfTable(page_state,page_size)
    }

    return (
        <>
            <Spin size={"large"} spinning={load} tip="Loading...">
                { style_pagination === true ? <>
                    <Select size={'small'} onChange={(value)=>{
                        eventOfTable(null,parseInt(value))
                        setPageSize(parseInt(value))
                    }} defaultValue={pageSizeOptions[0]} style={{ width: 100 ,marginBottom:5}}>
                        {children}
                    </Select>
                </>:<></>}
                <Table rowKey={rowKey} style={{background: '#fff'}}
                       columns={columns}
                       size={size}
                       tableLayout={'fix'}
                       locale={locale}
                       dataSource={data}
                       scroll={scroll}
                       onChange={(e) => {
                           if (eventOfTable)
                               eventOfTable(page_state)
                       }}
                       pagination={style_pagination ? false : {
                           defaultPageSize: defaultPageSize,
                           showSizeChanger: showSizeChanger,
                           pageSizeOptions: pageSizeOptions
                       }}
                />
                {
                    style_pagination === true ? (
                        <Row style={{marginTop: '20px', float: 'right'}} gutter={16}>
                            <Col span={12}>
                                <Button onClick={preview} disabled={this_page ? false : true} size={"small"}><Icon
                                    type="left"/>{t('preview')}</Button>
                            </Col>
                            <Col span={12}>
                                <Button onClick={next} disabled={page_state ? false : true} size={"small"}>{t('next')}
                                    <Icon type="right"/></Button>
                            </Col>
                        </Row>) : <></>
                }
            </Spin>
        </>
    )
}