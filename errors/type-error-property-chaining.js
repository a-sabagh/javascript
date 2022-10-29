person = {
  grades: {
        math: {
            mid: 19,
            final: 20
        },
        sport: {
            mid: 20,
            final: 20
        }
    }
}

person.grades.history.mid
/*Uncaught TypeError: person.grades.history is undefined*/
