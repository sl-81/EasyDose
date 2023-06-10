const { default: Patient } = require('../model/Patient');
const { default: Tylenol } = require('../model/Tylenol');
const { default: Advil } = require('../model/Advil');

const t = new Tylenol();
const a = new Advil();

test('test constructor when age too small', () => {
  expect(() => {
    new Patient(5.6, 1);
  }).toThrow("Please consult your doctor");
})

test('test constructor when age too big', () => {
  expect(() => {
    new Patient(50, 13);
  }).toThrow("Use adult dose");
})

test('get dose with weight on lower end of tylenol dose range', () => {
  const p = new Patient(5.5, 3);
  expect(p.getMaxDoseForWeight(t)).toBe(81.25);
  expect(p.getMaxDoseForWeight(a)).toBe(50);
  const q = new Patient(8.34, 4);
  expect(q.getMaxDoseForWeight(t)).toBe(125);
  expect(q.getMaxDoseForWeight(a)).toBe(50);
  const r = new Patient(16.7, 6);
  expect(r.getMaxDoseForWeight(t)).toBe(250);
  expect(r.getMaxDoseForWeight(a)).toBe(150);
  const s = new Patient(33.35, 11);
  expect(s.getMaxDoseForWeight(t)).toBe(500);
  expect(s.getMaxDoseForWeight(a)).toBe(300);
}) 

test('get dose with weight on higher end of tylenol dose range', () => {
  const p = new Patient (24.9,3);
  expect(p.getMaxDoseForWeight(t)).toBe(325);
  expect(p.getMaxDoseForWeight(a)).toBe(200);
  const q = new Patient (10.83, 4);
  expect(q.getMaxDoseForWeight(t)).toBe(125);
  expect(q.getMaxDoseForWeight(a)).toBe(100);
  const r = new Patient (16.66, 6);
  expect(r.getMaxDoseForWeight(t)).toBe(243.75);
  expect(r.getMaxDoseForWeight(a)).toBe(150);
  const s = new Patient (33.33, 11);
  expect(s.getMaxDoseForWeight(t)).toBe(375);
  expect(s.getMaxDoseForWeight(a)).toBe(300);
})

test('get dose with weight on lower end of advil dose range', () => {
  const p = new Patient (10, 3);
  expect(p.getMaxDoseForWeight(a)).toBe(100);
  expect(p.getMaxDoseForWeight(t)).toBe(125);
  const q = new Patient (15, 4);
  expect(q.getMaxDoseForWeight(a)).toBe(150);
  expect(q.getMaxDoseForWeight(t)).toBe(162.5);
  const r = new Patient(30, 10);
  expect(r.getMaxDoseForWeight(a)).toBe(300);
  expect(r.getMaxDoseForWeight(t)).toBe(375);
  const s = new Patient(40, 11);
  expect(s.getMaxDoseForWeight(a)).toBe(400);
})

test('get dose with weight on higher end of advil dose range', () => {
  const p = new Patient (19.9, 5);
  expect(p.getMaxDoseForWeight(a)).toBe(150);
  expect(p.getMaxDoseForWeight(t)).toBe(250);
  const q = new Patient(14.9, 3);
  expect(q.getMaxDoseForWeight(a)).toBe(100);
  expect(q.getMaxDoseForWeight(t)).toBe(162.5);
  const r = new Patient(24.9, 10);
  expect(r.getMaxDoseForWeight(a)).toBe(200);
  expect(r.getMaxDoseForWeight(t)).toBe(325);
  const s = new Patient(29.9, 11);
  expect(s.getMaxDoseForWeight(a)).toBe(250);
  expect(s.getMaxDoseForWeight(t)).toBe(375);
})

test('throw error if weight too low for Tylenol', () => {
  const p = new Patient (5.4, 3);
  expect(() => {
    p.getMaxDoseForWeight(t);
  }).toThrow('Please consult your doctor');
}) 

test('throw error if weight too low for Advil', () => {
  const p = new Patient (4.99, 3);
  expect(() => {
    p.getMaxDoseForWeight(a);
  }).toThrow('Please consult your doctor');
}) 