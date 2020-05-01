import {
    APPEAR_PLAY_FORM,
    DISAPPEAR_PLAY_FORM,
    APPEAR_DRAW_FORM,
    DISAPPEAR_DRAW_FORM,
    APPEAR_LOGIN_FORM,
    DISAPPEAR_LOGIN_FORM,
    APPEAR_REGISTER_FORM,
    DISAPPEAR_REGISTER_FORM,
    APPEAR_LOGOUT_FORM,
    DISAPPEAR_LOGOUT_FORM,
    APPEAR_PINFO_FORM,
    DISAPPEAR_PINFO_FORM,
    APPEAR_CHANGEPINFO_FORM,
    DISAPPEAR_CHANGEPINFO_FORM,
    APPEAR_LIKE_ICON,
    APPEAR_DISLIKE_ICON,
    APPEAR_FILLDISLIKE_ICON,
    APPEAR_FILLLIKE_ICON,
    DISAPPEAR_DISLIKE_ICON,
    DISAPPEAR_FILLDISLIKE_ICON,
    DISAPPEAR_FILLLIKE_ICON,
    DISAPPEAR_LIKE_ICON,
    APPEAR_ARTICLE_FORM,
    DISAPPEAR_ARTICLE_FORM,
    APPEAR_MOODS_FORM,
    DISAPPEAR_MOODS_FORM,
    USERNAME_OR_EMAIL,
    PASSWORD,
    APPEAR_CHANGEPASSWORD_FORM,
    DISAPPEAR_CHANGEPASSWORD_FORM,
    OLDPASSWORD,
    NEWPASSWORD,
    CG_USERNAME_OR_EMAIL,
    PERSON,
    APPEAR_RESULT,
    DISAPPEAR_RESULT,
    RANNAME,
    BTDIS,
    SPINING
} from './action.js';

const defaultState = {
    spining:false,
    btdis:false,
    ranname:null,
    resultVisible:true,
    person:"Person",
    cgusernameoremail: null,
    loginVisible: false,
    drawVisible: false,
    playVisible: false,
    registerVisible: false,
    logoutVisible: false,
    pinfoVisible: false,
    changepinfoVisible: false,
    likeiconVisible: false,
    dislikeiconVisible: false,
    filllikeiconVisible: false,
    filldislikeiconVisible: false,
    changepasswordVisible: false,
    oldpassword: null,
    newpassword: null,
    articleVisible: false,
    moodsVisible: false,
    usernameOrEmail: null,
    password: null,
    TabIndex: 0
}

export default function controlForm(state = defaultState, action) {

    switch (action.type) {
        case SPINING:
            return Object.assign({},state,{
                spining:action.data
            })
        case BTDIS:
            return Object.assign({},state,{
                btdis:action.data
            })
        case RANNAME:
            return Object.assign({},state,{
                ranname:action.data
            })
        case DISAPPEAR_RESULT:
            return Object.assign({},state,{
                resultVisible:true
            })
        case APPEAR_RESULT:
            return Object.assign({},state,{
                resultVisible:false
            })
        case PERSON:
            return Object.assign({}, state, {
                person: action.data
            });
            break;
        case CG_USERNAME_OR_EMAIL:
            return Object.assign({}, state, {
                cgusernameoremail: action.data
            });
            break;
        case APPEAR_CHANGEPASSWORD_FORM:
            return Object.assign({}, state, {
                changepasswordVisible: true
            });
            break;
        case DISAPPEAR_CHANGEPASSWORD_FORM:
            return Object.assign({}, state, {
                changepasswordVisible: false
            });
            break;
        case OLDPASSWORD:
            return Object.assign({}, state, {
                oldpassword: action.data
            });
            break;
        case NEWPASSWORD:
            return Object.assign({}, state, {
                newpassword: action.data
            });
            break;
        case USERNAME_OR_EMAIL:
            return Object.assign({}, state, {
                usernameOrEmail: action.data
            });
            break;
        case PASSWORD:
            return Object.assign({}, state, {
                password: action.data
            });
            break;
        case APPEAR_LOGIN_FORM:
            return Object.assign({}, state, {
                loginVisible: true
            });
            break;
        case DISAPPEAR_LOGIN_FORM:
            return Object.assign({}, state, {
                loginVisible: false
            });
            break;
        case APPEAR_DRAW_FORM:
            return Object.assign({}, state, {
                drawVisible: true
            });
            break;
        case DISAPPEAR_DRAW_FORM:
            return Object.assign({}, state, {
                drawVisible: false
            });
            break;
        case APPEAR_PLAY_FORM:
            return Object.assign({}, state, {
                playVisible: true
            });
            break;
        case DISAPPEAR_PLAY_FORM:
            return Object.assign({}, state, {
                playVisible: false
            });
            break;
        case DISAPPEAR_REGISTER_FORM:
            return Object.assign({}, state, {
                registerVisible: false
            });
            break;
        case APPEAR_REGISTER_FORM:
            return Object.assign({}, state, {
                registerVisible: true
            });
            break;
        case APPEAR_LOGOUT_FORM:
            return Object.assign({}, state, {
                logoutVisible: true
            });
            break;
        case DISAPPEAR_LOGOUT_FORM:
            return Object.assign({}, state, {
                logoutVisible: false
            });
            break;
        case APPEAR_PINFO_FORM:
            return Object.assign({}, state, {
                pinfoVisible: true
            });
            break;
        case DISAPPEAR_PINFO_FORM:
            return Object.assign({}, state, {
                pinfoVisible: false
            });
            break;
        case DISAPPEAR_CHANGEPINFO_FORM:
            return Object.assign({}, state, {
                changepinfoVisible: false
            });
            break;
        case APPEAR_CHANGEPINFO_FORM:
            return Object.assign({}, state, {
                changepinfoVisible: true
            });
            break;
        case APPEAR_LIKE_ICON:
            return Object.assign({}, state, {
                likeiconVisible: true
            });
            break;
        case DISAPPEAR_LIKE_ICON:
            return Object.assign({}, state, {
                likeiconVisible: false
            });
            break;
        case APPEAR_FILLLIKE_ICON:
            return Object.assign({}, state, {
                filllikeiconVisible: true
            });
            break;
        case DISAPPEAR_FILLLIKE_ICON:
            return Object.assign({}, state, {
                filllikeiconVisible: false
            });
            break;
        case APPEAR_DISLIKE_ICON:
            return Object.assign({}, state, {
                dislikeiconVisible: true
            });
            break;
        case DISAPPEAR_DISLIKE_ICON:
            return Object.assign({}, state, {
                dislikeiconVisible: false
            });
            break;
        case APPEAR_FILLDISLIKE_ICON:
            return Object.assign({}, state, {
                filldislikeiconVisible: true
            });
            break;
        case DISAPPEAR_FILLDISLIKE_ICON:
            return Object.assign({}, state, {
                filldislikeiconVisible: false
            });
            break;
        case APPEAR_ARTICLE_FORM:
            return Object.assign({}, state, {
                articleVisible: true
            });
            break;
        case DISAPPEAR_ARTICLE_FORM:
            return Object.assign({}, state, {
                articleVisible: false
            });
            break;
        case APPEAR_MOODS_FORM:
            return Object.assign({}, state, {
                moodsVisible: true
            });
            break;
        case DISAPPEAR_MOODS_FORM:
            return Object.assign({}, state, {
                moodsVisible: false
            });
            break;
        default:
            return state;
            break;
    }
}