const castSpell = (level => (multiplier => level * multiplier))(5)(5);

console.log(castSpell);
