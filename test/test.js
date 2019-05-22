'use strict'

let expect = require('chai').expect
let numFormatter = require('../index')

describe('Num formater eceketek', () => {
    it('should convert single digits', () => {
        let result = numFormatter(1)
        expect(result).to.equal('1')
    })
    it('should convert double digits', () => {
        let result = numFormatter(13)
        expect(result).to.equal('13')
    })
    it('should convert tripple digits', () => {
        let result = numFormatter(134)
        expect(result).to.equal('134')
    })
    it('should convert 4 digits', () => {
        let result = numFormatter(1344)
        expect(result).to.equal('1,344')
    })
    it('should convert 5 digits', () => {
        let result = numFormatter(13444)
        expect(result).to.equal('13,444')
    })
})
