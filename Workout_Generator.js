// Program will generate a randomized workout routine and motivational quote.

const cardio = ['stationary bike', 'treadmill', 'eliptical', 'rowing machine', 'jump rope', 'stair climber'];
const upperBody = [
    'push-ups',
    'pull-ups',
    'dumbbell curls',
    'shoulder press',
    'bench press',
    'tricep dips',
    'bicep curls',
    'chest flyes'
];
const lowerBody = [
    'squats',
    'lunges',
    'deadlifts',
    'leg press',
    'calf raises',
    'hamstring curls',
    'leg extensions',
    'glute bridges'
];
const core =[
    'plank',
    'sit-ups',
    'bicycle crunches',
    'mountain climbers',
    'Russian twists',
    'leg raises',
    'flutter kicks',
    'side plank'
];
const quotes = [
    "Don't watch the clock; do what it does. Keep going.",
    "Success is what comes after your stop making excuses.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Push yourself because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream bigger. Do bigger."
];
//function to get a random element out of one of the arrays
function getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}
//function that returns all the text for the radomized workout
function randomized_workout(){ 
    const cardioExercise = getRandomElement(cardio);
    const upperBodyExercise = getRandomElement(upperBody);
    const lowerBodyExercise = getRandomElement(lowerBody);
    const coreExercise = getRandomElement(core);
    const motivationalQuote = getRandomElement(quotes);
  
    return `Today's workout routine:
  - Cardio: ${cardioExercise}
  - Upper Body: ${upperBodyExercise}
  - Lower Body: ${lowerBodyExercise}
  - Core: ${coreExercise}
    
  Motivational Quote:
  "${motivationalQuote}"`;
  }

  console.log(randomized_workout());