import { hola, Person } from '@src/index'

describe('Hola Function', () => {
    it('should return "Mundo!" as default value (if no parameters are passed)', () => {
        expect(hola()).toBe('Mundo!')
    })

    it('should return the input string', () => {
        let input = 'Pelatos'
        expect(hola(input)).toBe(input)
    })
})


describe('Person', ()=>{

    it('should encapsulate age and name', ()=>{
        let person = new Person('Juan', 23)
        expect(person.askAge()).toBe(23)
        expect(person.askName()).toBe('Juan')
    })
})