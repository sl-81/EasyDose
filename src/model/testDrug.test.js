const { default: Tylenol } = require('../model/Tylenol');
const { default: Advil } = require('../model/Advil');

const t = new Tylenol();
const a = new Advil();

test('getPartialTab with Tylenol', () => {
    expect(t.getPartialTab(81.25)).toBe("1/4");
    expect(t.getPartialTab(125)).toBe("1/4");
    expect(t.getPartialTab(162.5)).toBe("1/2");
    expect(t.getPartialTab(250)).toBe("1/2");
    expect(t.getPartialTab(243.75)).toBe("3/4");
    expect(t.getPartialTab(375)).toBe("3/4");
    expect(t.getPartialTab(325)).toBe("1");
    expect(t.getPartialTab(500)).toBe("1");
})

test('getPartialTab with Advil', () => {
    expect(a.getPartialTab(50)).toBe("1/4");
    expect(a.getPartialTab(100)).toBe("1/2");
    expect(a.getPartialTab(150)).toBe("3/4");
    expect(a.getPartialTab(200)).toBe("1");
    expect(a.getPartialTab(250)).toBe("1 and 1/4");
    expect(a.getPartialTab(300)).toBe("1 and 1/2");
    expect(a.getPartialTab(350)).toBe("1 and 3/4");
    expect(a.getPartialTab(400)).toBe("2");
})

test('getTabletStrength with Tylenol',() => {
    expect(t.getTabletStrength(81.25)).toBe("Regular Strength");
    expect(t.getTabletStrength(162.5)).toBe("Regular Strength");
    expect(t.getTabletStrength(243.75)).toBe("Regular Strength");
    expect(t.getTabletStrength(325)).toBe("Regular Strength")
    expect(t.getTabletStrength(125)).toBe("Extra Strength");
    expect(t.getTabletStrength(250)).toBe("Extra Strength");
    expect(t.getTabletStrength(375)).toBe("Extra Strength");
    expect(t.getTabletStrength(500)).toBe("Extra Strength");
})

test('getTabletStrength with Advil',() => {
    expect(a.getTabletStrength(50)).toBe("Regular Strength");
    expect(a.getTabletStrength(100)).toBe("Regular Strength");
    expect(a.getTabletStrength(150)).toBe("Regular Strength");
    expect(a.getTabletStrength(200)).toBe("Regular Strength")
    expect(a.getTabletStrength(250)).toBe("Regular Strength");
    expect(a.getTabletStrength(300)).toBe("Regular Strength");
    expect(a.getTabletStrength(350)).toBe("Regular Strength");
    expect(a.getTabletStrength(400)).toBe("Regular Strength");
})