// Create a basic interval timer - mainly to be used for HIIT exercises.
// User gets to choose the interval and rest length.


// Length of intervals (length of one set) that users input = countdown timer
// Rest (sets by users) is triggered after each interval timer ends 

// document ready
$(function() {

    // cache selectors
    let intervalTime = $('.interval').val();
    let restTime = $('.rest').val();
    const begin = $('.begin');
    const stop = $('.stop');
    const reset = $('.reset');
    
    let interval;

    // update value when user input is changed
    $('.interval').on('input', function() {
        $('.timeLeft').text($('.interval').val());
        // intervalTime = $('.interval').val();
    })

    // when begin button is clicked, start countdown timer for interval
    begin.on('click', function(e) {
        e.preventDefault();
        clearInterval();
        interval = setInterval(countdownTimer, 1000);
        console.log(intervalTime); 
    })

    // when interval gets to zero, start countdown timer for rest
    // countdown timer
    function countdownTimer() {

            $('.timeLeft').text(intervalTime);
            intervalTime -= 1;

        if (intervalTime === 0) {
            $('.timeLeft').text(restTime);
                restTime -= 1;
                duringRest();

        } else if (restTime === 0) {
            alert('Good work!')
        }
    }
    
/*-------------- did not work -------------*/
    // create a loop for rest and interval phase
    // when interval phase gets to 0, go to rest phase
    // when rest timer gets to zero, go back to interval

    // let time;

    // function countdownTimer() {
    //     checkCondition();
    //     time -= 1; 
    // }

    // function checkCondition() {
    //     if (time === 0) {
    //         time = restTime + 1;
    //         duringRest();
    //     } else if (time !== 0) {
    //         time = intervalTime + 1;
    //     }
    // }

    // stop when stop button is clicked

    stop.on('click', function() {
        clearInterval(interval);
    })

    // reset and clear form when reset button is clicked
    
    reset.on('click', function() {
        form.reset();
        $('.timeLeft').text(0);
        clearInterval(interval);
    })

    // change text and background colour during rest time

    function duringRest() {
        $('.textChange').text('Rest time!');
        $('body').css('background', '#48A9A6')
    }

    
    
})