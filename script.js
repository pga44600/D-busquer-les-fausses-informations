function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('instruction-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('mission1').style.display = 'block';
}

function showInstructions() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('instruction-screen').style.display = 'block';
}

function showHome() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('instruction-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

function checkQuiz() {
    const incorrectAnswers = ["question1", "question2"];
    const correctAnswers = ["question3", "question4"];
    let correct = true;

    incorrectAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (!checkbox.checked) {
            correct = false;
        }
    });

    correctAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (checkbox.checked) {
            correct = false;
        }
    });

    const resultElement = document.getElementById('quiz-result');
    if (correct) {
        resultElement.innerText = "Bien joué ! Vous avez identifié toutes les fausses informations.";
        document.getElementById('mission1').style.display = 'none';
        document.getElementById('mission2').style.display = 'block'; // Préparez la prochaine mission
    } else {
        resultElement.innerText = "Certaines de vos réponses sont incorrectes. Essayez encore.";
    }
}

function checkConspiracy() {
    const correctAnswer = "effets secondaires";  // Un des arguments souvent mentionnés
    const userAnswer = document.getElementById('conspiracy-input').value.toLowerCase();
    const resultElement = document.getElementById('conspiracy-result');

    if (userAnswer.includes(correctAnswer)) {
        resultElement.innerText = "Correct ! Les effets secondaires sont souvent exagérés dans les théories de conspiration.";
        document.getElementById('mission2').style.display = 'none';
        document.getElementById('mission3').style.display = 'block'; // Préparez la prochaine mission
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
}

function checkSources() {
    const correctSources = ["source1", "source3"];
    const incorrectSources = ["source2", "source4"];
    let correct = true;

    correctSources.forEach(source => {
        const checkbox = document.querySelector(`input[name="${source}"]`);
        if (!checkbox.checked) {
            correct = false;
        }
    });

    incorrectSources.forEach(source => {
        const checkbox = document.querySelector(`input[name="${source}"]`);
        if (checkbox.checked) {
            correct = false;
        }
    });

    const resultElement = document.getElementById('source-result');
    if (correct) {
        resultElement.innerText = "Bien joué ! Vous avez identifié toutes les sources fiables.";
        document.getElementById('mission3').style.display = 'none';
        document.getElementById('mission4').style.display = 'block'; // Préparez la prochaine mission
    } else {
        resultElement.innerText = "Certaines de vos réponses sont incorrectes. Essayez encore.";
    }
}

function checkVaccine() {
    const correctAnswer = "stimule le système immunitaire";
    const userAnswer = document.getElementById('vaccine-input').value.toLowerCase();
    const resultElement = document.getElementById('vaccine-result');

    if (userAnswer.includes(correctAnswer)) {
        resultElement.innerText = "Correct ! Les vaccins stimulent le système immunitaire pour prévenir les maladies.";
        document.getElementById('mission4').style.display = 'none';
        showResult("Félicitations ! Vous avez complété toutes les missions !");
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
}

function showResult(message) {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-screen').style.display = 'block';
}
