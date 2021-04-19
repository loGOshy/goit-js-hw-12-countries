class CountdownTimer {
    constructor(selector, targetDate){
        this.element = document.querySelector(selector);
        this.targetDate = targetDate;        

        const date = new Date (this.targetDate);
        const dateNow = Date.now();
        this.timerTime = date - dateNow;
        
        const enteredDateRef = document.querySelector('.entered-date');
        enteredDateRef.textContent = (this.targetDate); 
       
    }
    getSeconds(){
        const sec = Math.floor((this.timerTime % (1000 * 60)) / 1000);
        return createsTwoDigitNum(sec);
    }
    getMinutes(){
        const min = Math.floor((this.timerTime % (1000 * 60 * 60)) / (1000 * 60));
        return createsTwoDigitNum(min);
    }
    getHours(){
        const houers = Math.floor((this.timerTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return createsTwoDigitNum(houers);
    }
    getDays(){
        const days = Math.floor(this.timerTime / (1000 * 60 * 60 * 24));
        return createsTwoDigitNum(days);
    }
    render(){
        const timerRef = this.element.querySelectorAll('.value');
        const timerNow = [
            this.getDays(),
            this.getHours(),
            this.getMinutes(),
            this.getSeconds()
        ];
        timerRef.forEach((item, i) => item.textContent = (`${timerNow[i]}`));       
    }
    init(){
        const intervalID = setInterval(() => {
            this.timerTime -=1000;
            if(this.timerTime <= 0){
                this.timerTime = 0;
                clearInterval(intervalID);
              }
            this.render();
        }, 1000)
    }   
}

function createsTwoDigitNum (value) {
        return String(value).padStart(2, '0');        
    }
function createsThreeDigitNum (value) {
    return String(value).padStart(3, '0');        
}    

export default CountdownTimer;


