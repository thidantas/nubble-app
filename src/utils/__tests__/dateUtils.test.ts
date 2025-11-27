import { add, Duration, format, formatISO, sub } from 'date-fns'

import { dateUtils } from '../dateUtils'

const MOCKED_NOW = 1704110400000

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub'
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration)

  const timeISO = formatISO(time)

  return dateUtils.formatRelative(timeISO)
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      // jest.useFakeTimers().setSystemTime(new Date('2024-01-01T12:00:00Z'))
      jest.spyOn(Date, 'now').mockReturnValue(MOCKED_NOW)
    })

    afterAll(() => {
      // jest.useRealTimers()
      // jest.restoreAllMocks()
      // jest.clearAllMocks()
    })

    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({ seconds: 30 })).toBe('30 s')
    })

    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({ minutes: 20 })).toBe('20 min')
    })

    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({ hours: 15 })).toBe('15 h')
    })

    it('should be displayed in days if less than 7 days ago', () => {
      expect(getDateISO({ days: 5 })).toBe('5 d')
    })

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({ weeks: 3, hours: 2 })).toBe('3 sem')
    })

    it('should be displayed in months if less than 12 months ago', () => {
      expect(getDateISO({ months: 8, days: 3 })).toBe('8 m')
    })

    it('should be displayed in years if more than 1 year ago', () => {
      expect(getDateISO({ years: 2, months: 6 })).toBe('2 a')
    })

    it('should be displayed in dd/MM/YYYY if more than 10 years ago', () => {
      expect(getDateISO({ years: 12 })).toBe('01/01/2012')
    })

    it('should be displayed message when a future date parameter is sent', () => {
      expect(getDateISO({ years: 30 }, 'add')).toBe(
        `Você enviou uma mensagem do futuro: 01/01/2054`
      )
    })

    it("should be displayed 'Invalid date format'", () => {
      expect(dateUtils.formatRelative('Formato de data inválido')).toBe(
        'Formato de data inválido'
      )
    })
  })
})
