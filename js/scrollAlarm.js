function scrollAlarm(e) {
    var res =  this.scrollHeight - this.scrollTop === this.clientHeight;
    const scrollMessage = document.querySelector('.scroll-top');
    if (this.scrollTop == 0) {
        scrollMessage.innerHTML = '<i class="fa fa-arrow-down" aria-hidden="true"></i>';
    } else if (this.scrollTop > 0 && this.scrollTop < this.clientHeight) {
        scrollMessage.textContent = '';
    } else if (res) {
        scrollMessage.innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i>';
    }
}

export default scrollAlarm;
