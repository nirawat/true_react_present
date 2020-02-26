import {notification, Modal, Input, Button, Icon} from 'antd';
import Highlighter from "react-highlight-words";
import React from "react";

const confirm = Modal.confirm
const success = Modal.success
const error = Modal.error
const warning = Modal.warning
const info = Modal.info
export const messageNotification = (type, message, description) => {
    switch (type) {
        case 'success':
            notification.success({
                message: message,
                description: description
            })
            break
        case 'warning':
            notification.warning({
                message: message,
                description: description
            })
            break;
        case 'error':
            notification.error({
                message: message,
                description: description
            })
            break;
        default:
            notification.open({
                message: message,
                description: description
            })
            break;
    }
}

export const messageAlert = (type, title, content, functionOnOk,data,okText,cancelText) => {
    switch (type) {
        case 'success':
            success({
                title: title,
                content: content,
                okText: okText ? okText:'ok',
                cancelText:cancelText ? cancelText:'cancel',
                onOk() {
                    if (functionOnOk)
                        functionOnOk(data)
                }
            });
            break
        case 'confirm':
            confirm({
                title: title,
                content: content,
                okText: okText ? okText:'ok',
                cancelText:cancelText ? cancelText:'cancel',
                onOk() {
                    if (functionOnOk)
                        functionOnOk(data)
                }
            });
            break
        case 'warning':
            warning({
                title: title,
                content: content,
                okText: okText ? okText:'ok',
                cancelText:cancelText ? cancelText:'cancel',
                onOk() {
                    if (functionOnOk)
                        functionOnOk()
                }
            });
            break
        case 'error':
            error({
                title: title,
                content: content,
                okText: okText ? okText:'ok',
                cancelText:cancelText ? cancelText:'cancel',
                onOk() {
                    if (functionOnOk)
                        functionOnOk(data)
                }
            });
            break
        default:
            info({
                title: title,
                content: content,
                okText: okText ? okText:'ok',
                cancelText:cancelText ? cancelText:'cancel',
                onOk() {
                    if (functionOnOk)
                        functionOnOk(data)
                }
            });
            break;
    }
}
let searchInput;
let fake_state = {
    searchedColumn:null,
    searchText:null
};
export const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (

        <div style={{padding: 8}}>
            <Input
                ref={node => {
                    searchInput = node;
                }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                style={{width: 188, marginBottom: 8, display: 'block'}}
            />
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon="search"
                size="small"
                style={{width: 90, marginRight: 8}}
            >
                Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{width: 90}}>
                Reset
            </Button>
        </div>
    ),
    filterIcon: filtered => (
        <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}}/>
    ),
    onFilter: (value, record) =>
        record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
        if (visible) {
            setTimeout(() => searchInput.select());
        }
    },
    render: text =>
        fake_state.searchedColumn  === dataIndex ? (
            <Highlighter
                highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                searchWords={[fake_state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ) : (
            text
        ),
});

const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    fake_state['searchText'] = selectedKeys[0]
    fake_state['searchedColumn'] = dataIndex

};

const handleReset = clearFilters => {
    clearFilters();
    fake_state['searchText'] = ''
};

