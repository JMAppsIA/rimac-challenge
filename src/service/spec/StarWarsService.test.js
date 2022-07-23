const StarWarsService = require('../../service/StarWarsService');

describe('StarWarsService', () => {
  describe('getInformation', () => {
    describe('exists', () => {
      it('is defined', async () => {
        const info = StarWarsService.getInformation();
        expect(info).toBeDefined();
      });
    });
  });

  describe('saveInformation', () => {
    describe('exists', () => {
      it('is defined', async () => {
        const info = StarWarsService.saveInformation();
        expect(info).toBeDefined();
      });
    });
  });
});
