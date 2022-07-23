const StarWarsController = require('../StarWarsController');

describe('StarWarsController', () => {
  describe('getInformation', () => {
    describe('exists', () => {
      it('is defined', async () => {
        const info = StarWarsController.getInformation();
        expect(info).toBeDefined();
      });
    });
  });

  describe('saveInformation', () => {
    describe('exists', () => {
      it('is defined', async () => {
        const info = StarWarsController.saveInformation();
        expect(info).toBeDefined();
      });
    });
  });
});
