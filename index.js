const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]
const ask =  ( index = 0 ) => {
    process.stdout.write(questions[index] + " > ")
}
ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})
process.on('exit', () => {
    console.log(`Bacana!
    O que você aprendeu hoje foi:
    ${answers[0]}
    O que te aborreceu foi:
    ${answers[1]}
    O que você poderia melhorar é:
    ${answers[2]}
    O que te deixou feliz hoje foi:
    ${answers[3]}
    Você ajudou um total de pessoas igual a: 
    ${answers[4]}     
    Parabéns pelos seus progressos! Volte amanhã para outra reflexão!
`)
})