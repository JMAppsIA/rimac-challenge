require('dotenv').config();
const { obtenerNombres, registrarNombres } = require('../../src/controller/StarWarsController');
const requestPersonaRegistro = require('../data/registrarPersona.request.json');
const requestPersonaConsulta = require('../data/registrarPersona.request.json');

describe('StarWarsController Spec Because of no ENV Variables ', () => {
  it('Response obtenerNombres must be false', async () => {
    const result = await obtenerNombres(requestPersonaConsulta);
    const data = JSON.parse(result.body);
    expect(data.response.success).toBe(false);
  });

  it('Response registrarNombres must be false', async () => {
    const result = await registrarNombres(requestPersonaRegistro);
    const data = JSON.parse(result.body);
    expect(data.response.success).toBe(false);
  });
});
