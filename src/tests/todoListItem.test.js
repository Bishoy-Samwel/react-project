import { expect } from 'chai';
import { describe } from 'mocha';
import { getBorderStyleForDate } from '../todos/TodoListItem';

describe('getBorderStyleForDate', ()=> {
  it('returns none when the date is older than five days ago', () => {
    const today = Date.now();
    const recent = new Date(Date.now() - 8640000 * 3);
    const expected = 'none';
    const actual = getBorderStyleForDate(recent, today);
    expect(actual).to.equal(expected);
  });
  it('returns red border when the date is not older than five days ago', () => {
    const today = Date.now();
    const recent = new Date(Date.now() - 8640000 * 3);
    const expected = '2px solid red';
    const actual = getBorderStyleForDate(recent, today);
  });
})