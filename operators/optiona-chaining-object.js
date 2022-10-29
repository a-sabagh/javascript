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

console.log(person?.grades?.history?.mid)
console.log(person && person.grades && person.grades.history && person.grades.history.mid)
