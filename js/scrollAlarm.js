function scrollAlarm(e) {
    var res =  this.scrollHeight - this.scrollTop === this.clientHeight;
    if (!this.scrollTop) {
        document.querySelector('.scroll-top').style.visibility = 'visible';
    } else if (res) {
        document.querySelector('.scroll-bottom').style.visibility = 'visible';
    } else {
        document.querySelector('.scroll-top').style.visibility = 'hidden';
        document.querySelector('.scroll-bottom').style.visibility = 'hidden';
    }
}

export default scrollAlarm;
