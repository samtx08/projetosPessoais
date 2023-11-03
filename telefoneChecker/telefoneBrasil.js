const telephoneCheckBrazil = (numeroTelefone) => /^(\(\d{2}\)|\d{2})(\s?)(9\s?)?(\d{4})([\s\-]?)(\d{4})$/g.test(numeroTelefone);

module.exports = telephoneCheckBrazil;
