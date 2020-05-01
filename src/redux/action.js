export const APPEAR_LOGIN_FORM = 'APPEAR_LOGIN_FORM';
export const APPEAR_PLAY_FORM = 'APPEAR_PLAY_FORM';
export const APPEAR_DRAW_FORM = 'APPEAR_DRAW_FORM';
export const APPEAR_REGISTER_FORM = 'APPEAR_REGISTER_FORM';
export const APPEAR_LIKE_ICON = 'APPEAR_LIKE_ICON';
export const APPEAR_DISLIKE_ICON = 'APPEAR_DISLIKE_ICON';
export const APPEAR_FILLLIKE_ICON = 'APPEAR_FILLLIKE_ICON';
export const APPEAR_FILLDISLIKE_ICON = 'APPEAR_FILLDISLIKE_ICON';
export const APPEAR_CHANGEPINFO_FORM = 'APPEAR_CHANGEPINFO_FORM';
export const APPEAR_PINFO_FORM = 'APPEAR_PINFO_FORM';
export const APPEAR_LOGOUT_FORM = 'APPEAR_LOGOUT_FORM';
export const APPEAR_ARTICLE_FORM = 'APPEAR_ARTICLE_FORM';
export const APPEAR_MOODS_FORM = 'APPEAR_MOODS_FORM';
export const APPEAR_CHANGEPASSWORD_FORM = 'APPEAR_CHANGEPASSWORD_FORM';
export const USERNAME_OR_EMAIL = "USERNAME_OR_EMAIL";
export const CG_USERNAME_OR_EMAIL = "CG_USERNAME_OR_EMAIL";
export const PASSWORD = "PASSWORD";
export const OLDPASSWORD = "OLDPASSWORD";
export const NEWPASSWORD = "NEWPASSWORD";
export const PERSON = "PERSON";
export const APPEAR_RESULT = "APPEAR_RESULT";
export const RANNAME = "RANNAME";
export const BTDIS = "BTDIS";
export const SPINING = "SPINING";


export const DISAPPEAR_RESULT = "DISAPPEAR_RESULT";
export const DISAPPEAR_LOGIN_FORM = 'DISAPPEAR_LOGIN_FORM';
export const DISAPPEAR_CHANGEPASSWORD_FORM = 'DISAPPEAR_CHANGEPASSWORD_FORM';
export const DISAPPEAR_PLAY_FORM = 'DISAPPEAR_PLAY_FORM';
export const DISAPPEAR_DRAW_FORM = 'DISAPPEAR_DRAW_FORM';
export const DISAPPEAR_REGISTER_FORM = 'DISAPPEAR_REGISTER_FORM';
export const DISAPPEAR_LOGOUT_FORM = 'DISAPPEAR_LOGOUT_FORM';
export const DISAPPEAR_PINFO_FORM = 'DISAPPEAR_PINFO_FORM';
export const DISAPPEAR_CHANGEPINFO_FORM = 'DISAPPEAR_CHANGEPINFO_FORM';
export const DISAPPEAR_LIKE_ICON = 'DISAPPEAR_LIKE_ICON';
export const DISAPPEAR_DISLIKE_ICON = 'DISAPPEAR_DISLIKE_ICON';
export const DISAPPEAR_FILLLIKE_ICON = 'DISAPPEAR_FILLLIKE_ICON';
export const DISAPPEAR_FILLDISLIKE_ICON = 'DISAPPEAR_FILLDISLIKE_ICON';
export const DISAPPEAR_ARTICLE_FORM = 'DISAPPEAR_ARTICLE_FORM';
export const DISAPPEAR_MOODS_FORM = 'DISAPPEAR_MOODS_FORM';

export function spin(data){
    return{
        type:SPINING,
        data:data
    }
}

export function btDis(data){
    return {
        type:BTDIS,
        data:data
    }
}

export function ranName(data){
    return{
        type:RANNAME,
        data:data
    }
}

export function appearResult(){
    return{
        type:APPEAR_RESULT
    }
}

export function disappearResult(){
    return{
        type:DISAPPEAR_RESULT
    }
}

export function person(data){
    return {
        type:PERSON,
        data:data
    }
}

export function CgUsernameOrEmail(data){
    return {
        type:CG_USERNAME_OR_EMAIL,
        data:data
    }
}

export function appearChangepasswordForm() {
    return {
        type: APPEAR_CHANGEPASSWORD_FORM
    }
}

export function oldPassword(data){
    return {
        type: OLDPASSWORD,
        data:data
    }
}

export function newPassword(data){
    return {
        type: NEWPASSWORD,
        data:data
    }
}

export function disappearChangepasswordForm() {
    return {
        type: DISAPPEAR_CHANGEPASSWORD_FORM
    }
}

export function appearMoodsForm() {
    return {
        type: APPEAR_MOODS_FORM
    }
}

export function usernameOrEmail(data) {
    return {
        type: USERNAME_OR_EMAIL,
        data: data
    }
}

export function password(data) {
    return {
        type: PASSWORD,
        data: data
    }
}

export function disappearMoodsForm() {
    return {
        type: DISAPPEAR_MOODS_FORM
    }
}

export function appearArticleForm() {
    return {
        type: APPEAR_ARTICLE_FORM
    }
}

export function disappearArticleForm() {
    return {
        type: DISAPPEAR_ARTICLE_FORM
    }
}

export function appearLikeIcon() {
    return {
        type: APPEAR_LIKE_ICON
    }
}

export function disappearLikeIcon() {
    return {
        type: DISAPPEAR_LIKE_ICON
    }
}

export function appearFillLikeIcon() {
    return {
        type: APPEAR_FILLLIKE_ICON
    }
}

export function disappearFillLikeIcon() {
    return {
        type: DISAPPEAR_FILLLIKE_ICON
    }
}

export function appearDislikeIcon() {
    return {
        type: APPEAR_DISLIKE_ICON
    }
}

export function disappearDislikeIcon() {
    return {
        type: DISAPPEAR_DISLIKE_ICON
    }
}

export function appearFillDislikeIcon() {
    return {
        type: APPEAR_FILLDISLIKE_ICON
    }
}

export function disappearFillDislikeIcon() {
    return {
        type: DISAPPEAR_FILLDISLIKE_ICON
    }
}

export function appearLoginForm() {
    return {
        type: APPEAR_LOGIN_FORM
    }
}

export function appearPlayForm() {
    return {
        type: APPEAR_PLAY_FORM
    }
}

export function appearDrawForm() {
    return {
        type: APPEAR_DRAW_FORM
    }
}

export function disappearLoginForm() {
    return {
        type: DISAPPEAR_LOGIN_FORM
    }
}

export function disappearPlayForm() {
    return {
        type: DISAPPEAR_PLAY_FORM
    }
}

export function disappearDrawForm() {
    return {
        type: DISAPPEAR_DRAW_FORM
    }
}

export function appearRegisterForm(){
    return {
        type: APPEAR_REGISTER_FORM
    }
}
export function disappearRegisterForm(){
    return {
        type: DISAPPEAR_REGISTER_FORM
    }
}

export function appearLogoutForm(){
    return {
        type: APPEAR_LOGOUT_FORM
    }
}

export function disappearLogoutForm(){
    return {
        type: DISAPPEAR_LOGOUT_FORM
    }
}

export function appearPinfoForm(){
    return {
        type: APPEAR_PINFO_FORM
    }
}

export function disappearPinfoForm(){
    return {
        type: DISAPPEAR_PINFO_FORM
    }
}

export function disappearChangePinfoForm(){
    return {
        type: DISAPPEAR_CHANGEPINFO_FORM
    }
}

export function appearChangePinfoForm(){
    return {
        type: APPEAR_CHANGEPINFO_FORM
    }
}
