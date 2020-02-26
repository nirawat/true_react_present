const initialState = {
    collapsed: false,
    toggle:false,
    show_drawer:{visible: false, placement: 'left'}
}

export const menu = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case "OPEN_AND_CLOSE":
            state.collapsed = payload.collapsed;
            state.toggle = payload.toggle;
            return state
        case "Toggle_Drawer":
            state = {...state,show_drawer:{visible: !payload.show_drawer.visible, placement: 'left'}}
            return state
        default:
            return state
    }
}
