var allowSubmit = false;
function capcha_filled(){
    allowSubmit = true;
}
function capcha_expired(){
    allowSubmit = false;
}
function check_if_capcha_is_filled(e){
    if(allowSubmit) return true;
    e.preventDefault();
    alert('Fight us and defeat viruses by saying "I am not a robot!!"!!');
}