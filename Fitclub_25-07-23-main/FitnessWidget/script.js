document.addEventListener('DOMContentLoaded', function() {
    const workoutDurationInput = document.getElementById('workout-duration');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    
    // Event listener for increment button
    incrementBtn.addEventListener('click', function() {
        workoutDurationInput.stepUp(5); // Increase value by 5
    });

    // Event listener for decrement button
    decrementBtn.addEventListener('click', function() {
        workoutDurationInput.stepDown(5); // Decrease value by 5
    });
});
